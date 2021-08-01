let id = 0;

import { Character } from "./Character.js";

// Wizard:
// Attacking should do 1.5x the Wizard's level in damage
// Attacking should lower the Wizard's mana by 2
// Archer:
// Attacking should still hit for the Archer's level,
// but should use up 1 arrow
// Warrior:
// Attacking should do damage equal to the Warrior's strength
// Attacking should lower the Warrior's strength by 1

export class Wizard extends Character {
  constructor(name, level) {
    super(name + "🧙🏽‍♀️", level);
    this.mana = 4 * level;
  }

  levelUp() {
    super.levelUp();
    this.mana += 4;
  }

  attack(target) {
    let newHitpoints = target.hitpoints - this.level * 1.5;
    target.updateHitpoints(newHitpoints);
    let newMana = this.mana - 2;
    this.updateMana(newMana);
  }

  restore() {
    this.updateMana(this.mana + 1);
  }

  updateMana(mana) {
    this.mana = mana;
    document.getElementById(`character-${this.id}-mana`).innerHTML = `Mana: ${this.mana}`;
  }

  prepareForBattle() {
    document.getElementById(`character-${this.id}-restore`).onclick = () => {
      this.restore();
    };
  }

  view() {
    return super.view(`
    <div id="character-${this.id}-mana">Mana: ${this.mana}</div>
    <button id="character-${this.id}-restore">Restore</button>
    `);
  }
}

export class Archer extends Character {
  constructor(name, level) {
    super(name + "🏹", level);
    this.arrows = level * 3;
  }

  levelUp() {
    super.levelUp();
    this.arrows += 3;
  }

  attack(target) {
    super.attack(target);
    this.updateArrows(this.arrows - 1);
  }

  updateArrows(arrows) {
    this.arrows = arrows;
    document.getElementById(`character-${this.id}-arrows`).innerHTML = `Arrows: ${this.arrows}`;
  }

  reload() {
    this.updateArrows(this.arrows + 1);
  }

  prepareForBattle() {
    document.getElementById(`character-${this.id}-reload`).onclick = () => {
      this.reload();
    };
  }

  view() {
    return super.view(`
    <div id="character-${this.id}-arrows">Arrows: ${this.arrows}</div>
    <button id="character-${this.id}-reload">Reload</button>
    `);
  }
}

export class Warrier extends Character {
  constructor(name, level) {
    super(name, level);
    this.strength = level * 2.5;
  }

  levelUp() {
    super.levelUp();
    this.strength += 2.5;
  }

  attack(target) {
    let updatedHitpoints = target.hitpoints - this.strength;
    target.updateHitpoints(updatedHitpoints);
    this.updateStrength(this.strength - 1);
  }

  charge() {
    this.updateStrength(this.strenght + 1);
  }

  updateStrength(strenght) {
    this.strenght = strenght;
    document.getElementById(`character-${this.id}-strenght`).innerHTML = `Strength: ${this.strenght}`;
  }

  prepareForBattle() {
    document.getElementById(`character-${this.id}-charge`).onclick = () => {
      this.charge();
    };
  }
  view() {
    return super.view(`
    <div id="character-${this.id}-strenght">Strength: ${this.strenght}</div>
    <button id="character-${this.id}-charge">Charge</button>
    `);
  }
}
