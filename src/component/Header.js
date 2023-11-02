import styled from 'styled-components';
import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import ImgTitle from "../image/image__header-title.png";
import 'swiper/css';
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import ButtonShare from './ButtonShare';

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
	&:after{
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: #232323;
		z-index: 1;
		opacity:0.7;
	}
`

const HeaderTxt = styled.div`
	position: absolute;
	top: 107px;
	left: 50%;
	z-index:2;
	width: 614px;
	height: 376px;
	transform: translateX(-50%);
	background: url(${ImgTitle}) no-repeat 0 0/contain;
`

const Image = styled.img`
	width:100%;
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
					speed= {800}
					effect={'fade'}
					autoplay={{delay: 3000}}
					modules={[EffectFade, Autoplay]}
				>
				{headerImgURL.map( (url, index) => <SwiperSlide key={index}><Image src={url}></Image></SwiperSlide>)}
				</StyledSwiper>
				<HeaderTxt>
					<h1 className="for-a11y">익스피디아 입점기념</h1>
					<p className="for-a11y">전 세계 호텔 최대 20만원 할인</p>
					<p className="for-a11y">1월 2일 ~ 1월 15일</p>
				</HeaderTxt>
				<ButtonShare />
			</EventHeader>
		</>
	)

}

export default Header;