import styled from "styled-components";

interface couponBtnPoprs {
	isDisabled : boolean
}

const Btn = styled.button`
	display: block;
	width: 326px;
	height: 80px;
	margin: 0 auto;
	background-position: -674px -226px;
	cursor: pointer;
	&:disabled{
		background-position: -674px -144px;
		pointer-events: none;
	}
`

function CouponBtn(props : couponBtnPoprs){
	return(
		<>
			<Btn type="button" className="sprite__expedia" disabled={props.isDisabled}><span className="for-a11y">쿠폰받기</span></Btn>
		</>
	)
}

export default CouponBtn;