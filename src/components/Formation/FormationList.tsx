import React from "react";
import { CardList } from "../common";

interface FormationListProperties {
  children?: React.ReactNode[] | React.ReactNode;
}

export default function FormationList(props: FormationListProperties) {
  return <CardList title="Formation">{props.children}</CardList>;
}
