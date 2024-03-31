import { SecTittle, Section} from "styles/common.style"
import { AboutItems, AboutSec, AboutWrap, Skill, SkillItems, SnsLinks, StarsAni } from "./About.style"
import { ItemList } from "./ItemList"
import { SkillItemList } from "./SkillItemsList"
import starBg from '../images/background.png';
import instaIco from '../images/ico_insta.png';
import vueIco from '../images/ico_vue.png';
import reactIco from '../images/logo.svg';

export const About = () => {
    return (
        <AboutWrap>
            <div className="section_wrap">
                <Section>
                    <Skill>
                        <SecTittle white >SKILL</SecTittle>
                        <SkillItems>
                            <ul className="skill_list">	
                                <SkillItemList skill={"HTML5/CSS3/SASS"} desc={"W3C에 준수하는 웹표준"}></SkillItemList>	
                                <SkillItemList skill={"Jquery/Javascript"} desc={"스크립트 동작 구현"}></SkillItemList>	
                                <SkillItemList skill={"반응형웹"} desc={"전 기기 반응하는 반응형"}></SkillItemList>	
                                <SkillItemList skill={"웹접근성"} desc={"모두 접근 가능한 접근성"}></SkillItemList>	
                            </ul>
                        </SkillItems>
                    </Skill>
                </Section>
                <StarsAni>
                    <img className="stars stars-animation" src={starBg} alt="" />
                    <img className="stars stars-animation-two" src={starBg} alt="" />
                    <img className="stars stars-animation-three" src={starBg} alt="" />
                </StarsAni>
            </div>
            <AboutSec>
                <SecTittle white>About</SecTittle>
                <h3 className='title'>My Info</h3>
                <AboutItems>
                    <ItemList title={"Name"} text={"이 하 나"} type="colon"></ItemList>    
                    <ItemList title={"Email"} text={"lhn1208@naver.com"} type="colon"></ItemList>  
                    <ItemList title={"tools"} text={"VsCode/Git/eclips/Websquare"} type="colon"></ItemList>   
                </AboutItems>	
                <h3 className='title'>Career</h3>
                <AboutItems>
                    <ItemList title={"ITANS"} text={"IT Company"} type="slash"></ItemList> 
                    <ItemList title={"온앤온정보시스템"} text={"IT Company"} type="slash"></ItemList>
                    <ItemList title={"애드캡슐소프트"} text={"Web Agency"} type="slash"></ItemList>       
                    <ItemList title={"모두투어"} text={"Travel Company"} type="slash"></ItemList>    
                    <ItemList title={"IDS&Trust"} text={"Dawoong Group"} type="slash"></ItemList>       
                </AboutItems>	
                <SnsLinks>
                    <a href="//www.instagram.com/hanayastagram/?hl=ko" target="_blank" rel="noreferrer"><img src={instaIco} /></a>
                    <a href="//hanaya01.tistory.com/" target="_blank" className="tstory" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                            <title>티스토리 로고</title>
                            <g>
                            <path fill="#eb531f" d="M229.5,0C102.75,0,0,102.75,0,229.5S102.75,459,229.5,459,459,356.25,459,229.5,356.25,0,229.5,0ZM130.21,191.45a39.57,39.57,0,1,1,39.56-39.57A39.58,39.58,0,0,1,130.21,191.45ZM229.5,390a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,390Zm0-99.29a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,290.74Zm0-99.29a39.57,39.57,0,1,1,39.56-39.57A39.57,39.57,0,0,1,229.5,191.45Zm99.29,0a39.57,39.57,0,1,1,39.57-39.57A39.57,39.57,0,0,1,328.79,191.45Z"/>
                            <circle cx="229.5" cy="250" r="38" fill="#ffffff" />
                            <circle cx="229.5" cy="350" r="38" fill="#ffffff" />
                            <circle cx="229.5" cy="150" r="38" fill="#ffffff" />
                            <circle cx="330" cy="150.00" r="38" fill="#ffffff" />
                            <circle cx="130" cy="150" r="38" fill="#ffffff" />
                            </g>
                        </svg>
                    </a>
                    <a href="//lhn1208.github.io/vue_port/#/" target="_blank" rel="noreferrer" className="myvue"><div className='tooltip'>Vue 포트폴리오</div> <img src={vueIco} /></a>
                    <a href="#" target="_blank" className="myreact" rel="noreferrer"><div className='tooltip'>리액트</div> <img src={reactIco} /></a>
                </SnsLinks>
            </AboutSec>
            
        </AboutWrap>
    )
}