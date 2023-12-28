"use client";
import React from "react";

import Links from "./links/page";
import { usePathname, useRouter } from "next/navigation";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Links />
        {children}
        <div className="page"></div>
      </body>
    </html>
  );
}
