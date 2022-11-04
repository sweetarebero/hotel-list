import * as React from "react";
import { Container } from "reactstrap";
import Header from "../Header/Header";
import Hotels from "../Hotels/Hotels";

import "./Layout.scss";

interface Props {
  [key: string]: any;
}

const Layout = (props: Props) => {
  return (
    <div className="Layout">
      <Container>
        <Header></Header>
        <Hotels />
      </Container>
    </div>
  );
};

export default Layout;
