import Card from "../card/card";

class Publisher {
  subscribers: Subscriber[];

  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriber: Subscriber): void {
    this.subscribers.push(subscriber);
  }

  unSubscribe(unsubscriber: Subscriber): void {
    this.subscribers = this.subscribers.filter((sub) => sub !== unsubscriber);
  }
  notifySubscibers(message: string): void {
    this.subscribers.forEach((sub) => {
      sub.update(message);
    });
  }
}

class Subscriber {
  inbox: string[];

  constructor() {
    this.inbox = [];
  }

  update(context: string) {
    this.inbox.push(context);
  }
}

function client(message: string) {
  const pub = new Publisher();

  const sub1 = new Subscriber();
  const sub2 = new Subscriber();
  const sub3 = new Subscriber();

  pub.subscribe(sub1);
  pub.subscribe(sub2);

  pub.notifySubscibers(message);
  pub.unSubscribe(sub2);
  pub.notifySubscibers(message);

  return (
    <>
      <p>
        Observer is a design pattern which creates a subscription mechanism
        between a Publisher instance and one/some Subscriber instances. When
        publisher calls the update method all subscribers get notified. We
        create three instances of subscribers and only subscribe the first two
        and send the notification then we unsubscribe the second one too and
        send another notification.
      </p>
      <p>
        Subscriber 1 (subscribed), {sub1.inbox.length} message/s: {sub1.inbox}
      </p>
      <p>
        Subscriber 2 (subscribed, then unsubscribed), {sub2.inbox.length}{" "}
        message/s: {sub2.inbox}
      </p>
      <p>
        Subscriber 3 (not subscribed), {sub3.inbox.length} message/s:{" "}
        {sub3.inbox}
      </p>
    </>
  );
}

export default function Observer() {
  return (
    <Card
      title="Observer"
      description="Observer is a behavioral design pattern that lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing."
      implementation={client("UPDATE: New iPhone is out right now! ")}
    />
  );
}
