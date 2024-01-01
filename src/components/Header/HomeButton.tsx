import React from "react";
import logo from "./logo.png";
import { HomeButtonLink } from "./style";

export default function HomeButton() {
  return (
    <HomeButtonLink href="/">
      <img src={logo} alt="the home button logo" />
    </HomeButtonLink>
  );
}
