import { useState } from "react";
import styled from "styled-components";
import ImgSection5 from "../image/image__section5.png";
import Tab from "./Tab";
import RadioArea from "./RadioArea";
import HotelItems from "./HotelItems";

const Box = styled.div`
	background:#222;
	padding-bottom:120px;
`

const TitleArea = styled.div`
	width:830px;
	height:297px;
	margin:0 auto;
	background:url(${ImgSection5}) no-repeat 0 0/contain;
`

const ContentArea = styled.div`
	margin-top: 60px;
	text-align: center;
`

const ContentTitle = styled.h3`
	font-size: 30px;
	letter-spacing: -0.5px;
	color: #fff;
	font-family: 'Gmarket Sans', sans-serif;
	font-weight:bold;
	line-height:35px;
	.text__keyword{
		color:#ffc70c
	}
`

function Section5(props:any){
	const menuArr = ['오사카', '도쿄', '방콕', '다낭', '발리', '싱가포르', '하와이', '라스베가스', '파리', '런던'];
	const [currentIdx, setcurrentIdx] = useState(0);
	
	const handleOnClick = (idx : number) => {
		console.log('click');
		setcurrentIdx(idx);
	}
	return(
		<Box ref={props.scrollRef}>
			<TitleArea>
				<h2 className="for-a11y">누구나 매일매일 10% 할인쿠폰</h2>
				<p className="for-a11y">발급 당일 사용 가능, 20만원이상 결제 시 최대 10만원</p>
				<ul className="for-a11y">
					<li>10% 할인 쿠폰, 누구나 최대 10만원 할인</li>
					<li>5% 중복 쿠폰, 항공 구매시 최대 10만원 중복할인</li>
					<li>10% 스마일캐시, 최대 10만 스마일캐시 지급 (할인 쿠폰 사용 불가 호텔 결제 시)</li>
				</ul>
			</TitleArea>
			<ContentArea>
				<ContentTitle>
					<strong className="text__keyword">{menuArr[currentIdx]}</strong>를 선택하셨네요
				</ContentTitle>
				<Tab country={menuArr} onClickEvent={handleOnClick} activeIdx={currentIdx} />
				{/* <RadioArea name={menuArr[currentIdx]} activeIdx={currentIdx} /> */}
				{/* <HotelItems name={menuArr[currentIdx]} /> */}
			</ContentArea>
		</Box>
	)
}

export default Section5;

