import styled from "styled-components";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImgSection7 from "../image/image__section7.png";
import 'swiper/css';
import 'swiper/css/navigation';


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
	/* position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	min-width: 1920px;
	width: 100%;
	height: 595px; */
`
const Image = styled.img`
	width:100%;
`

const headerImgURL = [
	require('../image/image__slide1.png'),
	require('../image/image__slide2.png'),
]

function Section7(){
	return(
		<>
			<Box>
				<TitleArea>
					<h2 className="for-a11y">이렇게 검색하세요</h2>
					<p className="for-a11y">취향에 딱 맞는 호텔을 쉽게 찾을 수 있어요</p>
				</TitleArea>
				<SwipeInfo>
					<StyledSwiper navigation={true} modules={[Navigation]}>
						{headerImgURL.map( (url, index) => <SwiperSlide key={index}><Image src={url}></Image></SwiperSlide>)}
					</StyledSwiper>
				</SwipeInfo>
			</Box>
		</>
	)
}

export default Section7;

