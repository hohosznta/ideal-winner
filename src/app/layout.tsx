import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IX Expert 진단 결과 리포트",
  description: "IX Expert 성장 가이드 리포트",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
