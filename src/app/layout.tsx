import { ClientProviders } from "../components/ClientProviders";

export { metaData } from "./metadata";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.baekseungbeom.site" />
        <meta property="og:title" content="백승범 (Baek Seungbeom) - 프론트엔드 개발자" />
        <meta
          property="og:description"
          content="프론트엔드 개발자 백승범입니다. 제가 개발한 서비스를 통해 많은 사람들의 삶이 한층 나아졌으면 합니다."
        />
        <meta property="og:image" content="https://www.baekseungbeom.site/thumbnail.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="400" />
        <meta property="og:site_name" content="백승범 포트폴리오" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="백승범 (Baek Seungbeom) - 프론트엔드 개발자" />
        <meta
          property="twitter:description"
          content="프론트엔드 개발자 백승범입니다. 제가 개발한 서비스를 통해 많은 사람들의 삶이 한층 나아졌으면 합니다."
        />
        <meta property="twitter:image" content="https://www.baekseungbeom.site/thumbnail.png" />

        <meta name="robots" content="index, follow" />
        <meta name="language" content="Korean" />
        <link rel="canonical" href="https://www.baekseungbeom.site" />
      </head>
      <body>
        <div id="modal-root"></div>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
