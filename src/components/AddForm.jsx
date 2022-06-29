import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addItem, editItem, updateItem } from "../redux/tasksSlice";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Form = styled.form``;
const FormElements = styled.div`
  width: 100%;
`;
const Input = styled.input`
  height: 30px;
  width: 600px;
  border: 1px solid #ccc;
  outline: none;
  border-radius: 5px 0 0 5px;
  font-size: 14px;
`;
const Button = styled.button`
  height: 34px;
  width: 100px;
  border: none;
  border-radius: 0 5px 5px 0;
  background-color: green;
  cursor: pointer;
  color: #fff;
`;
function AddForm() {
  const editItem = useSelector((state) => state.editItem);

  const [taskTitle, setTaskTitle] = useState({
    content: "",
    contentErr: "",
  });
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  //   const saveToLocal = (task) => {
  //     const localTaskList = localStorage.getItem("todolist");
  //     let tasksList = localTaskList ? JSON.parse(localTaskList) : [];
  //     const tasks = [...tasksList, { title: task, isCompleted: true }];
  //     localStorage.setItem("todolist", JSON.stringify(tasks));
  //   };
  const handleSubmit = (e) => {
    e.preventDefault();
    //setTaskTitle({ ...taskTitle, content: taskTitle.content });
    if (taskTitle.content.trim().length === 0) {
      alert("Please enter task title");
      e.target.task.focus();
      return;
    }

    if (isEdit) {
      const updatedItem = {
        ...editItem,
        title: taskTitle.content,
      };
      dispatch(updateItem(updatedItem));
      setIsEdit(false);
    } else {
      const item = {
        id: Math.floor(Math.random() * 100) + 1,
        title: taskTitle.content,
        isCompleted: false,
      };

      dispatch(addItem(item));
    }

    setTaskTitle({ ...taskTitle, content: "" });
  };
  const handelInput = (e) => {
    setTaskTitle({ ...taskTitle, content: e.target.value });
  };

  useEffect(() => {
    setTaskTitle({
      ...taskTitle,
      content: editItem && editItem.title ? editItem.title : "",
    });

    const isItemEditable = editItem && editItem.id ? true : false;
    setIsEdit(isItemEditable);
  }, [editItem]);
  return (
    <Wrapper>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <FormElements>
          <Input
            type="text"
            name="task"
            value={taskTitle.content}
            autoComplete="off"
            onChange={(e) => handelInput(e)}
          />
          <Button>ADD</Button>
        </FormElements>
      </Form>
    </Wrapper>
  );
}

export default AddForm;
