import styled from '@emotion/styled';
import {AniTrans, ColorStyle, MediaWidth, NotoSerif, FontWeight, BgStyle, Font} from "../common/variable.jsx"
export const ObiContentStyle = styled.div`
    padding:180px 0 80px;
    background-color:${ColorStyle.blue};
    .cont_header{
        background:navy;
    }
    *{
        ${AniTrans.ease4s};
     }

`
export const Title = styled.h2`
    margin-bottom:4rem;
    font-size:3rem;
    font-weight:${FontWeight.bold};
    ${NotoSerif};
`
export const ButtonStyle=styled.button`
    --hover-opacity:.8;
    width:180px;
    line-height:50px;
    color:#fff;
    font-size:2rem;
    border-radius:50px;
    background-color:${ColorStyle.BlackNavy};
    ${NotoSerif};
    &.minSize{
        width:120px;
    }
    &.yellow{
        background-color:#eca316;
        &:hover{
            background-color:rgba(236, 163, 22, var(--hover-opacity));
        }
    }
    &:hover{
        background-color:rgba(25, 43, 87, var(--hover-opacity));
        ${AniTrans.esaeInOut2s};
    }
`
export const ContTop=styled.div`
    display:flex;
    justify-content:space-between;
    margin-bottom:30px;
    .text{
        color:#9da7bb;
        line-height:1.6;
        font-size:1.8rem;
    }
    .d_flex{
        display:flex;
        gap:60px;
    }
    .search_form{
      .ico_sch{
        margin-top:-10px;
      }
    }
    @media (max-width: ${MediaWidth.pc}) {
        flex-direction:column;
        column-gap:20px;
    }
`
export const ContGrid=styled.ul`
    display:grid;
    grid-template-columns: repeat(3, 33.3%);
    row-gap:6rem;
    column-gap:1.4rem;
    li{
        width:330px;
        text-align:center;
        figure{
            width:100%;
            height:400px;
            margin-bottom:20px;
            img{
                object-fit:cover;
            }
        }
        figcaption{
            margin-bottom:20px;
            strong{
                display:block;
                margin-bottom:6px;
                font-size:2.6rem;
                font-weight:${FontWeight.midium};
            }
            .date{
                font-size:1.8rem;
                color:${ColorStyle.grey};
                font-weight:${FontWeight.thin};
            }
        }
        button{
            margin:0 auto;
        }
    }

    @media (max-width: ${MediaWidth.pc}) {
        grid-template-columns:repeat(2,1fr);
        grid-column-gap:6%;
        li{
            width:100%;
            figure{
                height:300px;
            }
        }
    }
    @media (max-width: ${MediaWidth.mobile}) {
        li{
            figure{
                height:186px;
            }
        }
    }
`
export const HospitalInfo = styled.ul`
    border-top:1px solid #ccc;
    margin-top:20px;
    li{
        &:first-of-type{
            margin-top:10px;
        }
        display:table;
        font-size:1.6rem;
        line-height:1.6;
        em{
            display:table-cell;
            width:20%;
            font-weight:${FontWeight.bold};
        }
        .val{
            display:inline-block;
            width:80%;
            text-align:left;
        }
    }

`

export const ViewWrap = styled.div`
    background-color:${ColorStyle.blue};
    padding:120px 0 80px;
    @media (max-width: ${MediaWidth.pc}) {
        padding:72px 0 80px;
    }
`
export const ViewTop = styled.div`
   position:relative;
   height:480px;
   display:flex;
   justify-content:center;
   align-items:center;
   background-image:url('../images/bg_memorial.png');
   ${BgStyle.cover};
   background-position:50% 100%;
   @media (max-width: ${MediaWidth.tablet}) {
      height:260px;
      background-image:url('../images/bg_memorial_mb.png');
      
   }  
   
`
export const ViewTopTxt = styled.div`
  text-align:center;
  h2{
    font-size:3.8rem;
  }
  .desc{
    display:block;
    margin-top:4rem;
    font-size:1.6rem;
    color:#9da7bb;
  }
  @media (max-width: ${MediaWidth.tablet}) {
    h2{
      font-size:2.4rem;
      line-height:1.6;
    }
  }

`
export const ViewCont = styled.div`
  .funeral_info{
    margin-bottom:60px;
    padding:40px 50px;
    background-color:#f9f9f9;
    font-size:1.6rem;
    .text{
      color:${ColorStyle.GreyTxt};
    }
    ul{
      li{
        display:table;
        margin-bottom:3rem;
        font-size:1.6rem;
        .cell{
          display:table-cell;
          vertical-align:middle;
        }
        strong{
          width:12rem;
          font-size:1.8rem;
        }
        .btn_way{
          min-width:9rem;
          margin-left:1.4rem;
          line-height:3rem;
          background-color:${ColorStyle.GreyTxt};
          color:#fff;
          border-radius:10px;
        }
      } 
    }
    .message{
      padding-top:3.6rem;
      text-align:center;
      border-top:1px solid #ccc;
      strong{
        display:block;
        margin-bottom:3.4rem;
        font-size:2.4rem;
      }
    }
  }
  .repSentence{
    padding-bottom:80px;
    font-size:2.4rem;
    text-align:center;
    word-break:keep-all;
    line-height:1.4;
    color:${ColorStyle.GreyTxt};
    ${Font.NotoSerif};
  }
  .tabContWrap{
    margin-top:40px;
  }
  @media (max-width: ${MediaWidth.tablet}) {
    .funeral_info{
      padding:20px;
      width:100%;
    }
  }
`
export const PortraitStyle= styled.div`
  width:260px;
  height:362px;
  position:absolute;
  left:50%;
  transform:translateX(-50%);
  bottom:-28px;
  img{
    object-fit:cover
  }
  
`;
export const InfoStyle  = styled.div`
  padding:60px 0;
  text-align:center;
   h2{
      margin-bottom:1.5rem;
      font-size:3.6rem; 
      color:#0c1622;
   }
   .date{
    display:block;
      margin:2rem 0 2.8rem;
      font-size:2rem;
   }
   button{
    display:inline-block;
    position:relative;
    padding-left:26px;
    color:${ColorStyle.Navy};
    font-size:2rem;
    &:before{
      content:"";
      width:2.2rem;
      height:2.2rem;
      position:absolute;
      top:6px;
      left:0;
      background-image:url('../images/ico_send.svg');
      ${BgStyle.size100};
    }
   }
`

