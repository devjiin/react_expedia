import { useState } from "react";
import styled from "styled-components";

const ContentTitle = styled.h3`
	font-size: 30px;
	letter-spacing: -0.5px;
	color: #fff;
	font-family: 'Gmarket Sans', sans-serif;
	font-weight:bold;
	.text__keyword{
		color:#ffc70c
	}
`

const ContentTab = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 26px;
	& + .text__title {
		padding-top:80px;
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

function Tab(){
	const [currentIdx, setcurrentIdx] = useState(0);
	

	const selectMenuHandler = (index : number) => {
		setcurrentIdx(index);
	}
	return(
		<>
			<ContentTitle>
				<strong className="text__keyword">{menuArr[currentIdx]}</strong>를 선택하셨네요
			</ContentTitle>
			<ContentTab>
				{menuArr.map((item, idx) => <BtnTab key={idx} onClick={() =>{selectMenuHandler(idx)}}><span className="text">{item}</span></BtnTab>)}
			</ContentTab>
		</>
	)
}

export default Tab;

