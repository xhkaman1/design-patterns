import React from "react";
import Card from "../card/card";

interface Lunch {
  cook(): string;
}

class Salad implements Lunch {
  cook() {
    return "salad";
  }
}

class Beef implements Lunch {
  cook() {
    return "beef";
  }
}

interface Kitchen {
  lunch(): Lunch;
}

class VeganKitchen implements Kitchen {
  lunch(): Lunch {
    return new Salad();
  }
}

class StakehouseKitchen implements Kitchen {
  lunch(): Lunch {
    return new Beef();
  }
}

function client(kitchen: Kitchen) {
  const lunch = kitchen.lunch();

  return (
    <>
      <p>
        The following factory method creates a vegan food if vegan kitchen is
        given as a parameter or beef if Stakehouse kitchen is given as
        parameter.
      </p>
      <p>In this case it is: {lunch.cook()}</p>
    </>
  );
}

export default function FactoryMethod() {
  const kitchen = new StakehouseKitchen();

  return (
    <Card
      title="Factory Method"
      description="Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created."
      implementation={client(kitchen)}
    />
  );
}
