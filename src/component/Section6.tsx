import styled from "styled-components";
import ImgSection6 from "../image/image__section6.png";
import Tab from "./Tab";

const Box = styled.div`
	background-color:#ffc70c;
	padding-bottom:100px;
`

const TitleArea = styled.div`
	width:830px;
	height:297px;
	margin:0 auto;
	background:url(${ImgSection6}) no-repeat 0 0/contain;

`
const ContentArea = styled.div`
	margin-top: 60px;
	text-align: center;
`


function Section6(props:any){
	const menuArr = ['오사카', '도쿄', '방콕', '다낭', '발리', '싱가포르', '하와이', '라스베가스', '파리', '런던'];
	return(
		<Box ref={props.scrollRef}>
			<TitleArea>
				<h2 className="for-a11y">이렇게 검색하세요</h2>
				<p className="for-a11y">취향에 딱 맞는 호텔을 쉽게 찾을 수 있어요</p>
			</TitleArea>
			<ContentArea>
				<Tab country={menuArr}/>
			</ContentArea>
		</Box>
	)
}

export default Section6;