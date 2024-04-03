import { TabHeaderStyle } from "./memorial.style"

export const TabHeader = ({clickEv1,text1,clickEv2,text2,clickEv3,text3, activeTab, handleTabClick }) => {
  
  return(
    <TabHeaderStyle>
      <li className={activeTab === text1 ? 'on' : ''}>
          <button onClick={clickEv1}>{text1}</button>
      </li>
      <li className={activeTab === text2 ? 'on' : ''}>
          <button onClick={clickEv2}>{text2}</button>
      </li>
      <li className={activeTab === text3 ? 'on' : ''}>
          <button onClick={clickEv3}>{text3}</button>
      </li>
    </TabHeaderStyle>
  )
}