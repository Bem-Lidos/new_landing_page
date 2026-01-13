import "@/app/globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "@/app/components/ui/sonner";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "BemLidos - Sua Biblioteca Pessoal",
    description: "Organize, descubra e compartilhe suas leituras com a comunidade BemLidos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-br" className="dark">
            <body className={inter.className}>
                {children}
                <Toaster position="top-center" />
            </body>
        </html>
    );
}