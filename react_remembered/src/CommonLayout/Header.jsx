import { useEffect } from "react";
import { Search } from "../common/Search"
import { Blind, ContWidth} from "../common/common.style"
import { HeaderStyle } from "./comLayout.style"

export const Header = () => {
  useEffect(() => {
    window.addEventListener('scroll', updateFixed);
    updateFixed();
  }, []); 
  const updateFixed = () => {
    const header = document.querySelector('.header'); // HeaderStyle에 .header 클래스 추가하여 CSS 선택
    if (header) { 
      if (window.scrollY >1) {
        header.classList.add('fixed');
      } else {
        header.classList.remove('fixed');
      }
    }
  }
    return(
      <HeaderStyle className="header">
        <ContWidth className="cont_width">
          <div className="header_inner">
            <div>
              <h1 className="logo">
                <a href="#"><Blind>Rememberd</Blind></a>
              </h1>
              <ul className="menu">
                <li><a href="#">서비스소개</a></li>
                <li><a href="#">부고</a></li>
                <li><a href="#">추모관</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
            <div className="member">
              <Search/>
              <a href="#" className="link">회원가입</a>
              <a href="#" className="link">로그인</a>
              <button className="gnb"><Blind>전체메뉴</Blind></button>
            </div>
          </div>
        </ContWidth>
      </HeaderStyle>
    )
}