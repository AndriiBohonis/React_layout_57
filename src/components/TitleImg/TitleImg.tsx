import s from './titleImg.module.scss'
interface IProps {
	title: string
	imgSrc: string
}
export default function TitleImg({ title, imgSrc }: IProps) {
	return (
		<div className={s.img}>
			<h2>{title}</h2>
			<img src={imgSrc}></img>
		</div>
	)
}
