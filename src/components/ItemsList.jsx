import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Item from "./Item";
const ItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  width: 100%;
`;
const TodoItemsList = styled.ul`
  width: 100%;
`;

function ItemsList() {
  const items = useSelector((state) => state.items);
  const filterTab = useSelector((state) => state.filter);
  const filterItems = (items, type) => {
    switch (type) {
      case "Todo":
        return items ? items.filter((item) => !item.isCompleted) : [];
      case "Completed":
        return items ? items.filter((item) => item.isCompleted) : [];
      default:
        return items;
    }
  };
  const itemsList = filterItems(items, filterTab);
  return (
    <ItemsWrapper>
      <TodoItemsList>
        {itemsList && itemsList.length > 0
          ? itemsList.map((item, i) => <Item data={item} key={i} />)
          : "No records found."}
      </TodoItemsList>
    </ItemsWrapper>
  );
}

export default ItemsList;
