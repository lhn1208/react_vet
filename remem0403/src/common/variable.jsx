import { css } from "@emotion/react";

export const MediaWidth={
    maxWidth:'1440px',
    pc:'1280px',
    tablet:'768px',
    mobile:'480px'
}

export const ColorStyle={
    blue:"#f6fbfe",
    Navy:"#203c82",
    BlackNavy:"#192b57",
    GreyTxt:"#666"
}
export const FontWeight={
  thin:300,
  midium:400,
  mdBold:500,
  bold:700
}
export const BgStyle ={
  size100 : css`
    background-repeat:no-repeat;
    background-size:100%;
  `,
  sizeCover : css`
    background-repeat:no-repeat;
    background-size:cover;
  `
} 
export const WordBreak = css`
  word-break: keep-all;
`
export const NotoSerif=css`
  font-family:NotoSerifKR;
`
export const Font={
  NotoSans: css`
  font-family:Noto Sans KR, sans-serif;
  `,
  NotoSerif: css`
  font-family:NotoSerifKR;
  `
}

export const AniTrans={
  ease4s:css`
    transition:all .4s ease;
  `,
  esaeInOut2s:css`
    transition:all .2s ease-in-out;
  `
}
