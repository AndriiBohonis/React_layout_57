import kozak from '../../assets/img/kozak1.png'
import { Wrapper } from '../../hoc/Wrapper/Wrapper'
import s from './hero.module.scss'
export default function Hero() {
	return (
		<section className={s.hero_section}>
			<Wrapper>
				<div className={s.hero_content}>
					<div>
						<img className={s.hero_img} src={kozak}></img>
					</div>
					<div>
						<h2>Віддай світло підтримки</h2>
						<h4>Неосяжний Героїзм та Сила Української Оборони!</h4>
						<p>
							57-ма окрема мотопіхотна бригада – надійний щит нації, виготовлений зі сталеваї
							відваги, зібраної краплями поту і вишліфований честю, який непохитно захищає вільні
							простори України.
						</p>
					</div>
				</div>
			</Wrapper>
		</section>
	)
}
