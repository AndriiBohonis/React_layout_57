import icon from '../../assets/icons/4.svg'
import './divider.css'
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
		icon,
		'#МАЙБУТНЄ',
		'#СВОБОДА',
		'#ЗЕМЛЯ',
		'#РОДИНА',
		'#СИЛА',
		'#ЗАХИСТ',
		'#ВОЛЯ',
		'#НАЦІЯ',
		icon,
		'#МАЙБУТНЄ',
		'#СВОБОДА',
		'#ЗЕМЛЯ',
		'#РОДИНА',
		'#СИЛА',
		'#ЗАХИСТ',
		'#ВОЛЯ',
		'#НАЦІЯ',
		icon,
		'#МАЙБУТНЄ',
		'#СВОБОДА',
		'#ЗЕМЛЯ',
		'#РОДИНА',
		'#СИЛА',
		'#ЗАХИСТ',
		'#ВОЛЯ',
		'#НАЦІЯ',
		icon,
		'#МАЙБУТНЄ',
		'#СВОБОДА',
		'#ЗЕМЛЯ',
		'#РОДИНА',
		'#СИЛА',
		'#ЗАХИСТ',
		'#ВОЛЯ',
		'#НАЦІЯ',
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

	console.log(str)
	return (
		<section className='ticker-tape'>
			{/* <Wrapper> */}
			<ul className='ticker'>
				{/* <li className='ticker__item'>
					<img src={icon}></img>
				</li>
				<li className='ticker__item'>#МАЙБУТНЄ</li>
				<li className='ticker__item'>#СВОБОДА</li>
				<li className='ticker__item'>#ЗЕМЛЯ</li>
				<li className='ticker__item'>#РОДИНА</li>
				<li className='ticker__item'>#СИЛА</li>
				<li className='ticker__item'>#ЗАХИСТ</li>
				<li className='ticker__item'>#ВОЛЯ</li>
				<li className='ticker__item'>#НАЦІЯ</li>
				<li className='ticker__item'>
					<img src={icon}></img>
				</li>
				<li className='ticker__item'>#МАЙБУТНЄ</li>
				<li className='ticker__item'>#СВОБОДА</li>
				<li className='ticker__item'>#ЗЕМЛЯ</li>
				<li className='ticker__item'>#РОДИНА</li>
				<li className='ticker__item'>#СИЛА</li>
				<li className='ticker__item'>#ЗАХИСТ</li>
				<li className='ticker__item'>#ВОЛЯ</li>
				<li className='ticker__item'>#НАЦІЯ</li> */}
				{str.map((item) => {
					if (item.length > 15) {
						return (
							<li className='ticker__item'>
								<img src={item}></img>
							</li>
						)
					}

					return <li className='ticker__item'>{item}</li>
				})}
			</ul>

			{/* </Wrapper> */}
		</section>
	)
}
