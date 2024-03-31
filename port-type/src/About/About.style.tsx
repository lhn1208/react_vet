import styled from '@emotion/styled'
import { customStyles } from 'styles/custom.style';
const { size } = customStyles.font;
const {MediaWidth, Transition } = customStyles;

export const AboutWrap = styled.div`
    background:#000;
    .section_wrap{
        position:relative;
        background:linear-gradient(0deg,#5e1530,#152944);
    }
`
export const Skill = styled.div`
    position:relative;
    padding-bottom:40px;
}
`
export const StarsAni = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    bottom:0;
    left:0;
    overflow:hidden;
    .stars{
        position: absolute; width:100%; height: 100%; top:0; left: 0; opacity: 0;
        &.stars-animation{animation:stairs 9s linear infinite;}
        &.stars-animation-two{animation:stairs 9s linear infinite; animation-delay: 3s;}
        &.stars-animation-three{animation:stairs 9s linear infinite; animation-delay: 6s;}
    }
`
export const SkillItems  = styled.div`
    position:relative;
    z-index:10;
    text-align: center; 
    margin:20px auto;
    .skill_list{
        display: flex;
        flex-wrap:wrap;
        li{
            width:25%; 
            height: 210px; 
            padding-bottom: var(--content-pd); 
            cursor: pointer; 
            position: relative;
            .front{
                transform: rotateY(0deg); 
                opacity: 0;
            }
            .back{
                position: absolute; top:0; left: 0;  color:#111; background-color: #fff; transform: rotateY(-180deg); opacity: 0;
            }
            &:hover{
                .front{transform: rotateY(-180deg); opacity: 0;}
                .back{transform: rotateY(0deg); opacity: 1;}
                .back:after{position: absolute; top: -7px; left: -7px; width: 100%; height: 100%; padding: 7px;border-radius: 50%; box-shadow: 0 0 0 4px #fff; content: '';} 
            }
            &>div{
                display: table; 
                width: 210px; 
                height: 210px; 
                border-radius: 50%; 
                font-size: 1.5rem; 
                text-align: center; 
                color:#fff; 
                background: rgba(255,255,255,0.1); 
                ${Transition.sec5}
                span{
                    display: table-cell; 
                    vertical-align: middle;
                }
            }
            @media screen and (max-width: ${MediaWidth.pc}) {
                width:50%;
                &>div{
                    margin:0 auto;
                    span{
                        ${size.ft16}
                    }
                }
                .back{
                    left:27%;
                }
            }
            @media screen and (max-width: ${MediaWidth.tablet}) {
                width:100%;
                height:auto;
                padding-bottom:24px;
                &>div{
                    width:160px;
                    height:160px;
                    margin:0 auto 16px;
                }
                &:hover{
                    .front{
                        transform: rotateY(0deg); 
                    }
                    .back{
                        display:none;
                    }
                }
            }
        }
       
    }
`
export const AboutSec = styled.section`
    text-align:center;
    .title{
        margin-bottom:20px;
        color:#fff;
        ${size.ft28}
        text-align:center;
        text-transform:uppercase;
    }
    @media screen and (max-width: ${MediaWidth.tablet}) {
        .title{
            ${size.ft22}
        }
        ul{
            width:300px;
            li{
                padding:14px;
                 ${size.ft12}
            }
        }
    }
`
export const AboutItems = styled.ul`
    width:450px;
    margin:0 auto;
    padding-bottom:30px;
    li{
        margin-bottom:15px;
        padding:20px 15px;
        border-radius:50px;
        background-color:#fff;
        ${size.ft16}
        text-transform:uppercase;
    }
`
export const SnsLinks = styled.div`
    padding-bottom:20px;
    display:flex;
    justify-content:center;
    gap:14px;
    a{
        position:relative;
        &:hover{
            .tooltip{
                display:block;
            }
        }
    }
    .tstory{
        display:inline-block;
        width:52px;
        height:52px;
    }
    .myvue{
        margin-top:7px;
    }
    .myreact{
        margin-left:-16px;
        img{
            height:100%;
        }
    }
    .tooltip{
        display:none;
        position:absolute;
        top:-42px; 
        left:0;
        width:100px;
        height:14px;
        font-size:13px;
        padding:10px;
        border-radius:6px;
        background-color:#fff;
        &:before{
            content:"";
            position:absolute;
            bottom:-5px;
            left:15%;
            transform: rotate(180deg); 
            border-bottom: 10px solid #fff; 
            z-index:10;
            border-left: 8px solid transparent; border-right: 8px solid transparent;
        }
    }
`
