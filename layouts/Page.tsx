import Head from 'next/head'
import Header from '@components/Header'

interface Props {
	title: string
	description: string
	children: JSX.Element | JSX.Element[]
	footer?: boolean
	hideHeader?: boolean
}

export default function Page({ title, description, children, footer, hideHeader }: Props) {
	return (
		<div className='max-w-screen-lg mx-auto grid gap-4 pb-32'>
			{!hideHeader && <Header />}
			<main className='pt-10'>{children}</main>
		</div>
	)
}
