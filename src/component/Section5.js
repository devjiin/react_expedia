import styled from "styled-components";
import ImgSection5 from "../image/image__section5.png";
import Tab from "./Tab";

const Box = styled.div`
	background:#222;
	padding-bottom:120px;
`

const TitleArea = styled.div`
	width:830px;
	height:297px;
	margin:0 auto;
	background:url(${ImgSection5}) no-repeat 0 0/contain;
`

function Section5(){
	return(
		<Box>
			<TitleArea>
				<h2 className="for-a11y">누구나 매일매일 10% 할인쿠폰</h2>
				<p className="for-a11y">발급 당일 사용 가능, 20만원이상 결제 시 최대 10만원</p>
				<ul className="for-a11y">
					<li>10% 할인 쿠폰, 누구나 최대 10만원 할인</li>
					<li>5% 중복 쿠폰, 항공 구매시 최대 10만원 중복할인</li>
					<li>10% 스마일캐시, 최대 10만 스마일캐시 지급 (할인 쿠폰 사용 불가 호텔 결제 시)</li>
				</ul>
			</TitleArea>
			<Tab />
		</Box>
	)
}

export default Section5;

