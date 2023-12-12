import { debounce } from "lodash";
import { useEffect, useState } from "react";
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

const useScroll = () => {
	const [scrollY, setScrollY] = useState<number>(0);

	const handleScroll = () => {
		setScrollY(window.scrollY);
	}

	const delay = 15;

	useEffect(() => {
		window.addEventListener('scroll', debounce(handleScroll, delay));
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
	return {scrollY};
}

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

	const { scrollY } = useScroll();

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
		console.log(scrollY);
		siblings(e.currentTarget.parentElement).forEach(element => {
			element.querySelector('button').classList.remove("active");
		});
		e.currentTarget.classList.add("active");
	}
	// const navOffset = document.querySelector('.box__navigation--category')?.offsetTop;
	return(
		<div className="box__navigation--category">
			<TabNav className={scrollY >= (595 - 71) ? `tab__navigation--fixed` : ''}>
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