import styled from '@emotion/styled';
import {AniTrans, BgStyle,ColorStyle, MediaWidth, FontWeight} from "../common/variable.jsx"
/*Header */
export const HeaderStyle = styled.header`
  position:fixed;
  top:0;
  left:0;
  right:0;
  width:100%;
  padding:50px 0 40px;
  z-index:202;
  box-sizing:border-box;
  .header_inner{
    display:flex;
    position:relative;
    align-items:center;
    justify-content:space-between;
  }
  .logo{
    position:absolute;
    top:-7px;
    left:-30px;
    width:174px;
    height:48px;
    a{
      background-image:url("../images/main/logo.png");
      ${BgStyle.size100};
    }
  }
  .mb_menu_bg{
   display:none;
  }

  &.fixed{
    background:#fff;
    border-bottom:1px solid ${ColorStyle.Navy};
    .logo{
      a{
        background-image:url("../images/main/logo_on.png");
      }
    }
    .menu{
      a{
        color:${ColorStyle.Navy};
      }
    }
    .member{
      .search_form{
        .ico_sch{
          background-image:url('/images/ico_search_blue.png');
        }
      }
    }
  }
  @media (max-width: ${MediaWidth.pc}) {
    padding:30px 0;
    .logo{
      top:-17px;
    }
    &.fixed{
      .member{
        .gnb{
          &:before,&:after{
            background-color:${ColorStyle.Navy};
          }
        }
      }
    }
    .member .search_form{
      display:none;
    }
    .header_inner.is-active{
      .mb_menu_bg{
        display:block;
        position:fixed;
        top:0;
        left:auto;
        right:0;
        width:50%;
        height:100%;
        background:#fff;
      }
      .menu{
        right:0;
        a{
          display:block;
          padding-bottom:10px;
          min-width:130px;
          color:${ColorStyle.Navy};
          border-bottom:1px solid ${ColorStyle.Navy};
        }
      }
      .member{
        ul{
          right:0;
          a{
            position:relative;
            color:${ColorStyle.Navy};;
            z-index:50;
          }
        }
      }
      .gnb{
        &:before,&:after{
          background-color:${ColorStyle.Navy};
        }
        &:before{
          transform:rotate(45deg);
        }
        &:after{
          transform:translateY(-5px) rotate(-45deg)
        }
      }
    }
  }
  &.contHeader{ 
    background-image:url("../images/bg_sub_visual.jpg");
    .member{
      ul{
        a{
          color:#fff;
        }
      }
    }
    &.fixed{
      background-image: url(/images/main/logo.png);
      .member{
        ul{
          a{
            color:${ColorStyle.Navy};
          }
        }
      }
    }
  }
`
export const Menu = styled.ul`
  display:flex;
  align-items:center;
  gap:40px;
  margin-left:194px; 
  a{
    color:#fff;
    font-size:2.2rem;
    font-weight:500;
  }
  @media (max-width: ${MediaWidth.pc}) {
    position:fixed;
    display:flex;
    top:210px;
    right:-100%;
    width:50%;
    padding:0 26px;
    z-index:50;
    flex-direction:column;
    gap:10px;
    align-items:start;
    box-sizing:border-box;
    ${AniTrans.ease4s};
  }
`
export const Member = styled.div`
  display:flex;
  align-items:center;
  gap:26px;
  .search_form{
    width:200px;
    .search_input{
      color: #8893aa;
      font-size:1.6rem;
      border-bottom:1px solid #8893aa;
    }
    .ico_sch{
      background-image:url('/images/ico_search_white.png');
    }
  }
  ul{
    display:flex;
    gap:26px;
    
    a{
      width:auto;
      color:${ColorStyle.Navy};
      font-size:1.6rem;
      font-weight:bold;
    }
  }
  .gnb{
    z-index:50;
    display:none;
    &:before,&:after{
        content:"";
        display:block;
        width:38px;
        height:3px;
        background-color:${ColorStyle.Navy};
        ${AniTrans.ease4s}
    }
    &:after{
      margin-top:4px;
    }
  }
  @media (max-width: ${MediaWidth.pc}) {
  ul{
    position:absolute;
    top:0;
    right:-100%;
    padding:0 26px;
    width:50%;
    box-sizing:border-box;
    ${AniTrans.ease4s};
  }
  .gnb{
      display:block;
      &:before,&:after{
        background-color:#fff;
      }
    }
  }

`
export const FooterStyle = styled.footer`
  background:#263250;
  --footer-color:#667292;
  .footer_inner{
    position:relative;
    padding:50px 0;
    color:var(--footer-color);
    font-size:1.5rem;
  }
  .trem_list{
    display:flex;
    li{
      &+li:before{
        content:"";
        display:inline-block;
        width:1px;
        height:12px;
        margin:0 10px;
        background-color:#fff;
      }
      &>a{
        display:inline;
        color:#fff;
        font-size:1.6rem;
      }
    }
    
  }
  .info{
    margin:20px 0 40px;
    address,span{
      display:inline-block;
      line-height:1.4;
      &:after{
        content:"";
        display:inline-block;
        width:1px;
        height:10px;
        margin:0 10px;
        background-color:var(--footer-color);
      }
      &.none_bar:before,&:last-of-type:after{
        display:none;
      }
    }
  }
  .sns_links{
    position:absolute;
    top:50px;
    right:0;
    a{
      width:4.8rem;
      height:4.8rem;
      margin:0 6px;
    }
  }
  .footer_logo{
    width:100px;
    height:66px;
  }
  @media (max-width: ${MediaWidth.pc}) {
    .info{
      address,span{
        display:block;
        &:after{
          display:none;
        }
      }
    }
  }
 
`
export const RightBanner = styled.div`
   position:fixed;
   right:60px;
   bottom:40px;
   z-index:200;
   a{
      display:block;
      width:80px;
      height:80px;
      line-height:77px;
      margin-bottom:20px;
      border-radius:50%;
      color:#fff;
      font-size:1.8rem;
      font-weight:${FontWeight.bold}; 
      text-align:center;
      background-color:#192b57;
      &.kakao{
        letter-spacing:-0.06em;
        color:#192b57;
        background-color:#fbcc34;
      }
   }
   @media (max-width: ${MediaWidth.tablet}) {
      right:20px;
   }
`
;