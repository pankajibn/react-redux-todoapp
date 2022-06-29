import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addFilter } from "../redux/tasksSlice";
const TabWrapper = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: flex-start;
  padding: 0px 10px;
  height: 50px;
`;
const TabItem = styled.li`
  float: left;
  height: 36px;
  line-height: 36px;
  margin: 0 2px -1px 0;
  border: 1px solid #dae0e7;
  background: #f9f9f9;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  width: 100px;
  cursor: pointer;
  text-align: center;
  &:hover {
    color: green;
  }
  ${({ active }) =>
    active &&
    `
  color:green;
  background: #fff;
  border-bottom:none;
  `}
`;
function Tabs() {
  const tabsList = ["All", "Todo", "Completed"];
  const [activeTab, setActiveTab] = useState(tabsList[0]);
  const dispatch = useDispatch();
  const handleTab = (tab) => {
    setActiveTab(tab);
    dispatch(addFilter(tab));
  };
  return (
    <TabWrapper>
      {tabsList &&
        tabsList.map((tab) => (
          <TabItem
            active={tab === activeTab}
            onClick={() => handleTab(tab)}
            key={tab}
          >
            {tab}
          </TabItem>
        ))}
    </TabWrapper>
  );
}

export default Tabs;
