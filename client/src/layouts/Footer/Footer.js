import React from "react";
import { Container } from "reactstrap";

import "./Footer.css";

const Footer = () => {
  return (
    <footer class="footer">
      <Container>
        <span>&copy; Bank Rock {new Date().getFullYear()} - All Rights Reserved</span>
      </Container>
    </footer>
  );
};

export default Footer;
