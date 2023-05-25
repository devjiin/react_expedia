import styled from "styled-components";
import ImgSection1 from "../image/image__section1.png";

const Box = styled.div`
	background-color: #ffc70c;
`

const TitleArea = styled.div`
	width:830px;
	height:808px;
	margin:0 auto;
	background:url(${ImgSection1}) no-repeat 0 0/contain;
	padding-bottom: 100px;
`

function Section1(){

	return(
		<>
			<Box className="box__section1">
				<TitleArea>
					<h2 className="for-a11y">전 세계 50만개 호텔을 특가에 만나요</h2>
					<p className="for-a11y">Expedia 회원 혜택을 G마켓에서 누리세요!</p>
					<ul className="for-a11y">
						<li>10% 할인 쿠폰, 누구나 최대 10만원 할인</li>
						<li>5% 중복 쿠폰, 항공 구매시 최대 10만원 중복할인</li>
						<li>10% 스마일캐시, 최대 10만 스마일캐시 지급 (할인 쿠폰 사용 불가 호텔 결제 시)</li>
					</ul>
				</TitleArea>
			</Box>
		</>
	)
}

export default Section1;

