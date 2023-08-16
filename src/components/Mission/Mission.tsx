import foto from '../../assets/img/4.png'
import SectionComponent from '../SectionComponent/SectionComponent'

export default function Mission() {
	return (
		<section id='mission'>
			<SectionComponent
				imgSrc={foto}
				imgTitle={'03/Мета'}
				sDescription={
					'Підтримуй! Зроби донат для того, щоб 57-ма бригада мала можливість придбати потрібне обладнання, забезпечення, медичні засоби та багато іншого. Твої гроші обов’язково допоможуть воїнам бути більш підготовленими та здатними діяти ефективніше.'
				}
				description={
					'Пам’ятай, що зробивши донат, ти показуєш вдячність цим сміливим захисникам. Дуже важливі маленькі дії можуть мати велике значення, це шанс для всіх нас показати свою підтримку тим, хто стоїть на передовій захисту нашої країни.'
				}
				viewButton={true}
			/>
		</section>
	)
}
