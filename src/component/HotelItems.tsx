import objectData from "./data/data.json";
import styled from "styled-components";

console.log(objectData.hotelData);

const Title = styled.h3`
	padding-top:120px;
	font-size: 36px;
	letter-spacing: -0.5px;
	color: #fff;
	font-family: 'Gmarket Sans', sans-serif;
	font-weight:bold;
	text-align:center;
	.text__keyword{
		color:#ffc70c;
	}
`
const ItemList = styled.ul`
	width: 1200px;
	margin: 50px auto 0;
	font-size: 0;
`

const ListItem = styled.li`
	display: inline-block;
	width: 590px;
	vertical-align: top;
`

function HotelItems(props : any){

	return(
		<>
			<Title id="anchor_theme">당신이 좋아할 <strong className="text__keyword">{props.name}</strong> 호텔을 찾았어요!</Title>
			<ItemList>
				{
					objectData.hotelData.map((item : any) =>
						<ListItem>
							{/* <img src={item[0].prode}/> */}
						</ListItem>
					)
				}
				
			</ItemList>
		</>
	)
}

export default HotelItems;

