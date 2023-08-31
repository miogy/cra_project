import React from "react";
import { styled } from "styled-components";
import { handleScrollToTop } from "../hook/ScrollToTop";

function Tab({ category, setTab, tab }) {
  return (
    <TabWrap>
      <div>
        {category.map((item, i) => {
          return (
            <button
              key={i}
              className={tab === i ? "active" : null}
              onClick={() => {
                // console.log(i);
                setTab(i);
                handleScrollToTop();
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
