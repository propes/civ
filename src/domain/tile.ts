export class Tile {
  type: TileType;
  location: number[];

  constructor(type: TileType, location: number[]) {
    this.type = type;
    this.location = location;
  }
}

export type TileType = "grassland1";
