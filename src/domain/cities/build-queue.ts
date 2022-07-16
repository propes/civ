import { Bus } from "../bus";
import { BuildItemType, type CityImprovement } from "../enums";
import type { IBuildItem } from "./build-item";
import type { City } from "./city";
import type { IUnitBuildItem } from "./unit-build-item";
import { WarriorBuildItem } from "./warrior-build-item";

const bus = new Bus();

export class BuildQueue {
  private city: City;
  private buildItem: IBuildItem;
  private completed: number;

  constructor(city: City) {
    this.buildItem = new WarriorBuildItem();
    this.completed = 0;
    this.city = city;
  }

  build() {
    this.completed += this.city.production;
    if (this.completed >= this.buildItem.cost) {
      if (this.buildItem.type === BuildItemType.Unit) {
        this.createUnit();
      } else {
        this.createImprovement();
      }
      this.completed = 0;
    }
  }

  private createUnit() {
    const unit = (this.buildItem as IUnitBuildItem).convertToUnit(this.city);
    this.city.addUnit(unit);

    bus.publish({
      name: "UnitCreated",
      data: {
        unit: unit,
      },
    });
  }

  private createImprovement() {
    this.city.addImprovement(this.buildItem.name as CityImprovement);
  }
}
