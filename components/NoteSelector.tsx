export default function NoteSelector() {
	return (
		<section className='flex w-full h-40 overflow-hidden rounded-lg'>
			<div className='w-full h-full bg-blue-200 flex-grow opacity-30 hover:opacity-100 hover:w-[180%] cursor-pointer transition-all' />
			<div className='w-full h-full bg-blue-400 flex-grow opacity-30 hover:opacity-100 hover:w-[180%] cursor-pointer transition-all' />
			<div className='w-full h-full bg-blue-600 flex-grow opacity-30 hover:opacity-100 hover:w-[180%] cursor-pointer transition-all' />
			<div className='w-full h-full bg-blue-800 flex-grow opacity-30 hover:opacity-100 hover:w-[180%] cursor-pointer transition-all' />
		</section>
	)
}
