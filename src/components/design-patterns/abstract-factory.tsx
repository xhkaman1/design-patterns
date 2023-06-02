import React from "react";
import Card from "../card/card";

interface Product1 {
  method1(): string;
}

class ProductA1 implements Product1 {
  method1(): string {
    return "Product1 created of type A";
  }
}

class ProductB1 implements Product1 {
  method1(): string {
    return "Product1 created of type B";
  }
}

interface Product2 {
  method2(): string;
}

class ProductA2 implements Product2 {
  method2(): string {
    return "Product2 created of type A";
  }
}

class ProductB2 implements Product2 {
  method2(): string {
    return "Product2 created of type B";
  }
}

interface ProductFactory {
  returnProduct1(): Product1;
  returnProduct2(): Product2;
}

class FactoryA implements ProductFactory {
  returnProduct1(): Product1 {
    return new ProductA1();
  }
  returnProduct2(): Product2 {
    return new ProductA2();
  }
}

class FactoryB implements ProductFactory {
  returnProduct1(): Product1 {
    return new ProductB1();
  }
  returnProduct2(): Product2 {
    return new ProductB2();
  }
}

function client(factory: ProductFactory) {
  const product1 = factory.returnProduct1();
  const product2 = factory.returnProduct2();

  return (
    <>
      <span>
        We create one Product 1 and one Product 2 that are of the same type.
      </span>
      <p>Product 1: {product1.method1()}</p>
      <p>Product 2: {product2.method2()}</p>
    </>
  );
}

export default function AbstractFactory() {
  return (
    <Card
      title="Abstract Factory"
      description="Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes."
      implementation={client(new FactoryA())}
    />
  );
}
