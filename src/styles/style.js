import { css } from "styled-components";
// Small screens (mobile devices): 0px to around 576px
// Medium screens (tablets): 576px to around 992px
// Large screens (desktops and laptops): 992px and above

export const pagePaddingTop = css`
  padding-top: 60px;
`;

// export const smallPaddingTop = css`
//   @media (max-width: 768px) {
//     padding-top: 80px;
//   }
// `;
export const laptopContainer = css`
  padding: 10% 5%;
  margin-bottom: 10%;
`;

export const borderBottom = css`
  border-bottom: 1px solid ${(props) => props.color || "#d9d9d9"};
`;

export const fontSize = {
  large: "44px",
  medium: "32px",
  regular: "18px",
  small: "16px",
  micro: "14px",
  space: "12px",
};

export const fontWeight = {
  bold: 800,
  semiBold: 600,
  medium: 500,
  regular: 400,
  light: 300,
};

export const palette = {
  text: {
    strong: "#000",
    title: "#222",
    desc: "#444",
  },
  gray: {
    basic: "#d9d9d9",
    light: "#efefef",
  },
  border: {
    card: "#222",
    gray: "#d9d9d9",
  },
};
