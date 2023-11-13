import { useState } from "react";
import styled from "styled-components";

const Title = styled.h3`
	padding-top:120px;
	font-size: 36px;
	letter-spacing: -0.5px;
	color: #fff;
	font-family: 'Gmarket Sans', sans-serif;
	font-weight:bold;
	text-align:center;
	.text__keyword{
		color:#ffc70c
	}
`

function HotelItems(){
	return(
		<>
			<Title id="anchor_theme">당신이 좋아할 <strong className="text__keyword">하와이</strong> 호텔을 찾았어요!</Title>
		</>
	)
}

export default HotelItems;

