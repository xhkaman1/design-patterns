import Card from "../card/card";

interface Builder {
  reset(): void;
  addPart1(): void;
  addPart2(): void;
  addPart3(): void;
  getProduct(): Product;
}

class BuilderClass implements Builder {
  product = new Product();

  reset() {
    this.product = new Product();
  }

  addPart1(): void {
    this.product.parts.push("part 1");
  }
  addPart2(): void {
    this.product.parts.push("part 2");
  }
  addPart3(): void {
    this.product.parts.push("part 3");
  }

  getProduct() {
    const product = this.product;
    this.reset();
    return product;
  }
}

class Product {
  parts: string[];

  constructor() {
    this.parts = [];
  }

  getParts() {
    return "This car has " + this.parts.join(", ");
  }
}

class Director {
  builder: Builder;

  constructor(builder: Builder) {
    this.builder = builder;
  }

  setBuilder(builder: Builder) {
    this.builder = builder;
  }

  buildModel12() {
    this.builder.reset();
    this.builder.addPart1();
    this.builder.addPart2();
    return this.builder.getProduct();
  }

  buildCustomModel(hasPart1: boolean, hasPart2: boolean, hasPart3: boolean) {
    this.builder.reset();
    if (hasPart1) {
      this.builder.addPart1();
    }
    if (hasPart2) {
      this.builder.addPart2();
    }
    if (hasPart3) {
      this.builder.addPart3();
    }
    return this.builder.getProduct();
  }
}

function client() {
  const firstBuilder = new BuilderClass();
  const director = new Director(firstBuilder);
  const product12 = director.buildModel12();
  const productCustom = director.buildCustomModel(true, false, true);

  return (
    <>
      <p>
        We use the builder to build products using director methods. There are
        two methods, one which builds a predefined model with parts 1,2 and one
        which builds a custom model (with parts 1 and 3 in this implementation).
      </p>
      <p>Product 12: {product12.getParts()}</p>
      <p>Product customMade: {productCustom.getParts()}</p>
    </>
  );
}

export default function Builder() {
  return (
    <Card
      title="Builder"
      description="Builder is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code."
      implementation={client()}
    />
  );
}
