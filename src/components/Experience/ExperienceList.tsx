import React from "react";
import { CardList } from "../common";

interface ExperienceListProperties {
  children?: React.ReactNode[] | React.ReactNode;
}

export default function ExperienceList(props: ExperienceListProperties) {
  return <CardList title="Expérience">{props.children}</CardList>;
}
