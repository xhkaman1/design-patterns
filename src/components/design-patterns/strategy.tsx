import Card from "../card/card";

interface RoadStrategy {
  buildRoad(a: string, b: string): string;
}

class BikeStrategy implements RoadStrategy {
  buildRoad(a: string, b: string): string {
    return `Built road from ${a} to ${b} using bike routes.`;
  }
}

class CarStrategy implements RoadStrategy {
  buildRoad(a: string, b: string): string {
    return `Built road from ${a} to ${b} using car routes.`;
  }
}

class WalkingStrategy implements RoadStrategy {
  buildRoad(a: string, b: string): string {
    return `Built road from ${a} to ${b} using walking routes.`;
  }
}

interface MapNavigator {
  strategy: RoadStrategy;
  setStrategy(strategy: RoadStrategy): void;
  buildRoutes(a: string, b: string): string;
}

class AppNavigator implements MapNavigator {
  strategy: RoadStrategy;

  constructor(strategy: RoadStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: RoadStrategy): void {
    this.strategy = strategy;
  }
  buildRoutes(a: string, b: string): string {
    return this.strategy.buildRoad(a, b);
  }
}

function client() {
  const navigator = new AppNavigator(new BikeStrategy());
  const bikeRoute = navigator.buildRoutes("point A", "point B");
  navigator.setStrategy(new CarStrategy());
  const carRoute = navigator.buildRoutes("point A", "point B");

  return (
    <>
      <p>
        We use the Strategy design pattern to group a group of RoadStrategy
        classes to decouple them from the main application. We create a
        navigator which can build routes for bikes. Then we set to it the
        another RoadStrategy and it gives us the route for cars.
      </p>
      <p>{bikeRoute}</p>
      <p>{carRoute}</p>
    </>
  );
}

export default function Strategy() {
  return (
    <Card
      title="Strategy"
      description="Strategy is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable."
      implementation={client()}
    />
  );
}
