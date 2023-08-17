import Watchword from './components/ Watchword/Watchword'
import Description from './components/Description/Description'
import Divider from './components/Divider/Divider'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import History from './components/History/History'
import Mission from './components/Mission/Mission'
import Quotation from './components/Quotation/Quotation'
import Swiper from './components/Swiper/Swiper'

function App() {
	return (
		<>
			<div id={'/'}></div>
			<Header />
			<Hero />
			<Swiper />
			<Divider />
			<Description />
			<Quotation />
			<History />
			<Mission />
			<Divider />
			<Watchword />
			<Footer />
		</>
	)
}

export default App
