interface Props {
	label: string
	children: React.ReactNode
}

export default function Collapsable({ children, label }: Props) {
	return (
		<details className='group'>
			<summary className='list-none py-2.5 px-4 cursor-pointer rounded-md flex items-center justify-between hover:bg-gray-100 hover:text-gray-900 transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-500 group-open:bg-gray-50 hover:group-open:bg-gray-100'>
				{label}
			</summary>
			<div className='p-4 mt-1 rounded-md group-open:bg-gray-50 group-open:mb-4'>{children}</div>
		</details>
	)
}
