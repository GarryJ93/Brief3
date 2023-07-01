export class Hero {
  private name: string;
  private power: number;
  private life: number;
  weapon!: Weapon;

  constructor(name: string, power: number, life: number) {
    this.name = name;
    this.power = power;
    this.life = life;
  }

  attack(opponent: Hero): void {
    if (typeof this.weapon === undefined) {
      opponent.life -= this.power;
    } else {
      opponent.life -= this.power + this.weapon.damage;
    }
  }
  isAlive(): boolean {
    if (this.life > 0) {
      return true;
    } else {
      return false;
    }
  }
  getLifeHero(): number {
    return this.life;
  }
  setActLife(newLife: number) {
    this.life = newLife;
  }
  getPowerHero(): number {
    return this.power;
  }
  setActPower(newPower: number) {
    this.power = newPower;
  }
  getNameHero(): string {
    return this.name;
  }
  setActName(newName: string) {
    this.name = newName;
  }
}

export class Weapon {
  name: string;
  damage: number;
  constructor(name: string, damage: number) {
    this.name = name;
    this.damage = damage;
  }
}
