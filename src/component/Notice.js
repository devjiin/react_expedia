import styled from "styled-components";

const BtnNotice = styled.button`
	display: block;
    width: 330px;
    height: 44px;
    margin: 40px auto 0;
    background-position: 0 -144px;
`

const ListNotice = styled.ul`
	width: 420px;
    margin: 30px auto 0;
`

const NoticeTxtArr = {
	0 : '발급 기간 : 2023. 1. 2 (월) ~ 1. 15 (일)',
	1 : '발급 기간 : 사용 기간 : 발급 당일 사용 가능',
	2 : '발급 기간 : 발급 기회 : ID 당 하루 1회',
	3 : '발급 기간 : 할인 대상 : expedia 전 세계 호텔 (일부 브랜드호텔 사용 불가)',
	4 : '발급 기간 : 본 쿠폰은 당사의 사정으로 예고없이 변경, 조기종료될 수 있습니다',
}

function NoticeArea(){

	return(
		<>
			<BtnNotice type="button" className="button__notice sprite__expedia"><span className="for-a11y">유의사항을 확인해주세요</span></BtnNotice>
			<ListNotice className="list__notice">
			{/* NoticeTxtArr.map() */}
				<li className="list-item"></li>
			</ListNotice>
		</>
	)
}

export default NoticeArea;