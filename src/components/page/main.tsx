import React from "react";
import AbstractFactory from "../design-patterns/abstract-factory";
import Adapter from "../design-patterns/adapter";
import Builder from "../design-patterns/builder";
import FactoryMethod from "../design-patterns/factory-method";

const cards = [
  <AbstractFactory />,
  <Adapter />,
  <Builder />,
  <FactoryMethod />,
];

export default function MainPage() {
  return (
    <>
      <h1>Design Patterns</h1>
      {cards.map((card) => {
        return (
          <>
            {card}
            <br />
          </>
        );
      })}
    </>
  );
}
