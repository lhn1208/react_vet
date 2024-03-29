import styled from '@emotion/styled';
import {BgStyle,ColorStyle, MediaWidth} from "../common/variable.tsx"
/*Header */
export const HeaderStyle = styled.header`
  position:fixed;
  top:0;
  left:0;
  right:0;
  width:100%;
  padding:50px 0 40px;
  z-index:200;
  .cont_width{
    position:relative;
  }
  .header_inner{
    display:flex;
    align-items:center;
    justify-content:space-between;
  }
  .logo{
    position:absolute;
    top:-6px;
    left:0;
    width:174px;
    height:48px;
    a{
      background-image:url("/images/main/logo.png");
      ${BgStyle.size100};
    }
  }
  .menu{
    display:flex;
    align-items:center;
    gap:40px;
    margin-left:230px;
    a{
      color:#fff;
      font-size:2.2rem;
      font-weight:500;
    }
  }
  .member{
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
    >a{
      width:auto;
      color:${ColorStyle.Navy};
      font-size:1.6rem;
      font-weight:bold;
    }
    .gnb{
      &:before,&:after{
          content:"";
          display:block;
          width:38px;
          height:3px;
          background-color:${ColorStyle.Navy};
          transition:all .2s ease;
      }
      &:after{
        margin-top:4px;
      }
    }
  }
  &.fixed{
    background:#fff;
    border-bottom:1px solid ${ColorStyle.Navy};
    .logo{
      a{
        background-image:url("/images/main/logo_on.png");
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
      top:-20px;
    }
    .member{
      .gnb{
        &:before,&:after{
          background-color:#fff;
        }
      }
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
    .menu, .member :is(.search_form, .link){
      display:none;
    }
  }
`

export const FooterStyle = styled.footer`
  background:#263250;
  .footer_inner{
    padding:50px 0;
  }
`
;