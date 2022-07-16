import type { IUnit } from "../units/unit";
import type { IBuildItem } from "./build-item";
import type { City } from "./city";

export interface IUnitBuildItem extends IBuildItem {
  convertToUnit(city: City): IUnit;
}
