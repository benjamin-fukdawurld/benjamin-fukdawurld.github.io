import React from "react";

import { CardContainer } from "./style";

interface CardProperties {
  title: string;
  subtitle: string;
  imageUrl: string;
  url: string;
  children: React.ReactNode | React.ReactNode[];
}

export default function Card(props: CardProperties) {
  return (
    <CardContainer>
      <a className="CardContainer__link" href={props.url} title={props.title}>
        <img className="CardContainer__image" src={props.imageUrl} alt={props.title} />
        <article className="CardContainer__article">
          <h3 className="CardContainer__title">{props.title}</h3>
          <h4 className="CardContainer__subtitle">{props.subtitle}</h4>
          {props.children}
        </article>
      </a>
    </CardContainer>
  );
}
