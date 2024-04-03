import { useNavigate } from "react-router-dom";
import { Header } from "../CommonLayout/Header";
import { Search } from "../common/Search";
import { ContWidth } from "../common/common.style";
import { Button } from "./Button";
import { ContTopText } from "./ContTopText";
import { ObiItem } from "./ObiItem";
import { ObiContentStyle, Title, ContTop, ContGrid } from "./memorial.style"

export const Obituary = () => {
    const navigate = useNavigate();
    const linkpath = () => {
        navigate("/obiView");
    };
    return(
        <>
            <Header classname="contHeader"/>
            <ObiContentStyle>
                <ContWidth>
                    <Title>부고</Title>
                    <ContTop>
                        <ContTopText num="43"/>
                        <div className="d_flex">
                            <Search />  
                            <Button classname="base" buttnText="부고 등록"/>
                        </div>
                    </ContTop>
                    <ContGrid>
                        <ObiItem 
                            imgSrc="/images/sample/img_memorial1.jpg" 
                            imgAlt="김명숙 이미지" 
                            name="김명숙" 
                            date="1934-03-30 ~ 2022-08-20"
                            clickEv={linkpath}
                            type="obiType"
                        /> 
                        <ObiItem 
                            imgSrc="/images/sample/img_memorial2.jpg" 
                            imgAlt="김한국 이미지" 
                            name="김한국" 
                            date="1934-03-30 ~ 2022-08-20"
                            clickEv={linkpath}
                            type="obiType"
                        /> 
                        <ObiItem 
                            imgSrc="/images/sample/img_memorial3.jpg" 
                            imgAlt="윤영환 명예회장 이미지" 
                            name="윤영환 명예회장" 
                            date="1934-03-30 ~ 2022-08-20"
                            clickEv={linkpath}
                            type="obiType"
                        /> 
                        <ObiItem 
                            imgSrc="/images/sample/img_memorial1.jpg" 
                            imgAlt="김명숙 이미지" 
                            name="김명숙" 
                            date="1934-03-30 ~ 2022-08-20"
                            clickEv={linkpath}
                            type="obiType"
                        /> 
                    </ContGrid>
                </ContWidth>
            </ObiContentStyle>
        </>
    )
}