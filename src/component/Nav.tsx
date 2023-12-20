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

const ItemAnchor = styled.a`
	display: block;
	width: 240px;
	height: 70px;
`

function Nav(props:any){
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

	const { scrollY } = props.scrollY;
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
		props.toElement[idx].onMoveToElement();
	}
	// const navOffset = document.querySelector('.box__navigation--category')?.offsetTop;
	return(
		<div className="box__navigation--category">
			<TabNav className={scrollY >= (595 - 71) ? `tab__navigation--fixed` : ''}>
				{navTit.map((item, idx) => 
					<li className={`list-item${item.id}`} key={item.id}>
						<ItemAnchor href="" className="button sprite__expedia" onClick={(e)=>handleClick(e, idx)}>
							<span className="for-a11y">{item.name}</span>
						</ItemAnchor>
					</li>
				)}
			</TabNav>
		</div>
	)
}

export default Nav;