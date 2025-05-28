import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const comments = await prisma.comment.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json({ comments });
  } catch (error) {
    console.error("Error in GET /api/comments:", error);
    return NextResponse.json({ error: "댓글을 가져오는 중 오류가 발생했습니다." }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, message } = body;

    // 입력 검증
    if (!name || !message) {
      return NextResponse.json({ error: "이름과 메시지는 필수입니다." }, { status: 400 });
    }

    if (name.length > 20) {
      return NextResponse.json({ error: "이름은 20자 이하로 입력해주세요." }, { status: 400 });
    }

    if (message.length > 500) {
      return NextResponse.json({ error: "메시지는 500자 이하로 입력해주세요." }, { status: 400 });
    }

    const comment = await prisma.comment.create({
      data: {
        name: name.trim(),
        message: message.trim(),
      },
    });

    return NextResponse.json({ success: true, comment });
  } catch (error) {
    console.error("Error in POST /api/comments:", error);
    return NextResponse.json({ error: "댓글을 작성하는 중 오류가 발생했습니다." }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "댓글 ID가 제공되지 않았습니다." }, { status: 400 });
    }

    const comment = await prisma.comment.findUnique({
      where: { id: id },
    });

    if (!comment) {
      return NextResponse.json({ error: "댓글을 찾을 수 없습니다." }, { status: 404 });
    }

    await prisma.comment.delete({
      where: { id: id },
    });

    return NextResponse.json({
      success: true,
      message: "댓글이 삭제되었습니다.",
    });
  } catch (error) {
    console.error("Error in DELETE /api/comments:", error);
    return NextResponse.json({ error: "댓글을 삭제하는 중 오류가 발생했습니다." }, { status: 500 });
  }
}
