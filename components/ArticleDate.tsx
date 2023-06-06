import IconOrchester from '@assets/icons'
import { formatDate } from '@utils/date'

interface Props {
	date: Date
	time: number
}

export default function ArticleDate({ date, time }: Props) {
	return (
		<div className='flex items-center gap-3'>
			<span className='text-sm text-gray-500 flex items-center gap-1 '>
				<IconOrchester icon='calendar' size={18} />
				<p className='first-letter:uppercase'>{formatDate(date)}</p>
			</span>
			<span className='text-sm text-gray-500 flex items-center gap-1'>
				<IconOrchester icon='book' size={18} />
				<p>{`${time} min read`}</p>
			</span>
		</div>
	)
}
