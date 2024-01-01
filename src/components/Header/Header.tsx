import React from "react";
import HomeButton from "./HomeButton";
import { HeaderTag } from "./style";

export default function Header() {
  return (
    <HeaderTag className="App-header">
      <HomeButton />
      <a href="/resume">Mon CV</a>
      <a href="/contact">Me Contacter</a>
    </HeaderTag>
  );
}
