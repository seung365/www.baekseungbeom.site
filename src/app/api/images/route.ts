import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { join } from "path";
import * as crypto from "crypto";
import prisma from "@/lib/prisma";
import { existsSync, unlink } from "fs";

export async function GET() {
  try {
    const images = await prisma.image.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json({ images });
  } catch (error) {
    console.error("Error in GET /api/images:", error);
    return NextResponse.json({ error: "이미지를 가져오는 중 오류가 발생했습니다." }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "파일이 제공되지 않았습니다." }, { status: 400 });
    }

    const fileType = file.type;
    if (!fileType.startsWith("image/")) {
      return NextResponse.json({ error: "이미지 파일만 업로드 가능합니다." }, { status: 400 });
    }

    if (file.size > 5 * 1024 * 1024) {
      // 5MB
      return NextResponse.json({ error: "파일 크기가 너무 큽니다. 최대 5MB까지 업로드 가능합니다." }, { status: 400 });
    }

    const fileExtension = file.name.split(".").pop();
    const randomName = crypto.randomBytes(16).toString("hex");
    const fileName = `${randomName}.${fileExtension}`;

    const uploadDir = join(process.cwd(), "public", "uploads");
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const filePath = join(uploadDir, fileName);
    await writeFile(filePath, buffer);

    const image = await prisma.image.create({
      data: {
        name: file.name,
        url: `/uploads/${fileName}`,
        size: file.size,
        type: fileType,
      },
    });

    return NextResponse.json({ success: true, image });
  } catch (error) {
    console.error("Error in POST /api/images:", error);
    return NextResponse.json({ error: "이미지를 업로드하는 중 오류가 발생했습니다." }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID가 제공되지 않았습니다." }, { status: 400 });
    }

    const image = await prisma.image.findUnique({
      where: { id: id },
    });

    if (!image) {
      return NextResponse.json({ error: "이미지를 찾을 수 없습니다." }, { status: 404 });
    }

    const fileUrl = image.url;
    const fileName = fileUrl.split("/").pop();

    if (fileName) {
      const filePath = join(process.cwd(), "public", "uploads", fileName);
      if (existsSync(filePath)) {
        await unlink(filePath, (err) => {
          console.error("파일 삭제 오류", err);
        });
      }
    }
    await prisma.image.delete({
      where: { id: id },
    });
    return NextResponse.json({ success: true, message: "이미지가 삭제되었습니다." });
  } catch (error) {
    console.error("Error in DELETE /api/images:", error);
    return NextResponse.json({ error: "이미지를 삭제하는 중 오류가 발생했습니다." }, { status: 500 });
  }
}
