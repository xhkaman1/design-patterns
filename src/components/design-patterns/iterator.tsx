import Card from "../card/card";

interface iterator<T> {
  key(): number;
  current(): T;
  next(): T;
  hasNext(): boolean;
  resetIterator(): void;
}

class OrderedNumberIterator implements iterator<number> {
  ascending: boolean;
  currentKey: number;
  list: number[];

  constructor(list: number[], ascending: boolean) {
    this.currentKey = 0;
    this.ascending = ascending;
    this.list = this.sortList(list);
  }

  sortList(list: number[]): number[] {
    let refList = [...list];
    return this.ascending ? refList.sort() : refList.sort().reverse();
  }

  key(): number {
    return this.currentKey;
  }

  current(): number {
    return this.list[this.currentKey];
  }

  hasNext(): boolean {
    return this.currentKey < this.list.length - 1;
  }

  next(): number {
    this.currentKey++;
    return this.current();
  }

  resetIterator(): void {
    this.currentKey = 0;
  }
}

function client() {
  const list = [4, 6, 2, 3];
  const listDescIterator = new OrderedNumberIterator(list, false);
  const listAscIterator = new OrderedNumberIterator(list, true);

  return (
    <>
      <p>
        Iterator has configuration to take a list of numbers and order it in
        desc or asc order. We create two iterators, one for each. To see that
        this works we will print the first two elements from both iterators.
      </p>
      <p>
        List Asc: {listAscIterator.current()} {listAscIterator.next()}
      </p>
      <p>
        List Desc: {listDescIterator.current()} {listDescIterator.next()}
      </p>
    </>
  );
}

export default function Iterator() {
  return (
    <Card
      title="Iterator"
      description="Iterator is a behavioral design pattern that allows sequential traversal through a complex data structure without exposing its internal details."
      implementation={client()}
    />
  );
}
