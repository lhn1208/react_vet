import { InfoStyle } from "./memorial.style"

export const PersonInfo = ({name,date,btnText}) => {
  return (
    <InfoStyle>
        <h2>{name}</h2>
        <span className="date">{date}</span>
        <button>{btnText}</button>
    </InfoStyle>
  )}