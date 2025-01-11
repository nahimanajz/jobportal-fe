"use client";
//import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import { Provider } from "@/components/common/Provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body suppressHydrationWarning={false} >
        <Provider>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          {children}
        </div>

        </Provider>
      </body>
    </html>
  );
}
