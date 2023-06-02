import React, { useState } from "react";
import Card from "../card/card";

class Invoker {
  command: Command;

  setCommand(command: Command) {
    this.command = command;
  }

  executeCommand() {
    return this.command.execute();
  }
}

interface Command {
  command();
  execute();
}

class PrintLetter implements Command {
  command() {
    return "A";
  }
  execute() {
    return this.command();
  }
}

class PrintNumber implements Command {
  command() {
    return 5;
  }
  execute() {
    return this.command();
  }
}

function client(command: Command) {
  const invoker = new Invoker();
  invoker.setCommand(command);
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <p>
        We give a command as a parameter to this Button and when executed it
        runs said command.
      </p>
      <input
        type="button"
        value={isPressed ? "Hide" : "Run"}
        onClick={() => {
          setIsPressed(!isPressed);
        }}
      />
      <p>{isPressed && invoker.executeCommand()}</p>
    </>
  );
}

export default function Command() {
  const command = new PrintLetter();

  return (
    <Card
      title="Command"
      description="Command is a behavioral design pattern that turns a request into a stand-alone object that contains all information about the request. This transformation lets you pass requests as a method arguments, delay or queue a request’s execution, and support undoable operations."
      implementation={client(command)}
    />
  );
}
