import styled from "styled-components";
import ImgSection2 from "../image/image__section2.png";
import CouponBtn from './CouponBtn';
import Notice from './Notice';

const Box = styled.div`
	background-color:#f1f1f1;
	padding-bottom:100px;
`

const TitleArea = styled.div`
	width:830px;
	height:545px;
	margin:0 auto;
	background:url(${ImgSection2}) no-repeat 0 0/contain;
`

const txtArr = [
	'발급 대상 : 2022. 12. 1 (목) 이후 해외 항공 결제 고객',
	'발급 기간 : 2023. 1. 2 (월) ~ 1. 15 (일)',
	'사용 기간 : 2023. 1. 2 (월) ~ 1. 15 (일)',
	'발급 기회 : 기간 내 ID 당 1회',
	'할인 대상 : expedia 전 세계 호텔 (일부 브랜드호텔 사용 불가)',
	'본 쿠폰은 당사의 사정으로 예고없이 변경, 조기종료될 수 있습니다',
];

function Section2(){
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
			<CouponBtn isDisabled/>
			<Notice list={txtArr}/>
		</Box>
	)
}

export default Section2;

