import { ButtonStyle } from "./memorial.style"

export const Button = ({classname, buttnText, clickEv}) => {
    return(
        <ButtonStyle className={classname} onClick={clickEv}>
            {buttnText}
        </ButtonStyle>
        
    )
}