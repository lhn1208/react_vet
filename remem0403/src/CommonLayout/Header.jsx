import { useEffect, useState } from "react";
import { Search } from "../common/Search"
import { Blind, ContWidth} from "../common/common.style"
import { HeaderStyle, Member, Menu } from "./comLayout.style"
import { Link } from "react-router-dom";

export const Header = ({classname}) => {
  const [isAdd, setIsAdd] = useState(false);
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
  const toggleClass = () => {
    setIsAdd(!isAdd);
  };
    return(
      <HeaderStyle className={`header ${classname}`}>
        <ContWidth className="w1400">
          <div className={`header_inner ${isAdd ? 'is-active' : ''}`}>
            <h1 className="logo">
            <Link to="/"><Blind>Rememberd</Blind></Link>
            </h1>
            <div>
              <Menu className="menu">
                <li><Link to="/service">서비스소개</Link></li>
                <li><Link to="/obituray">부고</Link></li>
                <li><Link to="/memorial">추모관</Link></li>
                <li><a href="#">FAQ</a></li>
              </Menu>
            </div>
            <Member className="member">
              <Search/>
              <ul>
                <li><a href="#" className="link">회원가입</a></li>
                <li><a href="#" className="link">로그인</a></li>
              </ul>
              <button className="gnb" onClick={toggleClass}><Blind>전체메뉴</Blind></button>
            </Member>
            <div className="mb_menu_bg"></div>
          </div>
        </ContWidth>
      </HeaderStyle>
    )
}