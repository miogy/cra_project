import React from "react";
import { styled } from "styled-components";
import { handleScrollToTop } from "../hook/ScrollToTop";

function Tab({ category, setTab, tab }) {
  const handleTabClick = (index, item) => {
    if (item === "SNS") {
      // window.location.href = "https://www.instagram.com/mi_ogy";
      window.open("https://www.instagram.com/mi_ogy", "_blank");
    } else {
      setTab(index);
      handleScrollToTop();
    }
  };

  return (
    <TabWrap>
      <div>
        {category.map((item, i) => {
          return (
            <button
              key={i}
              className={tab === i ? "active" : null}
              onClick={() => {
                handleTabClick(i, item);
              }}
            >
              <span>{item}</span>
            </button>
          );
        })}
      </div>
    </TabWrap>
  );
}

export default Tab;

const TabWrap = styled.div`
  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    button {
      width: 160px;
      height: 42px;
      text-align: center;
      border: 1px solid #000;
      border-radius: 21px;
      font-weight: 800;
      color: #000;
      background-color: rgba(0, 0, 0, 0);
    }
    button:hover {
      cursor: pointer;
      background-color: #000;
      span {
        color: #fff;
      }
    }
  }
  .active {
    background-color: #000;
    span {
      color: #fff;
    }
  }
`;
