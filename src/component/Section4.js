import styled from "styled-components";
import ImgSection4 from "../image/image__section4.png";
import CouponBtn from './CouponBtn';
import Notice from './Notice';

const Box = styled.div`
	background-color:#f1f1f1;
	padding-bottom:100px;
`

const TitleArea = styled.div`
	width:830px;
	height:615px;
	margin:0 auto;
	background:url(${ImgSection4}) no-repeat 0 0/contain;
`
const txtArr = [
	'대상 : 할인쿠폰 사용이 불가한 일부 브랜드 호텔 결제 시 스마일캐시 지급',
	'지급 : 입실일 기준 익월 15일 구매자 ID로 일괄 지급',
	'사용 : 지급 후 3개월 이내',
	'할인쿠폰과 스마일캐시 중복 사용은 불가합니다',
	'본 이벤트는 당사의 사정으로 예고없이 변경, 조기종료될 수 있습니다',
	'입실 전 취소할 경우 캐시백 지급 대상에서 제외됩니다',
];

function Section4(){
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
			<CouponBtn isDisabled={false}/>
			<Notice list={txtArr}/>
		</Box>
	)
}

export default Section4;

