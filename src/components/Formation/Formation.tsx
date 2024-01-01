import React from "react";

import { Card } from "../common";

import { FormationArticle } from "./style";

interface FormationProperties {
  diploma: string;
  school: string;
  years: string;
  logoUrl: string;
  url: string;
}

export default function Formation(props: FormationProperties) {
  return (
    <Card title={props.diploma} subtitle={props.school} url={props.url} imageUrl={props.logoUrl}>
      <p className="FormationArticle__years">{props.years}</p>
    </Card>
  );
}
