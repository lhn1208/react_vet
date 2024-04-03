
import { useState } from "react"
import { ContWidth } from "../common/common.style"
import { PersonInfo } from "./PersonInfo"
import { ViewTopArea } from "./ViewTopArea"
import { ViewTop, ViewWrap, ViewCont, TabStyle, PreHistory, TabContWrap, MemorialCont } from "./memorial.style"
import { TabHeader } from "./TabHeader"
import MapSample from '../images/map.jpg';
import historySample from '../images/jomunbo_img_01.jpg';
import { Header } from "../CommonLayout/Header"
import { MemorialReg } from "./MemorialReg"

export const ObiView = () => {
  const tab1 = '장례정보';
  const tab2 = '조문보';
  const tab3 = '추모의 글';
  const [activeTab, setActiveTab] = useState(tab1);
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <>
      <Header classname="contHeader"/>
      <ViewWrap>
        <ViewTop>
          <ContWidth>
            <ViewTopArea/>
          </ContWidth>
        </ViewTop>
        <ViewCont>
          <MemorialCont>
            <ContWidth>
              <PersonInfo 
                name="김경옥 님"
                date="1934-03-30 ~ 2022-08-20"
                btnText="부고 보내기"
              />
              <div className="funeral_info">
                <ul>
                  <li>
                    <strong className="cell">빈소</strong>
                    <div className="cell">
                      <span className="text">인천적십자병원장례식장 301호실 특실</span>
                      <button className="btn_way">오시는길</button>
                    </div>
                  </li>
                  <li>
                    <strong className="cell">발인</strong>
                    <div className="cell">
                      <span className="text">2023-05-27</span>
                    </div>
                  </li>
                </ul>
                <div className="message">
                  <strong>알림글</strong>
                  <div className="text">고인이 가시는 마지막 길에 평안과 명복을 빌어주시면 감사드리겠습니다.</div>
                </div>
              </div>
            </ContWidth>
          </MemorialCont>
          <ContWidth className="tabContWrap">
            <TabStyle>
                <TabHeader
                  clickEv1={() => handleTabClick(tab1)}
                  text1={tab1}
                  clickEv2={() => handleTabClick(tab2)}
                  text2={tab2}
                  clickEv3={() => handleTabClick(tab3)}
                  text3={tab3}
                  activeTab={activeTab}
                  handleTabClick={handleTabClick} // handleTabClick 함수 전달
                />
                <div className="tab_content">
                  {activeTab === tab1 && 
                    <>
                      <ul className="location">
                        <li>
                          <strong className="cell">주소</strong>
                          <span className="cell text">경기도 용인시 처인구 포곡읍 두계로 72</span>
                        </li>
                        <li>
                          <strong className="cell">전화번호</strong>
                          <span className="cell text">010-1234-5678</span>
                        </li>
                      </ul>
                      <div className="map_area"><img src={MapSample} /></div>
                    </>
                  }
                  {activeTab === tab2 &&
                    <PreHistory>
                        <figure><img src={historySample} /></figure>
                        <figcaption>
                          <h3 className="title">좋은 약을 만들어 국민의 건강을 지키고 건강한 사회를 만든다</h3>
                          <span className="sub_title">평생을 한국의 제약산업 발전에 이바지한 윤영환 회장</span>
                          <div className="text_area">
                            <p>대웅제약의 창업주인 석천 윤영환 회장은 선화약국을 운영하다가 1966년 대웅제약의 전신인 대한비타민을 인수하면서 기업 경영을 시작했습니다. 인재경영에 기반한 정도경영과 공생경영으로 평생 신약개발과 헬스케어 산업 강국을 추구하셨습니다.인재경영에 기반한 정도경영과 공생경영으로 평생 신약개발과 헬스케어 산업 강국을 추구하셨습니다.</p>
                          </div>
                          <button className="btn_more">더보기</button>
                        </figcaption>
                    </PreHistory>
                  }
                  {activeTab === tab3 && 
                    <MemorialReg />
                  }
                </div>
            </TabStyle>
          </ContWidth>
        </ViewCont>
        
      </ViewWrap>
    </>
  )
}