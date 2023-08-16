import Uk from '../../assets/icons/2.svg'
import s from './button.module.scss'
export default function Button({ size = 's' }: { size?: string }) {
	const isLarge = size === 'm' ? true : false
	return (
		<button className={isLarge ? [s.button, s.large].join(' ') : s.button}>
			<img width={42} height={42} src={Uk}></img>
			<div>
				<a target='_blank' href='#'>
					{' '}
					Зробити донат
				</a>
			</div>
		</button>
	)
}
