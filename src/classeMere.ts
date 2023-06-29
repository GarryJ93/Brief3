export class Hero {
    private name: string;
    private power: number;
    private life: number;
    weapon: Weapon|undefined;

  constructor(name: string, power: number, life: number) {
    this.name = name;
    this.power = power;
    this.life = life;
  }
  
    attack(opponent: Hero) {
         opponent.life -= this.power;
   };
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
};

export class Weapon {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}