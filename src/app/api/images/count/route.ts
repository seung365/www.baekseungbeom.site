import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const uploadDir = path.join(process.cwd(), "public", "uploads");

    if (!fs.existsSync(uploadDir)) {
      return NextResponse.json({ count: 0 });
    }

    const files = fs.readdirSync(uploadDir);
    const imageFiles = files.filter((file) => /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file));

    return NextResponse.json({ count: imageFiles.length });
  } catch (error) {
    console.error("Error counting files:", error);
    return NextResponse.json({ error: "파일 개수를 가져오는 중 오류가 발생했습니다." }, { status: 500 });
  }
}
