import AbstractFactory from "../design-patterns/abstract-factory";
import Adapter from "../design-patterns/adapter";
import Builder from "../design-patterns/builder";
import FactoryMethod from "../design-patterns/factory-method";
import Command from "../design-patterns/command";
import Iterator from "../design-patterns/iterator";
import Observer from "../design-patterns/observer";
import Strategy from "../design-patterns/strategy";

const cards = [
  <AbstractFactory />,
  <Adapter />,
  <Builder />,
  <FactoryMethod />,
  <Command />,
  <Iterator />,
  <Observer />,
  <Strategy />,
];

export default function MainPage() {
  return (
    <>
      <h1>Design Patterns</h1>
      {cards.map((card, index) => {
        return (
          <div key={index}>
            <span>{card}</span>
            <br />
          </div>
        );
      })}
    </>
  );
}
