import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { EffectCoverflow, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import a7 from '../../imgs/3.jpeg'
import a6 from '../../imgs/4.jpeg'
import a1 from '../../imgs/5.jpg'
import a2 from '../../imgs/6.jpg'
import a3 from '../../imgs/7.jpg'
import a4 from '../../imgs/8.webp'
import a5 from '../../imgs/9.webp'
import './swiper.css'
export default function MySwiper() {
	return (
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
					depth: 110,
					modifier: 2,
				}}
				pagination={{ el: '.swiper-pagination', clickable: true }}
				navigation={{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
					//@ts-ignore
					clickable: true,
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
					<div className='swiper-button-prev slider-arrow'>
						{/* <ion-icon name='arrow-back-outline'></ion-icon> */}
					</div>
					<div className='swiper-button-next slider-arrow'>
						{/* <ion-icon name='arrow-forward-outline'></ion-icon> */}
					</div>
					<div className='swiper-pagination'></div>
				</div>
			</Swiper>
		</div>
	)
}
