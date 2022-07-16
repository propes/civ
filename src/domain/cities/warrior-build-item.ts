import { BuildItemType, type BuildItemName } from "../enums";
import type { IUnit } from "../units/unit";
import { Warrior } from "../units/warrior";
import type { City } from "./city";
import type { IUnitBuildItem } from "./unit-build-item";

export class WarriorBuildItem implements IUnitBuildItem {
  readonly type: BuildItemType;
  readonly name: BuildItemName;
  readonly cost: number;
  completed: number;

  constructor() {
    this.type = BuildItemType.Unit;
    this.name = "warrior";
    this.cost = 10;
    this.completed = 0;
  }

  convertToUnit(city: City): IUnit {
    return new Warrior(city.civ, city.id, city.location, city.hasBarracks);
  }
}
