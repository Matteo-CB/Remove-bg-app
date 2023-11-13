import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Remove Background - Supprimez l'arrière-plan de vos images en ligne",
  description:
    "Supprimez l'arrière-plan de vos images en ligne en quelques secondes. Aucune installation et configuration requise. 100% gratuit et sécurisé, réaliser par DLK Digital.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className + " bg-neutral-100"}>
        <div className="min-h-[400px] w-[400px] h-[400px] min-w-[400px] opacity-20 bg-sky-500 rounded-full blur-3xl -z-10 absolute top-10 left-10"></div>
        <div className="min-h-[400px] w-[400px] h-[400px] min-w-[400px] opacity-20 bg-sky-500 rounded-full blur-3xl -z-10 absolute bottom-2 right-6"></div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
