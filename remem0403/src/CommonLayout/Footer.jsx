import { ContWidth } from "../common/common.style"
import { FooterStyle, RightBanner } from "./comLayout.style"
import FooIco1 from '../images/footer_ico1.png';
import FooIco2 from '../images/footer_ico2.png';
import FooIcoLogo from '../images/footer_logo.png';

export const Footer = () => {
    return(
      <FooterStyle>
          <ContWidth>
              <div className="footer_inner">
                <ul className="trem_list">
                  <li>
                      <a href="#">이용약관</a>
                  </li>
                  <li>
                    <a href="#">개인정보처리방침</a>
                  </li>
                </ul>
                <div className="info">
                  <address>서울시 강남구 봉은사로 114길 12, 7층</address>
                  <span>대표 서종원 </span>
                  <span>사업자 등록번호 120-86-10499</span>
                  <span className="none_bar">통신판매업신고 2009-서울강남-00290</span>
                  <br /><span>고객센터 tel.02-550-8700 fax.02-563-8398</span>
                  <span>Email.tslee0710@mcircle.biz</span>
                  <span>상담가능시간  오전 9:00 - 오후 6:00</span>
                </div>
                <div className="sns_links">
                    <a href="#"><img src={FooIco1} /></a>
                    <a href="#"><img src={FooIco2} /></a>
                </div>
                <div className="footer_logo"><img src={FooIcoLogo} /></div>
              </div>
          </ContWidth>
          <RightBanner>
              <a href='#'>문의</a>
              <a href='#' className='kakao'>KAKAO</a>
          </RightBanner>
      </FooterStyle>
    )
}