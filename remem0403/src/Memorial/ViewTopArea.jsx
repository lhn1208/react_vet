import { MbBlock } from "../common/common.style"
import { PortraitStyle, ViewTopTxt } from "./memorial.style"

  export const ViewTopArea = ({type, memorialImg}) => {
    return (
      <>
        {type === "memorial" && (
            <PortraitStyle>
               <img src={memorialImg} alt="추모 메인 이미지" />
            </PortraitStyle>
        )}
      {type !== "memorial" && (
        <ViewTopTxt>
          <h2>세상에 남겨진<MbBlock />오직 한 사람의 이야기</h2>
          <span className="desc">언제 어디서나 마음 속 이야기를 전하세요.</span>
        </ViewTopTxt>
      )}
    </>
  )
}