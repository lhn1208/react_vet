import { Header } from "../CommonLayout/Header"
import { PcBlock } from "../common/common.style"
import { ServiceCont, ServiceWrap } from "./service.style"
import IntroImg1 from '../images/intro_img_01.png'
import IntroImg2 from '../images/intro_img_02.png'
import IntroImg3 from '../images/intro_img_03.png'
import IntroImg4 from '../images/intro_img_04.png'

export const ServiceIntro = () => {
  return (
    <>
      <Header classname="contHeader"/>
      <ServiceWrap>
          <div className="inner">
            <h2>서비스 소개</h2>
            <ServiceCont>
                <div className="sv_intro">
                  <h3>리멤버드는 새로운 장례 문화를 선도하는<PcBlock />사회적 기업입니다.</h3>
                  <p className="text">보석처럼 빛나는 고인의 삶과 남겨진 유훈을 조문보에 담아 기리는<PcBlock />고인 중심의 장례 문화를 지향합니다.</p>
                  <p className="text">살아온 날의 전부가 모아진 조문보를 쓰듯 오늘 하루를 살아간다면,
                  <PcBlock />그 만큼 세상은 조금은 더 따듯하고 밝아질 것이라 믿습니다.
                  <PcBlock />유훈으로 남겨진 고인의 삶은 우리 주머니 안에 있는
                  <PcBlock />온라인 추모관에서 늘 우리와 함께합니다.</p>
                </div>
                <div className="sv_intro center">  
                  <div className="visual"><img src={IntroImg1} alt="서비스 소개 이미지" /></div>
                  <h3>사랑하는 사람과의<PcBlock />추억을 영원히</h3>
                  <p className="text">
                    고인이 가족 및 친구들과 나누었던 소중한 추억을
                    <PcBlock />온라인 공간에서 영원히 간직하며, 고인을 추모하는 전통 가족 문화를 소중히 지킵니다.
                    <PcBlock />조문보가 담긴 부고 알림을 통하여 고인의 일생을
                    <PcBlock />되돌아보고 온라인 조문으로 유족을 위로합니다.
                  </p>
                </div>
            </ServiceCont>
            <ServiceCont>
                <div className="sv_intro center">
                  <div className="visual"><img src={IntroImg2} alt="서비스 소개 이미지" /></div>
                  <h3>부고 알림과<PcBlock />조문보</h3>
                  <p className="text">
                    사랑하는 사람의 부음을 문자 및 단체 알림,
                    <PcBlock />SNS 메시지로 발송 대행하고 장례 의식 공지 등의
                    <PcBlock />서비스를 제공하며 출생 및 가족과 사회 활동,
                    <PcBlock />업적, 어록 등을 조문보로 제작하여
                    <PcBlock />고인의 일대기를 기립니다.
                  </p>
                </div>
                <div className="sv_intro center mt_type">
                  <div className="visual"><img src={IntroImg3} alt="서비스 소개 이미지" /></div>
                  <h3>온라인 조문과<PcBlock />디지털화환</h3>
                  <p className="text">
                    상가를 직접 방문하지 않고, 온라인으로 조문을
                    <PcBlock />가능하게 하는 라이브 조문 서비스와 추모 의식
                    <PcBlock />동영상 제작 서비스를 지원합니다.
                    <PcBlock />디지털 화환으로 허례허식을 줄이고
                    <PcBlock />유가족 위로와 기부 문화를 발전시킵니다
                  </p>
                </div>
            </ServiceCont>
            <ServiceCont>
                <div className="sv_intro center">
                  <div className="visual"><img src={IntroImg4} alt="서비스 소개 이미지" /></div>
                  <h3>온라인<PcBlock />추모관</h3>
                  <p className="text">
                    장례식이 끝난 후 고인을 기리는 추모글 과
                    <PcBlock />고인의 저서, 어록, 활동 자료, 사진 및 동영상 등을
                    <PcBlock />온라인 상으로 언제든지 만날 수 있는
                    <PcBlock />온라인 추모관을 지원합니다.
                  </p>
                </div>
            </ServiceCont>
          </div>
      </ServiceWrap>
    </>
  )
}