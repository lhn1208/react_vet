import { ServiceStyle } from "./main.style"

const ServiceItem = ({imgSrc, imgAlt, title, text, classname}) =>{
  return (
    <li className={classname}>
      <a href="#">
        <i><img src={imgSrc} alt={imgAlt} /></i>
        <strong>{title}</strong>
        <p>{text}</p>
      </a>
    </li>
  )
}
export const Service = () => {
    return (
       <ServiceStyle>
            <ServiceItem 
              imgSrc="../images/main/ico_service1.png"
              imgAlt="부고이미지"
              title="부고"
              text="상주가 부고를 만들어 유족과 지인들에게 알릴 수 있습니다."
              classname="sv1"
            />
            <ServiceItem 
              imgSrc="../images/main/ico_service2.png"
              imgAlt="추모관이미지"
              title="추모관"
              text="부고 이후, 추모관으로 자동 전환되어 지속적으로 고인을 추모할 수 있습니다."
              classname="sv2"
            />
            <ServiceItem 
              imgSrc="../images/main/ico_service3.png"
              imgAlt="조문보 이미지"
              title="조문보"
              text="고인의 삶과 정신적 유산을 조문보를 통해 알립니다."
              classname="sv3"
            />
            <ServiceItem 
              imgSrc="../images/main/ico_service4.png"
              imgAlt="FAQ 이미지"
              title="FAQ"
              text="부고 및 추모관, 조문보 서비스에 대한 사항을 확인하실 수 있습니다."
              classname="sv4"
            />
       </ServiceStyle>
    )
}