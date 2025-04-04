import { Metadata } from "next";

export function metaData(): Metadata {
  return {
    title: "백승범 (Baek Seungbeom) - 프론트엔드 개발자 포트폴리오",
    description:
      "프론트엔드 개발자 백승범의 포트폴리오 웹사이트입니다. React, TypeScript 등을 활용한 웹 개발 프로젝트를 확인하실 수 있습니다.",
    keywords: "백승범, baekseungbeom, 프론트엔드 개발자, frontend developer, 웹 개발자",
    authors: [{ name: "백승범", url: "https://www.baekseungbeom.site" }],
    creator: "백승범",
    publisher: "백승범",
  };
}
