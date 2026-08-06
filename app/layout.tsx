import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Tech4Good — Phát triển & Thuyết trình | ANGC 2026",
  description: "Cuộc thi đội nhóm xây dựng giải pháp AI cho vấn đề xã hội thực tế và thuyết trình tại vòng chung kết quốc tế ANGC 2026.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi"><body>{children}</body></html>;
}
