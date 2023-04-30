import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '../Footer'

interface PageProps {
	title: string
	description: string
	children: JSX.Element | JSX.Element[]
}

export default function Page({ title, description, children }: PageProps) {
	return (
		<div className='max-w-screen-lg mx-auto grid gap-4'>
			<Header />
			<main className='pt-10 '>{children}</main>
			<Footer />
		</div>
	)
}
