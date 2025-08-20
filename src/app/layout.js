import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				{children}
			</body>
		</html>
	);
}
