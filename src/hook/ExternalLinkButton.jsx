import React from "react";
import { styled } from "styled-components";

function ExternalLinkButton({ link, icon }) {
  const handleButtonClick = () => {
    // window.location.href = link;
    window.open(link, "_blank"); //새창띄우기
  };

  return (
    <InfoBtn type="button" onClick={handleButtonClick}>
      {icon}
    </InfoBtn>
  );
}

export default ExternalLinkButton;

const InfoBtn = styled.button`
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  font-size: 56px;
  font-weight: 800;
  :hover {
    color: gray;
  }
`;
