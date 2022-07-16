import { City } from "./cities/city";
import { Civ } from "./civ";
import { Tile } from "./tile";
import type { IUnit } from "./units/unit";

export class Game {
  turn = 1;
  totalTurns = 400;
  tiles: Array<Tile> = [];
  cities = new Map<string, City>();
  units = new Map<string, IUnit>();

  constructor() {
    this.generateTiles();
    const civ = new Civ("fr", "french");
    const city = new City(civ, "Paris");
    this.cities.set(city.id, city);
  }

  nextTurn() {
    if (this.turn > this.totalTurns) {
      throw new Error("Total turns exceeded");
    }
    this.cities.forEach((city) => city.doTurn());
    this.turn++;
  }

  private generateTiles() {
    this.tiles = [
      new Tile("grassland", [1, 1]),
      new Tile("grassland", [1, 2]),
      new Tile("grassland", [2, 1]),
      new Tile("grassland", [2, 2]),
    ];
  }
}
