import "@/app/globals.css";
import { Poppins } from "next/font/google";
import { Toaster } from "@/app/components/ui/sonner";
import { ThemeProvider } from "@/app/components/ThemeProvider";
import { Metadata } from "next";

const poppins = Poppins({
    weight: ['300', '400', '500', '600', '700', '800'],
    subsets: ["latin"],
    display: 'swap',
});

export const metadata: Metadata = {
    title: "BemLidos - Sua Biblioteca Pessoal",
    description: "Organize, descubra e compartilhe suas leituras com a comunidade BemLidos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-br" suppressHydrationWarning>
            <body className={poppins.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                    <Toaster position="top-center" />
                </ThemeProvider>
            </body>
        </html>
    );
}