import type { Civ } from "../civ";

export interface IUnit {
  readonly id: string;
  readonly civ: Civ;
  readonly cityId: string;
  readonly location: number[];
  readonly attack: number;
  readonly defense: number;
  readonly health: number;
  readonly isFortified: boolean;
}
