interface Props {
	label: string
	children: React.ReactNode
	tag?: string
	open?: boolean
}

export default function Collapsable({ children, label, tag, open }: Props) {
	return (
		<details className='group' open={open}>
			<summary className='list-none py-2.5 px-4 cursor-pointer rounded-md flex items-center justify-between hover:bg-gray-100 transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-500 group-open:bg-gray-50 hover:group-open:bg-gray-100 hover:text-gray-900 group-open:text-gray-900'>
				{label}
				{tag && (
					<span className='bg-gray-200 capitalize font-semibold text-black font-medium text-xs rounded-full px-2.5 py-1'>
						{tag}
					</span>
				)}
			</summary>
			<div className='px-4 -mt-2 rounded-md  group-open:mb-4'>{children}</div>
		</details>
	)
}
