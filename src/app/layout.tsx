import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import TopNav from "@/components/navbar/TopNav";

export const metadata: Metadata = {
  title: "PairUp",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body>
      <Providers>
        <TopNav />
        <main className="container mx-auto">{children}</main>
      </Providers>
    </body>
  </html>
);

export default RootLayout;
