import { Wrapper } from '../../hoc/Wrapper/Wrapper'
import Button from '../Button/Button'
import TitleImg from '../TitleImg/TitleImg'
import s from './sectionComponent.module.scss'

interface IProps {
	imgSrc: string
	imgTitle: string
	sDescription?: string
	description: string
	viewButton?: boolean
}
export default function SectionComponent({
	imgSrc,
	imgTitle,
	sDescription,
	description,
	viewButton = false,
}: IProps) {
	return (
		<section className={s.description}>
			<Wrapper>
				<div className={s.description_content}>
					<TitleImg title={imgTitle} imgSrc={imgSrc} />
					<div className={s.blok_info}>
						<p>
							<strong>{sDescription}</strong>
						</p>
						<p>{description}</p>
					</div>
				</div>
				<div className={s.button_blok}>{viewButton && <Button size='m' />}</div>
			</Wrapper>
		</section>
	)
}
