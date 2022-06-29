import React from "react";
import styled from "styled-components";
import AddForm from "./AddForm";
import ItemsList from "./ItemsList";
import Tabs from "./Tabs";
const Wrapper = styled.div`
  margin: auto 0;
  padding: 100px 300px;
`;
const Title = styled.h1`
  font-size: 1rem;
  text-align: center;
  color: #3a3c3d;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
function Layout() {
  return (
    <Wrapper>
      <AddForm />
      <Title>Tasks List</Title>
      <Container>
        <Tabs />
        <ItemsList />
      </Container>
    </Wrapper>
  );
}

export default Layout;
