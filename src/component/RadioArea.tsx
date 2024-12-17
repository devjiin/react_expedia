import { useEffect, useState } from "react";
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

const List = styled.ul`
	margin-top: 40px;
`

const Label = styled.label`
	position: relative;
	display: block;
	margin: 10px auto 0;
	width: 500px;
`

const Input = styled.input`
	position: absolute;
	left: 22px;
	top: 16px;
	appearance: none;
	width: 28px;
	height: 28px;
	background-position: -614px -144px;
	margin-right: 12px;
	&:checked {
		background-position: -644px -144px;
		& + span{
			color: #ffc70c;
			border: 1px solid #ffc70c;
			background-color: #222;
		}
	}
`

const InputTxt = styled.span`
	display: flex;
	color: #fff;
	font-size: 18px;
	line-height: 60px;
	width: 500px;
	height: 60px;
	background-color: #2f2f2f;
	border-radius: 8px;
	text-align: left;
	padding-left: 64px;
	box-sizing: border-box;
	align-items: baseline;
	border: 1px solid #2f2f2f;
	font-family: "Gmarket Sans";
`

const Desc = styled.p`
	opacity: 0.6;
	margin-top: 18px;
	font-size: 20px;
	letter-spacing: -0.5px;
	color: #fff;
	font-family: "Gmarket Sans";
`
interface IRadioTxtArr {
	id: number,
	list : string[]
}

const radioTxtArr : any = [
	{
		id: 1,
		list : [
			'엔저에 부담없는 쇼핑을 즐기고 싶어요',
			'뜨끈뜨끈한 료칸에서 힐링하고 싶어요',
			'세계적인 테마파크에서 하루종일 놀래요',
			'랜드마크 앞에서 인생샷 찍고 싶어요'
		]
	},
	{
		id: 2,
		list : [
			'엔저에 부담없는 쇼핑을 즐기고 싶어요222',
			'뜨끈뜨끈한 료칸에서 힐링하고 싶어요222',
			'세계적인 테마파크에서 하루종일 놀래요222',
			'랜드마크 앞에서 인생샷 찍고 싶어요222'
		]
	},
	{
		id: 3,
		list : [
			'엔저에 부담없는 쇼핑을 즐기고 싶어요333',
			'뜨끈뜨끈한 료칸에서 힐링하고 싶어요333',
			'세계적인 테마파크에서 하루종일 놀래요333',
			'랜드마크 앞에서 인생샷 찍고 싶어요333'
		]
	},
	{
		id: 4,
		list : [
			'엔저에 부담없는 쇼핑을 즐기고 싶어요444',
			'뜨끈뜨끈한 료칸에서 힐링하고 싶어요444',
			'세계적인 테마파크에서 하루종일 놀래요444',
			'랜드마크 앞에서 인생샷 찍고 싶어요444'
		]
	},
	{
		id: 5,
		list : [
			'엔저에 부담없는 쇼핑을 즐기고 싶어요555',
			'뜨끈뜨끈한 료칸에서 힐링하고 싶어요555',
			'세계적인 테마파크에서 하루종일 놀래요555',
			'랜드마크 앞에서 인생샷 찍고 싶어요555'
		]
	},
	{
		id: 6,
		list : [
			'엔저에 부담없는 쇼핑을 즐기고 싶어요666',
			'뜨끈뜨끈한 료칸에서 힐링하고 싶어요666',
			'세계적인 테마파크에서 하루종일 놀래요666',
			'랜드마크 앞에서 인생샷 찍고 싶어요666'
		]
	},
	{
		id: 7,
		list : [
			'엔저에 부담없는 쇼핑을 즐기고 싶어요777',
			'뜨끈뜨끈한 료칸에서 힐링하고 싶어요777',
			'세계적인 테마파크에서 하루종일 놀래요777',
			'랜드마크 앞에서 인생샷 찍고 싶어요777'
		]
	},
	{
		id: 8,
		list : [
			'엔저에 부담없는 쇼핑을 즐기고 싶어요888',
			'뜨끈뜨끈한 료칸에서 힐링하고 싶어요888',
			'세계적인 테마파크에서 하루종일 놀래요888',
			'랜드마크 앞에서 인생샷 찍고 싶어요888'
		]
	},
	{
		id: 9,
		list : [
			'엔저에 부담없는 쇼핑을 즐기고 싶어요999',
			'뜨끈뜨끈한 료칸에서 힐링하고 싶어요999',
			'세계적인 테마파크에서 하루종일 놀래요999',
			'랜드마크 앞에서 인생샷 찍고 싶어요999'
		]
	},
	{
		id: 10,
		list : [
			'엔저에 부담없는 쇼핑을 즐기고 싶어요101010',
			'뜨끈뜨끈한 료칸에서 힐링하고 싶어요101010',
			'세계적인 테마파크에서 하루종일 놀래요101010',
			'랜드마크 앞에서 인생샷 찍고 싶어요101010'
		]
	}
]

function RadioArea({ name, activeIdx, setRadioIdx }: any){
	const [isChecked, setIsChecked] = useState("radio1");
	
	const handleChange = (e : React.ChangeEvent<HTMLInputElement>, i : number) => {
		setIsChecked(e.target.id);
		setRadioIdx(i);
	}
	return(
		<>
			<ContentTitle id="anchor_city" className="text__title">
				<strong className="text__keyword">{name}</strong>에서 어떤 여행을 하고 싶으세요?
			</ContentTitle>
			<Desc>테마에 맞는 호텔을 찾아드릴게요</Desc>
			<List className="list__radio">
				{radioTxtArr[activeIdx].list.map((item : any, idx : number) =>
					<li className="list-item" key={idx}>
						<Label htmlFor={`radio${idx + 1}`}>
							<Input type="radio" id={`radio${idx + 1}`} name="inputRadio" checked={isChecked === "radio1"} onChange={(e)=>handleChange(e,idx)} className="sprite__expedia" />
							<InputTxt>{item}</InputTxt>
						</Label>
					</li>
				)}
			</List>
		</>
	)
}

export default RadioArea;

