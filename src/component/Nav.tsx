import { useState } from "react";
import styled from "styled-components";

const TabNav = styled.ul`
	display: flex;
	z-index: 100;
	width: 100%;
	height: 70px;
	background-color: #202843;
	justify-content: center;
	&.tab__navigation--fixed{
		position: fixed;
		top: 72px;
	}
`

const ItemButton = styled.button`
	display: block;
	width: 240px;
	height: 70px;
`

function Nav(){
	const navTit = [{
		id: 1,
		name: '할인혜택',
	},
	{
		id: 2,
		name: '호텔 찾기',
	},
	{
		id: 3,
		name: '즐길거리',
	},
	{
		id: 4,
		name: '검색 가이드',
	}];
	let [NavActive, setNavActive] = useState(false);
	
	// const isActive = props.isActive;

	const siblings = function(t : any){
		let children = t.parentElement.children;
		let arr = [];

		for(let i=0;i < children.length; i++){
			arr.push(children[i]);

		}
		return arr.filter((e) => {
			return e !== t;
		})

	}
	
	const handleClick = (e : React.MouseEvent<HTMLButtonElement>) => {
		siblings(e.currentTarget.parentElement).forEach(element => {
			element.querySelector('button').classList.remove("active");
		});
		e.currentTarget.classList.add("active");
		// if(NavActive){
		// 	setNavActive(false)
		// }else{
		// 	setNavActive(true)
		// }
	}
	return(
		<div className="box__navigation--category">
			<TabNav>
				{navTit.map((item) => 
					<li className={`list-item${item.id}`} key={item.id}>
						<ItemButton className="button sprite__expedia" onClick={handleClick}>
							<span className="for-a11y">{item.name}</span>
						</ItemButton>
					</li>
				)}
			</TabNav>
		</div>
	)
}

export default Nav;