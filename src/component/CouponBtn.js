import styled from "styled-components";

const Btn = styled.button`
	display: block;
	width: 326px;
	height: 80px;
	margin: 0 auto;
	background-position: -674px -226px;
	cursor: pointer;
`


function CouponBtn(){
	return(
		<>
			<Btn type="button" className="sprite__expedia"><span className="for-a11y">쿠폰받기</span></Btn>
		</>
	)
}

export default CouponBtn;