import styled from '@emotion/styled';
import {MediaWidth, ColorStyle, BgStyle} from "../common/variable.jsx"
export const MainWrap = styled.main`
   
`
export const MainHeader=styled.div`
   background:url('/images/main/main_top_bg.jpg') no-repeat
`
export const HeaderInner=styled.div`
   padding-top:215px;
   padding-bottom:180px;
   @media (max-width: ${MediaWidth.tablet}){
      padding-top:97px;
      padding-bottom:60px;
   }
`
export const TopTitle=styled.div`
   position:absolute;
   top:417px;
   left:50%;
   margin-left:-740px;
   z-index:110;
   .text{
      line-height:1.6;
      color:#fff;
      font-size:2rem;
      word-break:keep-all;
   }
   .letter{
      margin:3rem 0;
   }
   @media (max-width: ${MediaWidth.maxWidth}) {
    margin-left:0;
    left:4vw;
   }
   @media (max-width: ${MediaWidth.tablet}) {
      position:relative;
      top:auto;
      left:auto;
      margin-left:0;
      padding:20px 0;
      width:100%;
      overflow:hidden;
      box-sizing:border-box;
      .letter{
         width:100%;
      }
   }
`
export const MainSlide=styled.div`
 margin-left:385px;
 .swiper-slide{
   height:634px;
   background-size:cover;
   img{
    width:auto;
   }
 }
 .swiper-button-next, .swiper-button-prev{
   top:auto;
   bottom:60px;
   left:auto;
   width:42px;
   height:12px;
   background-repeat:no-repeat;
   background:transparent;
   z-index:120;
   text-indent:-9999em;
   &:after{
     display:none;
   }
 }
 .swiper-button-next{
   right:80px;
   background-image:url('/images/main/main_arr_next.png');
 }
 .swiper-button-prev{
   right:150px;
   background-image:url('/images/main/main_arr_prev.png');
 }
 @media (max-width: ${MediaWidth.pc}){
  margin-right:-2vw;
 }
@media (max-width: ${MediaWidth.tablet}){
  margin-left:6%;
  padding-bottom:40px;
  .swiper {
    overflow:initial;
  }
  .swiper-slide{
    height:266px;
    img{
      width:100%;
    }
  }
  .swiper-button-next, .swiper-button-prev{
    bottom:-30px;
  }
  .swiper-button-next{
    right:20px;
  }
  .swiper-button-prev{{
    right:84px;
  }
}
`
export const ContLetter=styled.p`
   text-align:center;
   font-size:14rem;
   color:#9cb0b8;
   text-transform:uppercase;
   letter-spacing:-.06em;
   @media screen and (max-width: ${MediaWidth.pc}) {
      font-size:8rem;
   }
   @media (max-width: ${MediaWidth.tablet}) {
      display:none;
   }
`

