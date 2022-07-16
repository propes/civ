import type { BuildItemName, BuildItemType } from "../enums";

export interface IBuildItem {
  readonly type: BuildItemType;
  readonly name: BuildItemName;
  readonly cost: number;
}
