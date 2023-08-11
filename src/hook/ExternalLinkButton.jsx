import React from "react";
import { styled } from "styled-components";

function ExternalLinkButton({ link, icon, components }) {
  const handleButtonClick = () => {
    // window.location.href = link;
    window.open(link, "_blank"); //새창띄우기
  };

  return (
    <>
      {components ? (
        <InfoBtn components type="button" onClick={handleButtonClick}>
          {icon}
        </InfoBtn>
      ) : (
        <InfoBtn type="button" onClick={handleButtonClick}>
          {icon}
        </InfoBtn>
      )}
    </>
  );
}

export default ExternalLinkButton;

const InfoBtn = styled.button`
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  /* font-size: 56px; */
  font-size: ${(props) => (props.components ? "30px" : "56px")};
  font-weight: 800;
  /* border: 1px solid red; */
  :hover {
    color: gray;
  }
`;
