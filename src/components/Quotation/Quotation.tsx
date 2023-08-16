import { Wrapper } from '../../hoc/Wrapper/Wrapper'
import s from './quotation.module.scss'
export default function Quotation() {
	return (
		<section className={s.quotation}>
			<Wrapper>
				<p>
					“Злість московська здавна на Вітчизну, нашу матір, аби захопити її у владу й володіння,
					хитро задумує” Кость Гордієнко
				</p>
			</Wrapper>
		</section>
	)
}
