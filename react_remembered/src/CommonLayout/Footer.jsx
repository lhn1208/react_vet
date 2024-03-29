import { ContWidth } from "../common/common.style"
import { FooterStyle } from "./comLayout.style"

export const Footer = () => {
    return(
      <FooterStyle>
          <ContWidth>
              <div className="footer_inner">
                <ul className="trem_list">
                  <li>
                      <a href="#">이용약관</a>
                      <a href="#">개인정보처리방침</a>
                  </li>
                </ul>
                <div className="info">
                  <address>서울시 강남구 봉은사로 114길 12, 7층</address>
                  <span>대표 서종원 </span>
                  <span>사업자 등록번호 120-86-10499</span>
                </div>
              </div>
          </ContWidth>
      </FooterStyle>
    )
}