export const MemorialWrap = styled.div`
   padding-bottom:60px;
   h2.title{
      margin-bottom:32px;
      padding-top:84px;
      font-size:5rem;
      font-weight:bold;
   }
   .cont_top{
      margin-bottom:40px;
   }
   .cont_top{
      p{ 
         line-height:1.6;
         color:#4a6688;
         font-size:1.8rem;
         margin-bottom:1.6rem;
      }
      .btn{
         display:block;
         width:12.6rem;
         height:4rem;
         font-size:1.6rem;
         border:1px solid ${ColorStyle.BlackNavy};
         border-radius:50px;
         color:${ColorStyle.BlackNavy};
      }
   }
  @media (max-width: ${MediaWidth.tablet}) {
    padding:60px 0;
    h2.title{
      padding:0
    }
  }
`
export const MemorialSlide = styled.div`
  .swiper{
    padding-top:30px;
    padding-bottom:40px;
    --swiper-navigation-size:20px;
    --swiper-navigation-color:${ColorStyle.BlackNavy};
    --swiper-theme-color:${ColorStyle.BlackNavy};
  } 
  .swiper-slide{
      transform:scale(0.8);
      img{
         object-fit:cover;
      }
   }
   .swiper-slide-active{
      margin-top:-66px;
      transform:scale(1);
   }
   .swiper-button-prev, .swiper-button-next{
      position:absolute; 
      top:auto;
      bottom:0;
      background:none;
      &:before{
        position:absolute;
        margin-top:-3px;
        font-size:1.6rem;
      }
   }
   .swiper-button-prev:before{
      content:"PREV";
      left:24px;
   }
   .swiper-button-next:before{
      content:"NEXT";
      right:24px;
   }
   .swiper-pagination{
      top:auto;
      bottom:0;
      width:600px;
      left:50%;
      transform:translateX(-50%);
   }
   .img_area{
    display:block;
    position:relative;
    overflow:hidden;
    &:before{
       content:"";
       display:block;
       position:absolute;
       top:0;
       left:0;
       right:0;
       bottom:0;
       background:rgba(0,0,0,.2);
    }  }

   .info{
      margin-top:40px;
      dt{
        font-size:2.8rem;
        ${Font.NotoSerif};
      }
      dd{
        font-size:1.8rem;
        color:#7c7c7c;
        &.date{
            margin:16px 0;
            font-size:2.2rem;
            ${Font.NotoSerif};
        }
        .badge{
            display:inline-block;
            width:56px;
            line-height:30px;
            margin-right:14px;
            text-align:center;
            border:1px solid ${ColorStyle.BlackNavy};
            border-radius:50px;
            color:${ColorStyle.BlackNavy};
        }
        & + dd{
            margin-top:6px;
        }
    }
  }
  @media (max-width: ${MediaWidth.tablet}) {
    .img_area{
      height:304px;
    }
    .swiper{
      padding-top:0;
    }
    .swiper-slide-active{
      margin-top:0;
    }
    .swiper-button-prev, .swiper-button-next{
      display:none;
    }
    .swiper-pagination{
      width:80%;
    }
  }
`
export const ServiceSec =  styled.section`
   padding:270px 0 140px;
   background-image:url('/images/main/bg_cont_service.png');
   ${BgStyle.size100}
   @media (max-width: ${MediaWidth.tablet}) {
    padding:60px 0 80px;
    background-image:url('/images/main/bg_mb_cont_service.png');
    background-position:center;
  }
`
export const ServiceStyle = styled.ul`
   display:grid;
   grid-template-columns: repeat(4, 1fr);
   gap:60px;
   li{
      height:394px;
      text-align:center;
      ${BgStyle.size100}
      &:hover{
        transform:scale(1.03);
        transition:all .2s ease-in-out;
      }
      a{
        display:flex;
        flex-direction:column;
        justify-content:center;
        gap:20px;
        color:#fff;
      }
      i{
        display:block;
        width:25%;
        height:67px;
        margin:0 auto;
        img{
          height:auto;
        }
      }
      strong{
        display:block;
        font-size:2.6rem;
      }
      p{
        width: 60%;
        margin: 0 auto;
        word-break: keep-all;
        line-height: 1.6;
        font-size: 1.6rem;
      }
      &.sv1{
        background-image:url('/images/main/bg_service1.png');
      }
      &.sv2{
        background-image:url('/images/main/bg_service2.png');
      }
      &.sv3{
        background-image:url('/images/main/bg_service3.png');
      }
      &.sv4{
        background-image:url('/images/main/bg_service4.png');
      }
   }
   @media (max-width: ${MediaWidth.pc}) {
      grid-template-columns: repeat(2, 1fr);
      li{
        width:300px;
        height:390px;
        margin:0 auto;  
      }
   }
   
   @media (max-width: ${MediaWidth.tablet}) {
      grid-template-columns: repeat(1, 1fr);
      align-items:center;
      gap:40px;
      li{
        a{
          gap:14px;
        }
        i{
          height:44px;
          margin:0 auto 24px;
        }
      }
   }

`
;