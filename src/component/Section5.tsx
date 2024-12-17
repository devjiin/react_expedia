import { useState } from "react";
import styled from "styled-components";
import ImgSection5 from "../image/image__section5.png";
import Tab from "./Tab";
import RadioArea from "./RadioArea";
import HotelItems from "./HotelItems";
import dummyData from './data/data.json'

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
	const [currentIdx, setcurrentIdx] = useState(0);
	
	const handleOnClick = (idx : number) => {
		setcurrentIdx(idx);
	}
	const [radioIdx, setRadioIdx] = useState(0);
	return(
		<Box ref={props.scrollRef}>
			<TitleArea>
				<h2 className="for-a11y">어디로 여행가세요? 내게 딱 맞는 해외 호텔 찾기</h2>
				<p className="for-a11y">한국인들의 평점이 높은 호텔만 골랐어요</p>
			</TitleArea>
			<ContentArea>
				<ContentTitle>
					<strong className="text__keyword">{dummyData.tabCountry[currentIdx]}</strong>를 선택하셨네요
				</ContentTitle>
				<Tab country={dummyData.tabCountry} onClickEvent={handleOnClick} activeIdx={currentIdx} />
				<RadioArea name={dummyData.tabCountry[currentIdx]} activeIdx={currentIdx} setRadioIdx={setRadioIdx}/>
				<HotelItems name={dummyData.tabCountry[currentIdx]} data={dummyData.hotelData[currentIdx]} radioIdx={radioIdx} />
			</ContentArea>
		</Box>
	)
}

export default Section5;

