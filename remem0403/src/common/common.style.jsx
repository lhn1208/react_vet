import styled from '@emotion/styled';
import {MediaWidth, BgStyle} from "./variable.jsx"

export const ContWrap=styled.div`
   position:relative;
   background:#eef8fb;
    @media (max-width: ${MediaWidth.tablet}) {
        width:100%;
    }
`
export const ContWidth=styled.div`
    max-width:1400px;
    margin:0 auto;
    @media (max-width: ${MediaWidth.pc}) {
        width:94vw;
    }
`
export const SearchForm=styled.div`
    position:relative;
    width:52rem;
    .search_input{
        width:100%;
        padding:8px 20px 8px 0;
        font-size:2rem;
        background-color:transparent;   
        border-bottom:2px solid #0c1622;
        box-sizing:border-box;
    }
    .ico_sch{
        --icoSize:34px;
        width:var(--icoSize);
        height:var(--icoSize);
        display:inline-block;
        position:absolute;
        top:50%;
        transform:translateY(-50%);
        right:0;
        margin-top:-3px;
        ${BgStyle.size100};
        background-image:url('/images/ico_search_blue.png');
        text-indent:-9999em;
    }   
    &.round{
        width:24rem;
        .search_input{
            line-height:6rem;
            padding: 0 6rem 0 20px;
            color:#fff;
            border-bottom:none;
            border:2px solid rgba(255,255,255,.5);
            border-radius:50px;
            &::placeholder{color:#fff;}
        }
        .ico_sch{
            margin-top:0;
            background-image:url('/images/ico_search_white.png');
            right:1.8rem;
        }
    }
  @media (max-width: ${MediaWidth.tablet}) {
    .ico_sch{
      --icoSize:28px;
    }
    &.round{
      width:20rem;
    }
  }
`
export const PcBlock=styled.span`
    display:block;
    @media (max-width: ${MediaWidth.tablet}) {
        display:inline;
    }
`
export const MbBlock=styled.span`
    @media (max-width: ${MediaWidth.tablet}) {
        display:block;
    }
`
export const Blind = styled.span`
  display:block;
  overflow:hidden;
  line-height:0;
  text-indent:-9999px
`
export const BtnClose = styled.button`
  position:absolute;
  &:before,&:after{
    content:"";
    display:block;
    background-color:#fff;
  }
  &:before{
    transform: rotate(45deg);
  }
  &:after{
    margin-top:-12px;
    transform:rotate(-45deg);
  }
`

;
