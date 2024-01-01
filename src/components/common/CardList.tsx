import React from "react";

interface CardListProperties {
  title: string;
  children?: React.ReactNode[] | React.ReactNode;
}

export default function CardList(props: CardListProperties) {
  let children: React.ReactNode[] = [];
  if (Array.isArray(props.children)) {
    children = props.children;
  } else {
    children.push(props.children);
  }

  return (
    <section>
      <h2>{props.title}</h2>
      <ul>
        {children?.map((elm, index) => (
          <li key={index}>{elm}</li>
        ))}
      </ul>
    </section>
  );
}
