import styled from '@emotion/styled';
import { BgStyle, FontWeight, MediaWidth } from '../common/variable';

export const ServiceWrap=styled.div`
  height:100%;
  overflow:hidden;
  padding-top:180px;
  padding-bottom:100px;
  background-image:url('../images/service_bg.jpg');
  ${BgStyle.sizeCover};
  background-attachment:fixed;
  .inner{
    padding-top:216px;
    width:98%;
    margin:0 auto;
  }
  h2{
    margin-bottom:16rem;
    font-size:6rem;
    color:#fff;
    font-weight:${FontWeight.bold};
  }
  @media (max-width: ${MediaWidth.pc}) {
    .inner{
      padding-top:40px;
      text-align:center;
    }
    h2{
      margin-bottom:10rem;
    }
  }
`
export const ServiceCont=styled.div`
  display:flex;
  color:#fff;
  --mar_bt:4rem;
  .sv_intro{
    flex-basis:50%;
    h3{
      margin-bottom:var(--mar_bt);
      font-size:2.6rem;
      font-weight:normal;
      line-height:1.6;
    }
    .text{
      margin-bottom:var(--mar_bt);
      font-size:1.8rem;
      line-height:2;
    }
    &.center{
      text-align:center;
    }
    &.mt_type{
      margin-top:480px;
    }
    .visual{
      margin-bottom:var(--mar_bt);
      img{
        width:auto;
        height:auto;
      }
    }
  }
  @media (max-width: ${MediaWidth.pc}) {
    flex-direction:column;
    align-items:center;
    word-break:keep-all;
    .sv_intro{
      margin-bottom:40px;
      &.mt_type{
        margin-top:0px;
      }
    }
   
  }
`

;