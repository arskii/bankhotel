import Header from '@/components/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
})

const miracle = localFont({
	src: './../fonts/Miracle.woff2',
	display: 'swap',
	variable: '--font-miracle',
})

export const metadata: Metadata = {
	title: 'Bank Hotel',
	description: 'The luxurious hotel in the most beautiful European city',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={`${miracle.variable} ${inter.variable}`}>
				<Header />
				{children}
			</body>
		</html>
	)
}
