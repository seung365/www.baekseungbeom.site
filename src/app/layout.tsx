import { Metadata } from "next";
import ClientProvider from "../components/common/ClientProvider";

export const metadata: Metadata = {
  title: "개발자 백승범",
  description: "프론트엔드 개발자 백승범입니다. React, TypeScript 등을 활용한 웹 개발 프로젝트를 확인하실 수 있습니다.",
  keywords: "백승범, baekseungbeom, 프론트엔드 개발자, frontend developer, 웹 개발자",
  authors: [{ name: "백승범", url: "https://www.baekseungbeom.site" }],
  creator: "백승범",
  publisher: "백승범",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://www.baekseungbeom.site",
    title: "백승범 (Baek Seungbeom) - 프론트엔드 개발자",
    description: "프론트엔드 개발자 백승범입니다. 제가 개발한 서비스를 통해 많은 사람들의 삶이 한층 나아졌으면 합니다.",
    siteName: "백승범 포트폴리오",
    images: [
      {
        url: "https://www.baekseungbeom.site/thumbnail.png",
        width: 800,
        height: 400,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "백승범 (Baek Seungbeom) - 프론트엔드 개발자",
    description: "프론트엔드 개발자 백승범입니다. 제가 개발한 서비스를 통해 많은 사람들의 삶이 한층 나아졌으면 합니다.",
    images: ["https://www.baekseungbeom.site/thumbnail.png"],
  },
  alternates: {
    canonical: "https://www.baekseungbeom.site",
  },
  other: {
    language: "ko",
  },
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko-KR">
      <body>
        <div id="modal-root"></div>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
