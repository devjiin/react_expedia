import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TabNav = styled.ul`
	display: flex;
	position: fixed;
	z-index: 100;
	top: 72px;
	width: 100%;
	height: 70px;
	background-color: #202843;
	justify-content: center;
`

const ItemLink = styled(Link)`
	display: block;
	width: 240px;
	height: 70px;
`

function Nav(props){
	const navTit = ['할인혜택', '호텔 찾기', '즐길거리', '검색 가이드'];
	let [NavActive, setNavActive] = useState(false);
	const isActive = props.isActive;

	const handleClick = (e) => {
		// console.log(e.currentTarget)
		e.currentTarget.classList.add("active");
		// e.currentTarget.parentElement.slbling.classList()
		// if(NavActive){
		// 	setNavActive(false)
		// }else{
		// 	setNavActive(true)
		// }
		// console.log(NavActive)
	}
	return(
		<div className="box__navigation--category">
			<TabNav className="list">
				{navTit.map((item ,idx) => 
					<li className={`list-item${idx + 1}`}>
						<ItemLink to={`/0${idx+1}`} className="link sprite__expedia" key={idx} onClick={handleClick}>
							<span className="for-a11y">{item}</span>
						</ItemLink>
					</li>
				)}
			</TabNav>
		</div>
	)
}

export default Nav;