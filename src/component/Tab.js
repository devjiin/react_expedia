import { useState } from "react";
import styled from "styled-components";

const ContentArea = styled.div`
	margin-top: 60px;
	text-align: center;
`
const ContentTitle = styled.h3`
	font-size: 30px;
	letter-spacing: -0.5px;
	color: #fff;
	font-family: 'Gmarket Sans', sans-serif;
	.text__keyword{
		color:#ffc70c
	}
`

const ContentTab = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 26px;
	& + .text__title {
		margin-top:80px;
	}
`

const BtnTab = styled.button`
	padding: 18px 25px;
	height: 52px;
	background-color: #2f2f2f;
	border: 1px solid #2f2f2f;
	border-radius: 30px;
	white-space: nowrap;
	box-sizing: border-box;
	&.active{
		border: 1px solid #ffc70c;
		.text{
			color: #ffc70c;
		}
	}
	& + &{
		margin-left: 6px
	}
	.text{
		font-size: 20px;
		line-height: 20px;
		letter-spacing: -0.5px;
		color: #fff;
		font-family: "Gmarket Sans";
	}
`

const Desc = styled.p`
	opacity: 0.6;
	margin-top: 18px;
	font-size: 20px;
	letter-spacing: -0.5px;
	color: #fff;
	font-family: "Gmarket Sans";
`

function Tab(props){
	const [currentIdx, setcurrentIdx] = useState(0);
	const menuArr = ['오사카', '도쿄', '방콕', '다낭', '발리', '싱가포르', '하와이', '라스베가스', '파리', '런던'];

	const selectMenuHandler = (index) => {
		setcurrentIdx(index);
	}
	return(
		<ContentArea>
			<ContentTitle>
				<strong className="text__keyword">{menuArr[currentIdx]}</strong>를 선택하셨네요
			</ContentTitle>
			<ContentTab>
				{menuArr.map((item, idx) => <BtnTab className={currentIdx === idx && 'active'} key={idx} onClick={() =>{selectMenuHandler(idx)}}><span className="text">{item}</span></BtnTab>)}
			</ContentTab>
			<ContentTitle className="text__title">
				<strong className="text__keyword">{menuArr[currentIdx]}</strong>에서 어떤 여행을 하고 싶으세요?
			</ContentTitle>
			<Desc>테마에 맞는 호텔을 찾아드릴게요</Desc>
		</ContentArea>
	)
}

export default Tab;

