import styled from 'styled-components';
import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const EventHeader = styled.div`
	position: relative;
	height: 595px;
	background-color: #202843;
`

const StyledSwiper = styled(Swiper)`
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	min-width: 1920px;
	width: 100%;
	height: 595px;
`

const HeaderTxt = styled.div`
	position: absolute;
	top: 107px;
	left: 50%;
	width: 614px;
	height: 376px;
	transform: translateX(-50%);
`

const headerImgURL = [
	require('../image/visual/image__header-slide1.jpg'),
	require('../image/visual/image__header-slide2.jpg'),
	require('../image/visual/image__header-slide3.jpg'),
	require('../image/visual/image__header-slide4.jpg'),
	require('../image/visual/image__header-slide5.jpg'),
	require('../image/visual/image__header-slide6.jpg'),
	require('../image/visual/image__header-slide7.jpg'),
	require('../image/visual/image__header-slide8.jpg'),
	require('../image/visual/image__header-slide9.jpg'),
	require('../image/visual/image__header-slide10.jpg'),
]

function Header(){
	return(
		<>
			<EventHeader>
				<StyledSwiper 
					loop={true}
					autoplay={{delay: 3000}}
					effect="fade"
					modules={[EffectFade, Autoplay]}
					className="box__header-swiper"
				>
				{headerImgURL.map( (url, index) => <SwiperSlide key={index} src={url}></SwiperSlide>)}
				</StyledSwiper>
				<HeaderTxt className="box__header-visual">
					<h1 className="for-a11y">익스피디아 입점기념</h1>
					<p className="for-a11y">전 세계 호텔 최대 20만원 할인</p>
					<p className="for-a11y">1월 2일 ~ 1월 15일</p>
				</HeaderTxt>
			</EventHeader>
		</>
	)

}

export default Header;