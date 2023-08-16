import icon from '../../assets/icons/4.svg'
import { Wrapper } from '../../hoc/Wrapper/Wrapper'
import s from './divider.module.scss'
export default function Divider() {
	return (
		<section className={s.divider}>
			<Wrapper>
				<ul className={s.divider_list}>
					<li>
						<img src={icon}></img>
					</li>
					<li>#МАЙБУТНЄ</li>
					<li>#СВОБОДА</li>
					<li>#ЗЕМЛЯ</li>
					<li>#РОДИНА</li>
					<li>#СИЛА</li>
					<li>#ЗАХИСТ</li>
					<li>#ВОЛЯ</li>
					<li>#НАЦІЯ</li>
				</ul>
			</Wrapper>
		</section>
	)
}
