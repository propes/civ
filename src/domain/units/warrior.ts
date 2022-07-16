import { v4 as uuidv4 } from "uuid";
import type { Civ } from "../civ";
import type { IUnit } from "./unit";

export class Warrior implements IUnit {
  readonly id: string;
  civ: Civ;
  cityId: string;
  location: number[];
  attack: number;
  defense: number;
  health: number;
  isVeteran: boolean;
  isFortified: boolean;

  constructor(
    civ: Civ,
    cityId: string,
    location: number[],
    isVeteran: boolean
  ) {
    this.id = `${civ.abbrev}-${uuidv4()}`;
    this.civ = civ;
    this.cityId = cityId;
    this.location = location;
    this.attack = 1;
    this.defense = 1;
    this.health = 10;
    this.isVeteran = isVeteran;
    this.isFortified = false;
  }
}
