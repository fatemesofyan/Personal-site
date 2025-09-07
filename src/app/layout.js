import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "سایت شخصی رضا ذوقی",
	description:
		"سایت شخصی برنامه‌نویس؛ پروژه‌ها، مهارت‌ها و تجربه‌های توسعه وب و نرم‌افزار",
	icons: {
		icon: "/favicon.png",
	},
};

export default function RootLayout({ children }) {
	return (
	 <html lang="fa" dir="rtl">
  <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem={true}
  >
    <body className={`${geistSans.variable} ${geistMono.variable} 
                      bg-background-default dark:bg-background-dark
                      text-text-body-light dark:text-text-body-dark
                      min-h-screen`}>
      {children}
    </body>
  </ThemeProvider>
</html>


	);
}
