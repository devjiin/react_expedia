import styled from "styled-components";

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
	onClickEvent: any,
	activeIdx: number
}

function Tab(props : ITabProps){
	// const [currentIdx, setcurrentIdx] = useState(0);
	const country = props.country;
	const onClickEvent = props.onClickEvent();
	const activeIdx = props.activeIdx;

	return(
		<>
			<ContentTab>
				{country.map((item : any, idx : number) => 
				<BtnTab type="button" className={`${idx === activeIdx ? 'active' : ''}`} key={idx} onClick={() =>{onClickEvent(idx)}}>
					<span className="text">{item}</span>
				</BtnTab>)}
			</ContentTab>
		</>
	)
}

export default Tab;

