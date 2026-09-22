import type { Metadata } from "next";
import { Play } from "next/font/google";
import { DEFAULT_THEME, themeInitScript } from "@/lib/theme";
import "./globals.css";

const play = Play({
  variable: "--font-play-family",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Siyana Dafova Frontend Developer",
  description: "Siyana Dafova's frontend developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme={DEFAULT_THEME}
      className={`${play.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: themeInitScript,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
