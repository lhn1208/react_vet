import { useNavigate } from "react-router-dom";
import { Header } from "../CommonLayout/Header";
import { Search } from "../common/Search";
import { ContWidth } from "../common/common.style";
import { Button } from "./Button";
import { ContTopText } from "./ContTopText";
import { ObiItem } from "./ObiItem";
import { ObiContentStyle, Title, ContTop, ContGrid } from "./memorial.style"

export const Memorial = () => {
  const navigate = useNavigate();
  const linkpath = () => {
      navigate("/memorialView");
  };
    return(
      <>
        <Header classname="contHeader"/>
        <ObiContentStyle>
          <ContWidth>
              <Title>추모관</Title>
              <ContTop>
                  <ContTopText num="55"/>
                  <div className="d_flex">
                      <Search />  
                      <Button classname="base" buttnText="추모관 등록"/>
                  </div>
              </ContTop>
              <ContGrid>
                  <ObiItem 
                      imgSrc="../images/sample/img_memorial3.jpg" 
                      imgAlt="윤영환 명예회장 이미지" 
                      name="윤영환 명예회장" 
                      date="1934-03-30 ~ 2022-08-20"
                      clickMemorial={linkpath}
                  /> 
                  <ObiItem 
                      imgSrc="../images/sample/img_memorial1.jpg" 
                      imgAlt="김명숙 이미지" 
                      name="김명숙" 
                      date="1934-03-30 ~ 2022-08-20"
                      clickMemorial={linkpath}
                  /> 
                  <ObiItem 
                      imgSrc="../images/sample/img_memorial2.jpg" 
                      imgAlt="김한국 이미지" 
                      name="김한국" 
                      date="1934-03-30 ~ 2022-08-20"
                      clickMemorial={linkpath}
                  /> 
                  <ObiItem 
                      imgSrc="../images/sample/img_memorial3.jpg" 
                      imgAlt="윤영환 명예회장 이미지" 
                      name="윤영환 명예회장" 
                      date="1934-03-30 ~ 2022-08-20"
                      clickMemorial={linkpath}
                  /> 
                  <ObiItem 
                      imgSrc="../images/sample/img_memorial1.jpg" 
                      imgAlt="김명숙 이미지" 
                      name="김명숙" 
                      date="1934-03-30 ~ 2022-08-20"
                      clickMemorial={linkpath}
                  /> 
                  <ObiItem 
                      imgSrc="../images/sample/img_memorial2.jpg" 
                      imgAlt="김한국 이미지" 
                      name="김한국" 
                      date="1934-03-30 ~ 2022-08-20"
                      clickMemorial={linkpath}
                  /> 
              </ContGrid>
          </ContWidth>
        </ObiContentStyle>
      </>
    )
}