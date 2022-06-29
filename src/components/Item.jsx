import {
  CheckCircle,
  CheckCircleOutlineOutlined,
  DeleteOutlineOutlined,
  EditOutlined,
} from "@material-ui/icons";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { toggleStatus, editItem, deleteItem } from "../redux/tasksSlice";

const Wrapper = styled.li`
  list-style: none;
  margin-bottom: 10px;
  display: flex;
  align-content: flex-start;
  justify-content: space-between;
`;
const Title = styled.h4``;
const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Action = styled.span`
  font-size: 14px;
  margin-left: 10px;
  cursor: pointer;
  ${({ title }) => title && title === "Edit" && `&:hover { color: orange }`}
  ${({ title }) => title && title === "Done" && `&:hover { color: green }`}
  ${({ title }) => title && title === "Delete" && `&:hover { color: red }`}
  ${({ isDone }) => isDone && `color: green`}
`;

export default function Item({ data }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const handleDeleteItem = (id) => {
    if (window.confirm(`Do you really want to delete?`)) {
      dispatch(deleteItem(id));
    }
  };
  return (
    <Wrapper>
      <Title>{data.title}</Title>
      <Actions>
        <Action
          title="Done"
          isDone={data.isCompleted}
          onClick={() => dispatch(toggleStatus(data.id))}
        >
          {data.isCompleted ? <CheckCircle /> : <CheckCircleOutlineOutlined />}
        </Action>
        <Action title="Edit" onClick={() => dispatch(editItem(data))}>
          <EditOutlined />
        </Action>
        <Action title="Delete" onClick={() => handleDeleteItem(data.id)}>
          <DeleteOutlineOutlined />
        </Action>
      </Actions>
    </Wrapper>
  );
}
