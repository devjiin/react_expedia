import styled from "styled-components";
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImgSection7 from "../image/image__section7.png";
import ImgArrowRight from "../image/image__right.png";
import ImgArrowLeft from "../image/image__left.png";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Box = styled.div`
	background-color:#202843;
	padding-bottom:100px;
`

const TitleArea = styled.div`
	width:830px;
	height:297px;
	margin:0 auto;
	background:url(${ImgSection7}) no-repeat 0 0/contain;
`

const SwipeInfo = styled.div`
	position: relative;
	width: 1372px;
	margin: 0 auto;
	text-align: center;
`

const StyledSwiper = styled(Swiper)`
	& + .swiper-button-prev{
		left: -70px;
		width: 38px;
		height: 73px;
		background: url(${ImgArrowLeft}) no-repeat 0 0/contain;
		&:after{
			display:none;
		}
		& + .swiper-button-next{
			right: -70px;
			width: 38px;
			height: 73px;
			background: url(${ImgArrowRight}) no-repeat 0 0/contain;
			&:after{
				display:none;
			}
			& + .swiper-pagination{
				bottom:-30px
			}
		}
	}
	
`

const Anchor = styled.a`
	display: block;
	margin: 96px auto 0;
	width: 420px;
	height: 84px;
	background-position: -580px -308px;
`
const Image = styled.img`
	width:1352px;
`

const headerImgURL = [
	require('../image/image__slide1.png'),
	require('../image/image__slide2.png'),
]

function Section7(props:any){
	return(
		<Box ref={props.scrollRef}>
			<TitleArea>
				<h2 className="for-a11y">이렇게 검색하세요</h2>
				<p className="for-a11y">취향에 딱 맞는 호텔을 쉽게 찾을 수 있어요</p>
			</TitleArea>
			<SwipeInfo>
				<StyledSwiper 
					navigation={{
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					}}
					pagination={{
						el: '.swiper-pagination',
					}}
					modules={[Pagination, Navigation]}
				>
					{headerImgURL.map( (url, index) => <SwiperSlide key={index}><Image src={url}></Image></SwiperSlide>)}
				</StyledSwiper>
				<div className="swiper-button-prev"></div>
				<div className="swiper-button-next"></div>
				<div className="swiper-pagination"></div>
			</SwipeInfo>
			<Anchor href="https://gtour.gmarket.co.kr/TourV2/Search/Hotelmain" className="sprite__expedia" target="_blank" aria-label="호텔 검색하러 가기"></Anchor>
		</Box>
	)
}

export default Section7;