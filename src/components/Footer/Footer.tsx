import fee from '../../assets/icons/FacebookLogo.svg'
import ins from '../../assets/icons/inst.svg'
import te from '../../assets/icons/telegram.svg'
import logo from '../../assets/img/5.svg'
import logo57 from '../../assets/img/57.svg'
import { Wrapper } from '../../hoc/Wrapper/Wrapper'
import s from './footer.module.scss'
export default function Footer() {
	return (
		<footer className={s.footer}>
			<Wrapper>
				<div className={s.footer_content}>
					<div className={s.iconBlok}>
						<div>
							<img src={logo}></img>
							<img src={logo57}></img>
						</div>
						<div className={s.svg}>
							<img src={fee}></img>
							<img src={ins}></img>
							<img src={te}></img>
						</div>
					</div>
					<div className={s.divider}></div>
					<p>Розробка Baza Trainee Ukraine 2023. © Всі права захищені.</p>
				</div>
			</Wrapper>
		</footer>
	)
}
