import styled from "styled-components";
import ImgSection6 from "../image/image__section6.png";


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



function Section6(props:any){
	return(
		<Box ref={props.scrollRef}>
			<TitleArea>
				<h2 className="for-a11y">이렇게 검색하세요</h2>
				<p className="for-a11y">취향에 딱 맞는 호텔을 쉽게 찾을 수 있어요</p>
			</TitleArea>
		</Box>
	)
}

export default Section6;