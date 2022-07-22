import type { IEvent } from "./event";

export interface IBus {
  publish(event: IEvent): void;
}

export class Bus implements IBus {
  publish(event: IEvent) {
    console.log(`Event published: ${event.name} with data:`, event.data);
  }
}
