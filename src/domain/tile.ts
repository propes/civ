export class Tile {
  type: string;
  location: number[];

  constructor(type: string, location: number[]) {
    this.type = type;
    this.location = location;
  }
}
