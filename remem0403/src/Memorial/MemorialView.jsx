import { ContWidth } from "../common/common.style"
import { ViewTopArea } from "./ViewTopArea"
import { MemorialCont, TabContWrap, TabStyle, ViewCont, ViewTop, ViewWrap } from "./memorial.style"
import { PersonInfo } from "./PersonInfo"
import { Header } from "../CommonLayout/Header"
import mainImg from '../images/sample/img_memorial3.jpg'
import { useState } from "react"
import { TabHeader } from "./TabHeader"
import { MemorialReg } from "./MemorialReg"

export const MemorialView = () => {
  const tab1 = '일대기';
  const tab2 = '추억앨범';
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
            <ViewTopArea type="memorial" memorialImg={mainImg}/>
          </ContWidth>
        </ViewTop>
        <ViewCont>
          <MemorialCont>
            <ContWidth>
              <PersonInfo 
                name="윤영환 명예회장"
                date="1934-03-30 ~ 2022-08-20"
                btnText="추모관 전송"
              />
              <p className="repSentence">평생을 한국의 제약산업 발전에 이바지하며 의약보국의 신념을 실천하신 석천 윤영환 회장님을 추모합니다.</p>
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
                      <div className="memorial">
                        <h2>추모 영상</h2>
                        <p className="text">고인의 삶을 영상으로 담아 추억합니다.</p>
                        <div className="video_area">
                            <video poster="https://d3lzegcz38cz56.cloudfront.net/photo/39b48bf9-a7a6-481f-b5a4-bb8e764f2d1a윤영환 명예회장님.png"></video>
                            <button></button>
                        </div>
                      </div>
                    }
                    {activeTab === tab2 &&
                       <div className="memorial album">
                          <h2>추억앨범</h2>
                          <ul>
                            <li>
                              <a href="">
                                <span className="img"><img src="https://d3lzegcz38cz56.cloudfront.net/image/thumbnail/753a8043-41fd-40e4-9210-7a106ddc0420thumbnail70bf8042-9224-4d3d-8626-5b99fce11ace.png" alt="" /></span>
                                <div className="info"><span>by </span>이재국</div>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span className="img"><img src="https://d3lzegcz38cz56.cloudfront.net/image/thumbnail/753a8043-41fd-40e4-9210-7a106ddc0420thumbnail70bf8042-9224-4d3d-8626-5b99fce11ace.png" alt="" /></span>
                                <div className="info"><span>by </span>이재국</div>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span className="img"><img src="https://d3lzegcz38cz56.cloudfront.net/image/thumbnail/753a8043-41fd-40e4-9210-7a106ddc0420thumbnail70bf8042-9224-4d3d-8626-5b99fce11ace.png" alt="" /></span>
                                <div className="info"><span>by </span>이재국</div>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span className="img"><img src="https://d3lzegcz38cz56.cloudfront.net/image/thumbnail/753a8043-41fd-40e4-9210-7a106ddc0420thumbnail70bf8042-9224-4d3d-8626-5b99fce11ace.png" alt="" /></span>
                                <div className="info"><span>by </span>이재국</div>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span className="img"><img src="https://d3lzegcz38cz56.cloudfront.net/image/thumbnail/753a8043-41fd-40e4-9210-7a106ddc0420thumbnail70bf8042-9224-4d3d-8626-5b99fce11ace.png" alt="" /></span>
                                <div className="info"><span>by </span>이재국</div>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span className="img"><img src="https://d3lzegcz38cz56.cloudfront.net/image/thumbnail/753a8043-41fd-40e4-9210-7a106ddc0420thumbnail70bf8042-9224-4d3d-8626-5b99fce11ace.png" alt="" /></span>
                                <div className="info"><span>by </span>이재국</div>
                              </a>
                            </li>
                          </ul>
                       </div>
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