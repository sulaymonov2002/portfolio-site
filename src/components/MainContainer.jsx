import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

export const MainContainer = ({ children, ...props }) => {
  return (
    <Container component="main" {...props}>
      {children}
    </Container>
  );
};
