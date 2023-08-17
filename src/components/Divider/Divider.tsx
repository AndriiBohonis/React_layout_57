import icon from '../../assets/icons/4.svg'
import { InfiniteLooper } from './Looper'

export default function Divider() {
	const str = [
		icon,
		'#МАЙБУТНЄ',
		'#СВОБОДА',
		'#ЗЕМЛЯ',
		'#РОДИНА',
		'#СИЛА',
		'#ЗАХИСТ',
		'#ВОЛЯ',
		'#НАЦІЯ',
	]

	return (
		<section>
			<ul className='animationList'>
				<InfiniteLooper speed={19} direction='left'>
					{str.map((item) => {
						if (item.length > 15) {
							return (
								<li key={item} className='ticker__item'>
									<img src={item}></img>
								</li>
							)
						}

						return (
							<li key={item} className='ticker__item'>
								{item}
							</li>
						)
					})}
				</InfiniteLooper>
			</ul>
		</section>
	)
}
