'use client';

import "./globals.scss";
import { BackgroundProvider } from "@/context/background";
import BackgroundRenderer from "@/components/backgroundRenderer/backgroundRenderer";

export default function Layout({ children }) {

  return (
    <html lang="en">
      <body>
        <BackgroundProvider>
          <BackgroundRenderer>{children}</BackgroundRenderer>
        </BackgroundProvider>
      </body>
    </html>
  );
}
