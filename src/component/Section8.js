import styled from "styled-components";
import ImgSection8 from "../image/image__section8.png";

const Box = styled.div`
	background-color:#00c400;
	padding-bottom:130px;
`

const TitleArea = styled.div`
	width:830px;
	height:654px;
	margin:0 auto;
	background:url(${ImgSection8}) no-repeat 0 0/contain;
`

const Anchor = styled.a`
	display: block;
	margin: 96px auto 0;
	width: 420px;
	height: 84px;
	background-position: -580px -308px;
`
const Image = styled.img`
	width:100%;
`

function Section8(){
	return(
		<Box>
			<TitleArea>
				<h2 className="for-a11y">G마켓 항공권과 함께 하세요</h2>
				<ul className="for-a11y">
					<li>최저가 항공권 검색</li>
					<li>365일 스마일클럽 혜택</li>
					<li>스마일페이 결제 혜택</li>
				</ul>
			</TitleArea>
			<Anchor href="https://air.gmarket.co.kr/gm/init/lp/lpMain.do" className="sprite__expedia" target="_blank" aria-label="항공권 검색하러 가기"></Anchor>
		</Box>
	)
}

export default Section8;