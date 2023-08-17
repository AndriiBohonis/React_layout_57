import { EffectCoverflow, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import a7 from '../../assets/foto/1.jpg'
import a6 from '../../assets/foto/2.jpg'
import a1 from '../../assets/foto/3.jpg'
import a2 from '../../assets/foto/4.jpg'
import a4 from '../../assets/foto/6.jpg'
import a5 from '../../assets/foto/7.jpg'
import a3 from '../../assets/foto/8.jpg'

import { Wrapper } from '../../hoc/Wrapper/Wrapper'
import './swiper.css'
export default function MySwiper() {
	return (
		<Wrapper>
			<div className='container'>
				<Swiper
					effect={'coverflow'}
					grabCursor={true}
					centeredSlides={true}
					loop={true}
					slidesPerView={'auto'}
					scrollbar={{ draggable: true }}
					coverflowEffect={{
						rotate: 0,
						stretch: 1,
						depth: 100,
						modifier: 2.9,
					}}
					pagination={{ el: '.swiper-pagination', clickable: true }}
					navigation={{
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					}}
					modules={[EffectCoverflow, Pagination, Navigation, Scrollbar]}
					className='swiper_container'
				>
					<SwiperSlide>
						<img src={a1} alt='slide_image' />
					</SwiperSlide>
					<SwiperSlide>
						<img src={a2} alt='slide_image' />
					</SwiperSlide>
					<SwiperSlide>
						<img src={a3} alt='slide_image' />
					</SwiperSlide>
					<SwiperSlide>
						<img src={a4} alt='slide_image' />
					</SwiperSlide>
					<SwiperSlide>
						<img src={a5} alt='slide_image' />
					</SwiperSlide>
					<SwiperSlide>
						<img src={a6} alt='slide_image' />
					</SwiperSlide>
					<SwiperSlide>
						<img src={a7} alt='slide_image' />
					</SwiperSlide>
					<SwiperSlide>
						<img src={a1} alt='slide_image' />
					</SwiperSlide>
					<SwiperSlide>
						<img src={a2} alt='slide_image' />
					</SwiperSlide>
					<SwiperSlide>
						<img src={a3} alt='slide_image' />
					</SwiperSlide>
					<SwiperSlide>
						<img src={a4} alt='slide_image' />
					</SwiperSlide>
					<SwiperSlide>
						<img src={a5} alt='slide_image' />
					</SwiperSlide>
					<SwiperSlide>
						<img src={a6} alt='slide_image' />
					</SwiperSlide>
					<SwiperSlide>
						<img src={a7} alt='slide_image' />
					</SwiperSlide>

					<div className='slider-controler'>
						<div className='swiper-button-prev arrow '></div>
						<div className='swiper-button-next arrow'></div>
						<div className='swiper-pagination'></div>
					</div>
				</Swiper>
			</div>
		</Wrapper>
	)
}
