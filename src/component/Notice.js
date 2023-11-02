import { useState } from "react";
import styled from "styled-components";

const BtnNotice = styled.button`
	display: block;
	width: 330px;
	height: 44px;
	margin: 40px auto 0;
	background-position: 0 -144px;
	&.active{
		background-position:0 -190px;
		& + ul{
			display:block;
		}
	}
`

const ListNotice = styled.ul`
	display:none;
	width: 430px;
	margin: 30px auto 0;
`

const ListItem = styled.li`
	position:relative;
	padding-left:8px;
	font-size: 14px;
	line-height: 26px;
	color: #444;
	font-family: 'Gmarket Sans', sans-serif;
	&:before{
		content:'';
		display:block;
		position:absolute;
		top:10px;
		left:0;
		width:2px;
		height:2px;
		background:#444;
	}
`

function Notice(props){
	const [toggle, setToggle] = useState(false);

	const listItem = props.list.map((item, idx) => <ListItem key={idx}>{item}</ListItem>);

	function clickToggle(){
		toggle ? setToggle(false) : setToggle(true);
	}
	
	return(
		<>
			<BtnNotice type="button" className={`sprite__expedia ${toggle && 'active'}`} onClick={clickToggle} aria-label="유의사항을 확인해주세요"></BtnNotice>
			<ListNotice className="list__notice">{listItem}</ListNotice>
		</>
	)
}

export default Notice;