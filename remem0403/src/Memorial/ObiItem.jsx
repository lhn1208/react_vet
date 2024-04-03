import { Button } from "./Button"
import { HospitalInfo } from "./memorial.style"

export const ObiItem = ({imgSrc,imgAlt, name, date, type, clickMemorial, clickEv}) => {
    return(
        <li>
            <figure><img src={imgSrc} alt={imgAlt} /></figure>
            <figcaption>
                <strong>{name}</strong>
                <span className="date">{date}</span>
            </figcaption>
            {type !== "obiType" && (
                <Button clickEv={clickMemorial}  classname="minSize" buttnText="추모" />
            )}
            {type === "obiType" && (
              <>
              <Button clickEv={clickEv}  classname="minSize yellow" buttnText="조문" />
                <HospitalInfo>
                    <li>
                        <em>발인</em>
                        <span className="val">2023-05-27</span>
                    </li>
                    <li>
                        <em>빈소</em>
                        <span className="val">장례식장 평화원</span>
                    </li>
                </HospitalInfo>
              </>
            )}
        </li>
    )
}