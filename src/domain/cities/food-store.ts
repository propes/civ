import type { City } from "./city";

export class FoodStore {
  private city: City;
  private foodTotal: number;

  constructor(city: City) {
    this.city = city;
    this.foodTotal = 0;
  }

  get growthThreshold(): number {
    return this.city.population * 10;
  }

  harvest(): void {
    this.foodTotal += this.city.food;
    const surplus = this.foodTotal - this.growthThreshold;
    if (surplus >= 0) {
      this.city.addCitizen();
      if (this.city.hasGranary) {
        this.foodTotal = this.growthThreshold / 2 + surplus;
      } else {
        this.foodTotal = surplus;
      }
    }
  }
}
