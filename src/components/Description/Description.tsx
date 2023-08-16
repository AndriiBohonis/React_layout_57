import foto from '../../assets/img/2.png'
import SectionComponent from '../SectionComponent/SectionComponent'
export default function Description() {
	return (
		<section id='description'>
			<SectionComponent
				imgSrc={foto}
				imgTitle={'01/Бригада'}
				sDescription={
					'Використання мотопіхотних бригад має стратегічне значення для України, оскільки вони є маневреними, здатними діяти в різних умовах, швидко пересуватися та впливати на ситуацію поля бою.'
				}
				description={
					' 57-ма окрема мотопіхотна бригада є ключовою у національній обороні України. Завдяки своєму досвіду, високій бойовій готовності та мобільності, вона забезпечує спокій нашої країни, швидко реагуючи на загрози та виконує різні завдання в умовах бойових дій.'
				}
				viewButton={true}
			/>
		</section>
	)
}
