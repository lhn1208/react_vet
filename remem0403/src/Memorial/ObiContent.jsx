import { Header } from "../CommonLayout/Header"
import { ContWidth } from "../common/common.style";
import { ObiContentStyle } from "./memorial.style";


export const ObiContent = () => {
    return(
        <>
            <Header classname="contHeader"/>
            <ObiContentStyle>
                <ContWidth>
                </ContWidth>
            </ObiContentStyle>
        </>
    )
}