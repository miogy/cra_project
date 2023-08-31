import React from "react";
import { styled } from "styled-components";

function Footer() {
  return (
    <FooterWrap>
      <div className="email footer_bottom">
        <small>© 2023. 양미옥</small>
        <small>
          <a href="mailto:jjangrl87@gmail.com">jjangrl87@gmail.com</a>
        </small>
      </div>
    </FooterWrap>
  );
}

export default Footer;

const FooterWrap = styled.footer`
  width: 100%;
  position: absolute;
  bottom: 0;
  /* padding: 0 5%; */
  background-color: #fff;
  .footer_bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      svg {
        width: 24px;
        margin: 0 20px;
      }
    }
  }

  .email {
    padding-top: 30px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    small {
      margin-bottom: 10px;
      a {
        color: #000;
        :hover {
          cursor: pointer;
        }
      }
    }
  }
`;
