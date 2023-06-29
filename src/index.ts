class Hero {
    private name: string;
    private power: number;
    private life: number;

  constructor(name: string, power: number, life: number) {
    this.name = name;
    this.power = power;
    this.life = life;
  }
    attack(opponent: Hero): number {
        return opponent.life -= this.power;
   };
  isAlive(): boolean {
    if (this.life > 0) {
      return true;
    } else {
      return false;
    }
  }
}

const opponent1: Hero = new Hero("Loïc", 250, 650);
const opponent2: Hero = new Hero("Guillaume", 180, 850);

console.log("Base opponent1 ", opponent1);
console.log("Base opponent2 ", opponent2);
opponent2.attack(opponent1);
console.log("Opponent1 après attaque: ", opponent1);
console.log("Opponent1 alive: ", opponent1.isAlive());
opponent1.attack(opponent2);
console.log("Opponent1 pas attaqué: ", opponent1);
console.log("Opponent2 après attaque: ", opponent2);
 
opponent2.attack(opponent1);
console.log("Opponent1 après attaque: ", opponent1);
opponent2.attack(opponent1);
console.log("Opponent1 après attaque: ", opponent1);
opponent2.attack(opponent1);
console.log("Opponent1 après attaque: ", opponent1);
console.log("Opponent1 alive: ", opponent1.isAlive());

// class Weapon {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
// }
// class HeroAxe extends Hero {
//     constructor() {
//         super();
        
//     }
// }
// class HeroSword extends Hero {
    
// }
// class HeroSpear extends Hero {
    
// }