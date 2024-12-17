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
		color:#ffc70c;
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
`

const Img = styled.img`
	width:100%;
`

const Anchor = styled.a`
	display: block;
    width: 394px;
    height: 80px;
    margin: 32px auto 90px;
    background-position: 0 -318px;
`

interface ItemCardProps {
	name: string,
	data : any,
	radioIdx: number
}

function HotelItems({name, data, radioIdx}: ItemCardProps){
	return(
		<>
			<Title id="anchor_theme">당신이 좋아할 <strong className="text__keyword">{name}</strong> 호텔을 찾았어요!</Title>
			<ItemList>
				{
					data.products[radioIdx].map((item : any, idx:number) =>{
						const {imgUrl, landUrl} = item || {};
						return(
						<ListItem className="list-item" key={idx}>
							<Img src={imgUrl} className="image"/>
							<Anchor href={landUrl} className="link sprite__expedia" target="_blank"><span className="for-a11y">구매하기</span></Anchor>
						</ListItem>
						)
					}
					)
				}
				
			</ItemList>
		</>
	)
}

export default HotelItems;

