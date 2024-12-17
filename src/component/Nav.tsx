import { useRef } from "react";
import styled from "styled-components";
import dummyData from "./data/data.json";
import type { INavProps } from './Content';

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

const ItemAnchor = styled.a`
	display: block;
	width: 240px;
	height: 70px;
`

function Nav({scrollY, toElement}:INavProps){
	const navRef = useRef<(HTMLAnchorElement | null)[]>([]);
	const headerH = 595;
	const navH = 71;
	
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
	
	const handleClick = (e : React.MouseEvent<HTMLAnchorElement>, idx:number) => {
		e.preventDefault();
		siblings(e.currentTarget.parentElement).forEach(element => {
			element.querySelector('a').classList.remove("active");
		});
		e.currentTarget.classList.add("active");
		toElement[idx].onMoveToElement();
	}
	return(
		<div className="box__navigation--category">
			<TabNav className={scrollY >= (headerH - navH) ? `tab__navigation--fixed` : ''}>
				{dummyData.tabNavigation.map((item, idx) => 
					<li className={`list-item${idx+1}`} key={idx}>
						<ItemAnchor ref={(el) => navRef.current[idx] = el} href="" className="button sprite__expedia" onClick={(e)=>handleClick(e, idx)}>
							<span className="for-a11y">{item}</span>
						</ItemAnchor>
					</li>
				)}
			</TabNav>
		</div>
	)
}

export default Nav;