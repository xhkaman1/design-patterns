import React from "react";
import Card from "../card/card";

interface Person {
  name: string;
  sayHello(): string;
}

class ItalianPerson implements Person {
  name: string;
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    return "Ciao! Io sono " + this.name;
  }
}

class EnglishPerson implements Person {
  name: string;
  constructor(name) {
    this.name = name;
  }
  sayHello(): string {
    return "Hello! I am " + this.name;
  }
}

function ItalianToEnglishAdapter(italian: ItalianPerson): EnglishPerson {
  return new EnglishPerson(italian.name);
}

function client(italian: ItalianPerson, english: EnglishPerson) {
  const italianToEnglish = ItalianToEnglishAdapter(italian);

  return (
    <>
      <span>
        We create an adapter which makes an Italian comunicate in english with
        an English person.
      </span>
      <p>
        Italian: '{italian.sayHello()}' English person cannot understand him.
      </p>
      <p>Italian (adapted): '{italianToEnglish.sayHello()}' In English.</p>
      <p>
        English: '{english.sayHello()}' Now they can communicate with one
        another.
      </p>
    </>
  );
}

export default function Adapter() {
  const italian = new ItalianPerson("Lucca");
  const english = new EnglishPerson("George");

  return (
    <Card
      title="Adapter"
      description="Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate."
      implementation={client(italian, english)}
    />
  );
}
