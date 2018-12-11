import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";

import LabelList from "./LabelList";

const Form = styled.form({}, props => ({}));

const mainDiv = styled.div({}, props => ({
  width: props.width
}));

const Header = styled.header({
  fontSize: 25
});
const ButtonHolder = styled.button({
  position: "relative",
  border: "none",
  display: "block",
  width: "100%",
  textAlign: "left",
  cursor: "pointer",
  padding: "5px 8px",
  backgroundCoor: "#dee0e2"
});

const ButtonText = styled.div({
  fontSize: "16px",
  lineHeight: "1.25",
  marginRight: "40px",
  fontWeight: "bold",
  paddingTop: "5px",
  paddingBottom: "5px"
});

const Button = ({ children }) => (
  <ButtonHolder>
    <ButtonText>{children}</ButtonText>
  </ButtonHolder>
);

const Container = styled.div(
  {
    maxHeight: "none",
    height: "160px",
    border: "5px solid #dee0e2",
    position: "relative",
    backGroundColor: "white",
    overflowY: "auto",
    overflowX: "hidden"
  },
  props => ({
    height: props.height
  })
);

const Filter = props => (
  <div>
    <Form>
      <Header>Filter Results</Header>
      <mainDiv>
        <Button>{props.header}</Button>
        <Container height={props.height}>
          <LabelList list={props.list} />
        </Container>
      </mainDiv>
    </Form>
  </div>
);

export default Filter;
