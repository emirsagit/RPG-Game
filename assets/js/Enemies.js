/*

Enemies:
    The unique Enemy attacks should be called whenever they've
        been attacked
    "bite" should hit the target for 1/8 of their maxHitpoints
    "sting" should hit the target for 1/4 of their maxHitpoints
    "fireBreath" should hit the target for 1/2 of their maxHitpoints

*/

import { Character } from "./Character.js";

export class Spider extends Character {
  constructor(level) {
    super("Spider🕷", level);
  }

  attack(target) {
    this.bite(target);
  }

  bite(target) {
    let damage = target.maxHitpoints / 8;
    target.updateHitpoints(target.hitpoints - damage);
  }
}

export class Scorpion extends Character {
  constructor(level) {
    super("Scorpion🦂", level);
    this.hitpoints = level * 4;
    this.maxHitpoints = level * 4;
  }

  attack(target) {
    this.sting(target);
  }

  sting(target) {
    let damage = target.maxHitpoints / 4;
    target.updateHitpoints(target.hitpoints - damage);
  }
}

export class Dragon extends Character {
  constructor(level) {
    super("Dragon🐉", level);
    this.hitpoints = level * 4;
    this.maxHitpoints = level * 4;
  }

  attack(target) {
    this.fireBreath(target);
  }

  fireBreath(target) {
    let damage = target.maxHitpoints / 2;
    target.updateHitpoints(target.hitpoints - damage);
  }
}
