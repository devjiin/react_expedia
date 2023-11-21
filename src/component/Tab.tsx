import { useState } from "react";
import RadioArea from "./RadioArea";
import HotelItems from "./HotelItems";
import styled from "styled-components";


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

interface ITabProps {
	country:string[],
}

function Tab(props : ITabProps){
	const [currentIdx, setcurrentIdx] = useState(0);
	
	const handleOnClick = (index : number) => {
		setcurrentIdx(index);
	}

	return(
		<>
			<ContentTitle>
				<strong className="text__keyword">{props.country[currentIdx]}</strong>를 선택하셨네요
			</ContentTitle>
			<ContentTab>
				{props.country.map((item : any, idx : any) => <BtnTab type="button" className={`${idx === currentIdx ? 'active' : ''}`} key={idx} onClick={() =>{handleOnClick(idx)}}><span className="text">{item}</span></BtnTab>)}
			</ContentTab>
			<RadioArea name={props.country[currentIdx]} activeIdx={currentIdx}/>
			<HotelItems name={props.country[currentIdx]}/>
		</>
	)
}

export default Tab;

