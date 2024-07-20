// import type { Metadata } from "next";
import React, { ReactNode} from "react";
import "./globals.css";


function RootLayout({ children }: {children: ReactNode }){
  return (
    <html lang="en">
      <head>
        <meta charSet="uft-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="theme-color" content="#00000"/>
        <link rel="manifest" href="./manifest.json"/>
        <link rel="icon" href="/favicon.ico"/>
      </head>
      <body>{children}</body>
    </html>
  )
}
export default RootLayout;

// export const metadata: Metadata = {
//   title: "Yami Finance",
//   description: "Get Financial Freedom & Loan Solution",
// };

// export default function RootLayout({children}) {
//   return (
//     <html lang="en">
//       <body className="">{children}</body>
//     </html>
//   );
// }

