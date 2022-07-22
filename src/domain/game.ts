import { City } from "./cities/city";
import { Civ } from "./civ";
import { Tile } from "./tile";
import type { IUnit } from "./units/unit";

export class Game {
  turn = 1;
  totalTurns = 400;
  tiles: Array<Tile> = [];
  cities: Array<City> = [];
  units = new Map<string, IUnit>();

  constructor() {
    this.generateTiles();
    const civ = new Civ("fr", "french");
    const city = new City(civ, "Paris", [5, 5]);
    this.cities.push(city);
  }

  nextTurn() {
    if (this.turn > this.totalTurns) {
      throw new Error("Total turns exceeded");
    }
    this.cities.forEach((city) => city.doTurn());
    this.turn++;
  }

  generateTiles() {
    const rowCount = 15;
    const colCount = 15;
    for (let row = 0; row < rowCount; row++) {
      for (let col = 0; col < colCount; col++) {
        if (row % 2 === col % 2) {
          this.tiles.push(new Tile("grassland1", [row, col]));
        }
      }
    }
  }
}
