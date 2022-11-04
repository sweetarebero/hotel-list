import * as React from "react";
import Logo from "../../images/qantas-logo.png";
import { Navbar, NavbarBrand } from "reactstrap";

import "./Header.scss";

interface Props {}

const Header = (props: Props) => {
  return (
    <header className="Header">
      <Navbar>
        <NavbarBrand href="/">
          <img src={Logo} alt="Qantas logo" title="go to home page" />
        </NavbarBrand>
      </Navbar>
    </header>
  );
};

export default Header;
