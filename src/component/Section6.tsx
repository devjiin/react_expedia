import styled from "styled-components";
import ImgSection6 from "../image/image__section6.png";
import Tab from "./Tab";
import dummyData from './data/data.json'
import { useState } from "react";


const Box = styled.div`
	background-color:#ffc70c;
	padding-bottom:100px;
`

const TitleArea = styled.div`
	width:830px;
	height:297px;
	margin:0 auto;
	background:url(${ImgSection6}) no-repeat 0 0/contain;

`
const ContentArea = styled.div`
	margin-top: 26px;
	text-align: center;
`
const ContentTitle = styled.h3`
	margin-top:100px;
	font-size: 36px;
	letter-spacing: -0.5px;
	color: #222;
	font-family: 'Gmarket Sans', sans-serif;
	font-weight: bold;
	.text__keyword{
		color:#00488a
	}
`

const ItemList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 0 20px;
	width: 1200px;
	margin: 50px auto 0;
	font-size: 0;
`

const ListItem = styled.li`
	width: 590px;
	&.list-item__soldout{
		.link{
			display: block;
			width: 394px;
			height: 80px;
			margin: 32px auto 90px;
			background-position: 0 -236px;
			pointer-events: none;
		}
	}
`

const Img = styled.img`
	width:100%;
`

const ItemTitle = styled.span`
	display: block;
    height: 32px;
    margin: 30px 0 14px;
    font-size: 28px;
    line-height: 32px;
    letter-spacing: -0.5px;
    color: #000;
    font-weight: 500;
    font-family: "Gmarket Sans";
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

const ItemPrie = styled.span`
	display: block;
    font-size: 36px;
    line-height: 36px;
    letter-spacing: -0.5px;
    color: #000;
    font-weight: bold;
    font-family: "Gmarket Sans", sans-serif;
`

const Anchor = styled.a`
	display: block;
    width: 394px;
    height: 80px;
    margin: 32px auto 90px;
    background-position: -606px -394px;
`

function Section6(props:any){
	const [currentIdx, setcurrentIdx] = useState(0);
		
	const handleOnClick = (idx : number) => {
		setcurrentIdx(idx);
	}
	return(
		<Box ref={props.scrollRef}>
			<TitleArea>
				<h2 className="for-a11y">패스/현지투어도 둘러보세요</h2>
				<p className="for-a11y">가장 많이 찾는 상품을 추천드릴게요</p>
			</TitleArea>
			<ContentArea>
				<Tab country={dummyData.tabCountry} onClickEvent={handleOnClick} activeIdx={currentIdx}/>
				<ContentTitle>
					미리 사면 유용한 <strong className="text__keyword">{dummyData.tabCountry[currentIdx]}</strong> 여행 필수품
				</ContentTitle>
				{dummyData.tourData.length > 0 && (
					<ItemList className="list__products">
						{dummyData.tourData.map((item, idx)=>{
							const {text, itemPrice, landUrl, imgUrl, isDisabled } = item || {};
							return(
								<ListItem className={`list-item ${isDisabled ? 'list-item__soldout' : ''}`} key={idx}>
									<span className="box__thumb"><Img src={imgUrl} className="image" alt="" /></span>
									<ItemTitle className="text__title">{text}</ItemTitle>
									<ItemPrie className="text__price">{itemPrice}원</ItemPrie>
									<Anchor href={landUrl} className="link sprite__expedia"><span className="for-a11y">구매하기</span></Anchor>
								</ListItem>
							)
						})}
					</ItemList>
				)}
			</ContentArea>
		</Box>
	)
}

export default Section6;