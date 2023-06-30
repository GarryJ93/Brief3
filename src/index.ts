// Import des classes créées dans le fichier classe mère
import { Hero } from "./classeMere";
import { Weapon } from "./classeMere";

// Création des instances de mes premières classes
const opponent1: Hero = new Hero("Loïc", 250, 650);
const opponent2: Hero = new Hero("Guillaume", 180, 850);
const axe: Weapon = new Weapon("Axe", 100);
const sword: Weapon = new Weapon("Sword", 75);
const spear: Weapon = new Weapon("Spear", 50);
// const spearDamage: string = Object.values(spear.damage.toString()).join("");
// const powerUpSpear: number = Number(spearDamage);
// const axeDamage: string = Object.values(axe.damage.toString()).join("");
// const powerUpAxe: number = Number(spearDamage);
// const swordDamage: string = Object.values(sword.damage.toString()).join("");
// const powerUpSword: number = Number(spearDamage);

// tests effectués lors de la création des classes et des premières instances

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
// tests effectués lors de la création des classes et des premières instances

//Création des classes filles de Hero et initialisation de la propriété weapon
class HeroAxe extends Hero {
  constructor(name: string, power: number, life: number) {
    super(name, power, life);
    this.weapon = axe;
  }
  // polymorphism par override pour adapter la méthode à mes besoins
  attack(opponent: Hero) {
    if (opponent instanceof HeroSpear) {
      opponent.setActLife(opponent.getLifeHero() - (this.getPowerHero()+ this.weapon.damage) * 2);
    } else {
      super.attack(opponent);
    }
  }
}
//  Création d'une instance d'une classe fille et test
const opponent3: HeroAxe = new HeroAxe("Garry", 100, 600);

// console.log(opponent3);
// console.log(opponent1);
class HeroSword extends Hero {
  constructor(name: string, power: number, life: number) {
    super(name, power, life);
    this.weapon = sword;
  }

  attack(opponent: Hero) {
    if (opponent instanceof HeroSpear) {
      opponent.setActLife(opponent.getLifeHero() - (this.getPowerHero()+ this.weapon.damage) * 2);
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
      opponent.setActLife(opponent.getLifeHero() - (this.getPowerHero()+ this.weapon.damage) * 2); 
    } else {
      super.attack(opponent);
    }
  }
}

// instances des autres classes filles et test
const opponent4: HeroSpear = new HeroSpear("Marcel", 100, 1000);
const opponent5: HeroSword = new HeroSword("Antoine", 100, 600);
// console.log(opponent3);
// console.log(opponent4.attack(opponent4));
// console.log(opponent5);
// console.log(opponent4.attack(opponent3));
// console.log(opponent4.attack(opponent5));
// console.log(opponent5);

// function contenant une boucle pour la bataille

function Fight(hero1: Hero, hero2: Hero): string {
  hero1.isAlive();
  hero2.isAlive();

  while (hero1.isAlive() && hero2.isAlive())
    hero1.attack(hero2), hero2.attack(hero1);

  if (!hero1.isAlive() && !hero2.isAlive()) {
    console.log("it's a draw");
    return "It's a draw !";
  } else if (!hero1.isAlive()) {
    console.log(`${hero2.getNameHero()} wins.`);
    return `${hero2.getNameHero()} wins.`;
  } else {
    console.log(`${hero1.getNameHero()} wins.`);
    return `${hero1.getNameHero()} wins`;
  }
}

Fight(opponent4, opponent3);
Fight(opponent5, opponent3);
Fight(opponent4, opponent2);
console.log(opponent3.getLifeHero());
console.log(opponent4.getLifeHero());
console.log(opponent3);
// console.log(Object.values(axe));
// console.log(Object.values(axe.name));
// console.log(Object.values(spear.damage.toString()).join(""));


// const weaponDamage: string = Object.values(spear.damage.toString()).join("");
// console.log(weaponDamage); 
// console.log(Number(weaponDamage));
Fight(opponent4, opponent1);
console.log(opponent3.weapon.damage);
