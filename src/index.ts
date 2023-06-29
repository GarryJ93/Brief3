import { Hero } from "./classeMere";

const opponent1: Hero = new Hero("Loïc", 250, 650);
const opponent2: Hero = new Hero("Guillaume", 180, 850);

// console.log("Base opponent1 ", opponent1);
// console.log("Base opponent2 ", opponent2);
// opponent2.attack(opponent1);
// console.log("Opponent1 après attaque: ", opponent1);
// console.log("Opponent1 alive: ", opponent1.isAlive());
// opponent1.attack(opponent2);
// console.log("Opponent1 pas attaqué: ", opponent1);
// console.log("Opponent2 après attaque: ", opponent2);

// opponent2.attack(opponent1);
// console.log("Opponent1 après attaque: ", opponent1);
// opponent2.attack(opponent1);
// console.log("Opponent1 après attaque: ", opponent1);
// opponent2.attack(opponent1);
// console.log("Opponent1 après attaque: ", opponent1);
// console.log("Opponent1 alive: ", opponent1.isAlive());

import { Weapon } from "./classeMere";

const axe: Weapon = new Weapon("Axe");
const sword: Weapon = new Weapon("Sword");
const spear: Weapon = new Weapon("Spear");
class HeroAxe extends Hero {
  constructor(name: string, power: number, life: number) {
    super(name, power, life);
    this.weapon = axe;
  }

  attack(opponent: Hero) {
    if(opponent instanceof HeroSpear) {
         opponent.setActLife(opponent.getLifeHero() - this.getPowerHero()*2); 
      } else {
        super.attack(opponent);
      }
    } }
const opponent3: HeroAxe = new HeroAxe("Garry", 540, 999);

console.log(opponent3);
console.log(opponent1);
class HeroSword extends Hero {
  constructor(name: string, power: number, life: number) {
    super(name, power, life);
    this.weapon = sword;
  }

  attack(opponent: Hero) {
    if (opponent instanceof HeroSpear) {
      opponent.setActLife(opponent.getLifeHero() - this.getPowerHero() * 2);
    } else {
      super.attack(opponent);
    }
  }
}
class HeroSpear extends Hero {
  constructor(name: string, power: number, life: number) {
    super(name, power, life);
    this.weapon = spear;
  }

    attack(opponent: Hero) {
      if (opponent instanceof HeroSpear) {
         opponent.setActLife(opponent.getLifeHero() - this.getPowerHero()*2); 
      } else {
        super.attack(opponent);
      }
    } 
  }


const opponent4: HeroSpear = new HeroSpear("Marcel", 133, 666);
const opponent5: HeroSword = new HeroSword("Antoine", 256, 166);
// console.log(opponent3);
// console.log(opponent4.attack(opponent4));
// console.log(opponent5);
// console.log(opponent4.attack(opponent3));
// console.log(opponent4.attack(opponent5));
// console.log(opponent5);