export const TabHeaderStyle = styled.ul`
  display:flex; 
  li{
    border-top:2px solid ${ColorStyle.Navy};
    background-color:${ColorStyle.Navy};
    flex-basis:33.3%;
    height:7rem;
    button{
      display:inline-block;
      width:100%;
      height:100%;
      color:#fff;
      font-size:2.2rem;
    }
    &.on{
      background-color:#fff;
      button{
        color:${ColorStyle.Navy};
      }
    }
   }
   @media (max-width: ${MediaWidth.tablet}) {
    li{
      height:5.4rem;
      button{
        font-size:1.6rem;
      }
    }
   }
`
export const TabStyle = styled.div`
   font-size:1.8rem;
   .tab_content{
      padding-top:20px;
   }
   .location{
      display:table;
      .cell{
        display:table-cell;
      }
      li{
        margin-bottom:2rem;
        strong{
          width:10rem;
        }
        .text{
          color:${ColorStyle.GreyTxt};
        }
      }
   }
   .memorial{
      text-align:center;
      font-size:3rem;
      ${Font.NotoSerif};
      font-weight:${FontWeight.bold};
      h2{
        margin-bottom:4rem;
      }
      .text{
        margin-bottom:4rem;
        font-size:1.8rem;
        color:${ColorStyle.GreyTxt};
      }
      .video_area{
        position:relative;
        width:960px;
        margin:0 auto;
        video{
          width:100%;
        }
        button{
          position:absolute;
          top:0;
          left:0;
          width:100%;
          height:100%;
          background:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='135' height='135' fill='none'%3E%3Cpath stroke='%23fff' stroke-linejoin='round' stroke-width='2' d='M134 67.504c0 36.457-29.773 66.012-66.5 66.012-36.727 0-66.5-29.555-66.5-66.012C1 31.046 30.773 1.49 67.5 1.49c36.727 0 66.5 29.555 66.5 66.013Z'/%3E%3Cpath stroke='%23fff' stroke-linejoin='round' stroke-width='2' d='M54.381 93.999V42.805l36.19 25.597-36.19 25.597Z'/%3E%3C/svg%3E") no-repeat 50% 50%;
          cursor:pointer;
        }
      }
      &.album{
        ul{
          display:grid;
          grid-template-columns: repeat(3, 1fr);
          gap:20px;
          justify-content:center;
          li{
            a{
              display:block;
              border:1px solid #ccc;
              background-color:#fff;
            }
            .img{
              display:block;
              position:relative;
              height:234px;
              overflow:hidden;
              img{
                object-fit:cover;
              }
            }
            .info{
              padding:12px 2.4rem;
              ${Font.NotoSerif};
              text-align:left;
              span{
                color:#9da7bb;
                font-size:1.4rem;
              }
            }
          }
        }
      }
   }
   @media (max-width: ${MediaWidth.tablet}) {
    .memorial{
      .video_area{
        width:100%;
      }
      &.album{
        ul{
          grid-template-columns: repeat(2, 1fr);
        }
      }
    }
   }
  
`
export const PreHistory = styled.div`
  padding:8rem;
  display:flex;
  align-items:center;
  gap:90px;
  font-size:1.6rem;
  figure{
      flex:1;
      img{
        object-fit:cover;
      }
  }
  figcaption{
    flex:2;
    color:${ColorStyle.GreyTxt};
    .title{
      margin-bottom:2rem;
      line-height:1.4;
      color:#000;
      font-size:3rem;
      word-break:keep-all;
    }
    .text_area{
      margin-top:2rem;
      padding-top:2rem;
      border-top:1px solid #ccc;
      p{
        line-height:1.4;
      }
    }
  }
  .btn_more{
    width:130px;
    height:5rem;
    margin-top:2rem;
    font-size:1.6rem;
    border-radius:50px;
    border:1px solid #192b57;
  }
  @media (max-width: ${MediaWidth.tablet}) {
    flex-direction:column;
    text-align:center;
    gap:6rem;
  }
`
export const RegisterForm=styled.div`
  --pd-col:2rem;
  --bd-rd:.5rem;
  margin-bottom:40px;
  font-size:1.8rem;
  .row{
    margin-bottom:10px;
  }
  .form{
    display:block;
    width:100%;
    margin-bottom:10px;
    padding:1rem var(--pd-col);
    border-radius:var(--bd-rd);
    border:1px solid #ced5e4;
    box-sizing:border-box;
    font-size:1.8rem;
    background:#fff;
  }
  .form:::placeholder {
    color: #8893aa;
  }
  .select{
    height:4.6rem; 
  }
  textarea{
    height:260px;
  }
  .input_row{
    display:flex;
    input[type='text']{
      width:50%;
      &:first-of-type{
        border-top-right-radius:0;
        border-bottom-right-radius:0;
      }
      &:last-of-type{
        border-top-left-radius:0;
        border-bottom-left-radius:0;
        border-left:none;
      }
    }
  }
  .register_btn{
    padding:30px 0;
    text-align:center;
    button{
      padding:0 20px;
      font-size:2rem;
      line-height:5rem;
      border-radius:50px;
      color:#fff;
      background-color:${ColorStyle.Navy};
      &:hover{
        background-color:rgba(25, 43, 87,.8);
        ${AniTrans.esaeInOut2s};
      }
    }
    .switch{
      vertical-align:middle;
      margin:-5px 12px 0 7px;
    }
  }
  
`
export const ImgList = styled.ul`
  display:flex;
  gap:6px;
  li{
    position:relative;
    width:97px;
    height:68px;
    &.movie{
      &:after{
        content:"";
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        width:36px;
        height:36px;
        background:url('../images/btn_play.png');
        ${BgStyle.size100};
      }
    }
  }
`
export const FileBox = styled.div`
  --pd-col:2rem;
  --bd-rd:.5rem;
  label{
    display:block;
    width:100%;
    height:46px;
    padding:1.2rem 2rem;
    color:${ColorStyle.Navy};
    background-color:#edf1f8;
    border:1px solid #bbc4d7;
    border-radius:var(--bd-rd);
    box-sizing:border-box;
    cursor:pointer;
  }
  .fileNone{
    position:absolute;
    top:0;
    left:0;
    width:0;
    height:0;
    line-height:0;
    overflow:hidden;
    border:0;
  }
  .file_list{
    padding:2rem var(--pd-col);
    background:#f5f5f5;
    border-radius:var(--bd-rd);
    li{
      &:before{
        content:"";
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background-color:rgba(0, 0, 0, 0.3);
      }
    }
    .btn_close{
      top:4px;
      right:4px;
      z-index:10;
      &:before,&:after{
        width:1px;
        height:12px;
      }
      &:after{
        margin-top:-12px;
      }
    }
  }
 
`
export const Switch = styled.span`
  --switch-width:38px;
  --switch-height:18px;
  --round-size:22px;
  --base-color:#ccc;
  --checked-color:${ColorStyle.Navy};
  display: inline-block; position: relative; width: var(--switch-width); height: var(--switch-height);
  input[type="checkbox"]{display: none;}
  .checkbox+label:before{
    content: ""; 
    display: block;  
    width: var(--round-size); 
    height: var(--round-size); 
    position: absolute; 
    left: -3px; 
    top:-3px; 
    background: #fff; 
    border-radius:50%; 
    transition:all 0.2s ease;
    border:1px solid #ccc;
  }
  .checkbox+label{display: inline-block; width: 100%; height: 100%; background-color: var(--base-color); border-radius: 10px;}
  .checkbox:checked+label{background-color: var(--checked-color);}
  .checkbox:checked+label::before{left:16px}
`
export const CommendForm=styled.div`
  .commend_box{
      border-top:2px solid ${ColorStyle.Navy};
  }
  li{
    display:flex;
    gap:10px;
    position:relative;
    padding:14px 0;
    border-bottom:1px solid #dfe4ee;
    font-size:1.8rem;
    letter-spacing:-0.04em;
    strong{
      position:relative;
      min-width:7%;
      color: ${ColorStyle.GreyTxt};
      &:after{
        content:"";
        width:1px;
        height:16px;
        position:absolute;
        top:0;
        right:-6px;
        background-color:${ColorStyle.Navy};
      }
    }
    .text_area{
      padding:0 20px;
      padding-right:40px;
    }
    .btn_close{
      top:12px; 
      right:0;
      &:before,&:after{
        width:2px;
        height:18px;
        background-color:#666;
      }
      :after{
        margin-top:-18px;
      }
    }
  }
  @media (max-width: ${MediaWidth.tablet}) {
    li{
      flex-direction:column;
      strong{
        &:after{
          display:none;
        }
      }
      .text_area{
        padding:0;
      }
    }
  }
`
export const MemorialCont =styled.section`
  padding-bottom:40px;
  background:#fff;
`
;