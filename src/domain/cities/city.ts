import type { Civ } from "../civ";
import type { CityImprovement } from "../enums";
import type { IUnit } from "../units/unit";
import { BuildQueue } from "./build-queue";
import type { CityTile } from "./city-tile";
import { FoodStore } from "./food-store";

export class City {
  private units: Array<IUnit> = [];
  private improvements: Array<CityImprovement> = [];
  private foodStore: FoodStore;
  private buildQueue: BuildQueue;

  population: number;
  id: string;
  civ: Civ;
  name: string;
  location: Array<number>;
  tiles: Array<CityTile> = [
    { row: 1, col: 1, food: 2, production: 2, trade: 1 },
  ];

  constructor(civ: Civ, name: string, location: number[]) {
    this.id = `${civ.abbrev}-${name}`;
    this.civ = civ;
    this.name = name;
    this.population = 1;
    this.location = location;
    this.foodStore = new FoodStore(this);
    this.buildQueue = new BuildQueue(this);
  }

  get food(): number {
    return this.tiles.reduce((sum, t) => sum + t.food, 0);
  }

  get production(): number {
    return this.tiles.reduce((sum, t) => sum + t.production, 0);
  }

  get trade(): number {
    return this.tiles.reduce((sum, t) => sum + t.trade, 0);
  }

  get hasBarracks(): boolean {
    return this.improvements.findIndex((i) => i === "barracks") > 0;
  }

  get hasGranary(): boolean {
    return this.improvements.findIndex((i) => i === "granary") > 0;
  }

  doTurn() {
    this.foodStore.harvest();
    this.buildQueue.build();
  }

  addCitizen() {
    this.population++;
  }

  addUnit(unit: IUnit) {
    this.units.push(unit);
  }

  addImprovement(name: CityImprovement) {
    this.improvements.push(name);
  }
}
