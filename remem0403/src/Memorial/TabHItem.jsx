export const TabHItem = ({clickEv,text}) => {
  return(
    <li>
        <button onClick={clickEv}>{text}</button>
    </li>
  )
}