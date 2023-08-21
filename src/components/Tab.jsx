import React, { useState } from "react";
import { styled } from "styled-components";

function Tab() {
  const [tab, setTab] = useState(0);
  const category = ["Introduction", "Design", "Develop", "Hobby"];

  return (
    <TabWrap>
      <ul>
        {category.map((item, i) => {
          return (
            <li
              key={i}
              onClick={() => {
                // console.log(i);
                setTab(i);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </TabWrap>
  );
}

export default Tab;

const TabWrap = styled.div`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      padding: 10px;
      margin-right: 20px;
      border: 1px solid #000;
      border-radius: 20px;
    }
    li:hover {
      cursor: pointer;
      background-color: #000;
      color: #fff;
    }
  }
`;
