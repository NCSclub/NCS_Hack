import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NCS HACK",
  description: "NCS HACK is a 3-day, 2-night hackathon where IT enthusiasts and professionals collaborate to solve real-world challenges. During the event, teams will develop inventive solutions, guided by expert-led workshops and mentors. The hackathon will conclude with final presentations and a ceremony, fostering innovation, entrepreneurship, and networking within the Algerian IT community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
