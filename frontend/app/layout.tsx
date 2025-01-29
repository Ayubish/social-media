import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "../context/AuthCotext";
import { TabProvider } from "../context/tabContext";
import { PostProvider } from "../context/PostContext"
import BottomNav from "./components/BottomNav";


export const metadata: Metadata = {
  title: "Social Media | By Ayub",
  description: "A futuristic, cool and blazingly fast social media.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <TabProvider>
          <PostProvider>

      <body>
        {children}
      <BottomNav />
      </body>
          </PostProvider>
        </TabProvider>
      </AuthProvider>
    </html>
  );
}
