import { css } from "@emotion/react";

export const MediaWidth={
    maxWidth:'1440px',
    pc:'1280px',
    tablet:'768px',
    mobile:'480px'
}

export const ColorStyle={
    Navy:"#203c82",
    BlackNavy:"#0c1622",
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
`;
