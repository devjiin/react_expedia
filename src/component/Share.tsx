import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BtnWrap = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	top: 44px;
	z-index:100;
	width: 1200px;
	margin: 0 auto;
`

const Btn = styled.button`
	position: absolute;
	right: -6px;
	top: 0;
	width: 70px;
	height: 70px;
	border: 0;
	background-position: -332px -144px;
`

const LayerShare = styled.div`
	display: none;
	position: fixed;
	top: 50%;
	left: 50%;
	z-index:990;
	width: 300px;
	height: 296px;
	margin-left: -150px;
	margin-top: -143px;
	background:#fff;
	& .layer__title{
		position: relative;
		z-index: 120;
		height: 37px;
		border: 1px solid #979797;
		border-bottom-color: #e5e5e5;
		border-radius: 2px 2px 0 0;
		background: #fff;
		text-align: center;
		line-height: 37px;
	}
	& .title{
		display: block;
		font-size: 16px;
		color: #233549;
		line-height: 37px
	}
	& .btn_close{
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		width: 38px;
		height: 38px;
		background: none;
		border: 0;
		cursor: pointer
	}
	& .ico-share{
		position: absolute;
		top: 0;
		right: 0;
		width: 38px;
		height: 38px;
		background-position: -402px 0
	}
`
const Dimmed = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,.4);
`

function Share(props){
	const handleClick = (e) => {
	}
	return(
		<>
		<BtnWrap>
			<Btn className="sprite__expedia" onClick={handleClick} aria-label="sns 공유하기"></Btn>
		</BtnWrap>
		<LayerShare className="layer__share">
			<div className="layer__title">
				<strong className="title">공유하기</strong>
				<button type="button" className="btn_close"><span className="ico-share">닫기</span></button>
			</div>
			<div className="layer_content">
				<div className="share_content">
					<ul className="list_share">
						<li className="list_item kakao">
							<Link to="/" className="ico-share">카카오톡</Link>
						</li>
						<li className="list_item facebook">
							<Link to="/" className="ico-share">페이스북</Link>
						</li>
						<li className="list_item twiter">
							<Link to="/" className="ico-share">트위터</Link>
						</li>
						<li className="list_item line">
							<Link to="/" className="ico-share">라인</Link>
						</li>
					</ul>
				</div>
				<div className="url_copy">
					<p className="url">https://event.gmarket.co.kr/event/2022/02/0201_stay/event.asp</p>
					<Link to="/" id="btnCopy" className="btn_copy" data-clipboard-text="https://event.gmarket.co.kr/event/2022/02/0201_stay/event.asp">복사</Link>
				</div>
			</div>
			<Dimmed />
		</LayerShare>
		</>
	)
}

export default Share;