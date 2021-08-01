// Update the combat module by creating a Dungeon class
//         It should have 3 properties: hero, currentEnemy,
//             and remainingEnemies
//         Its constructor should take just 2 arguments
//             a "hero" Character and an "enemies" array

//     The class should contain the startBattle & endBattle functions
//         that are already in the module

//     The class needs at least 3 other methods:
//         start() - starts the first battle,
//             kicking off the dungeon
//         next() - run when the "Start Next Battle"
//             is clicked, advancing to the next enemy
//             in the array. If the dungeon is complete,
//             pickup() the reward and end the dungeon
//         end() - run when the end of the dungeon is reached,
//             rendering the hero's view() alongside a celebratory
//             message of completion (for the hero and for yourself!)

export class Dungeon {
  constructor(hero, enemies) {
    const [currentEnemy, ...remainingEnemies] = enemies;
    const props = { hero, currentEnemy, remainingEnemies };
    Object.assign(this, props);
  }

  startBattle() {
    let { hero, currentEnemy } = this;
    document.body.innerHTML = `${this.hero.view()} <button id="attack-button">Attack</button> ${currentEnemy.view()}`;
    hero.initializeInventory();
    hero.prepareForBattle();
    document.getElementById("attack-button").onclick = () => {
      hero.attack(currentEnemy);
      currentEnemy.attack(hero);
      if (isKnockedOut(currentEnemy)) {
        this.endBattle(hero);
      } else if (isKnockedOut(hero)) {
        this.endBattle(hero);
      }
    };
  }

  endBattle(character) {
    document.body.innerHTML = `${character.view()} <button>Start Another</button>`;
    if (!isKnockedOut(character)) {
      character.levelUp();
      document.body.innerHTML = `
          ${character.view()}
          <h2>You WON! </h2>
          <button id="next-battle">Start Next Battle</button>
      `;
    }
    document.getElementById("next-battle").onclick = () => {
      this.next();
    };
  }

  start() {
    this.startBattle();
  }

  next() {
    let [currentEnemy, ...remainingEnemies] = this.remainingEnemies;
    Object.assign(this, { currentEnemy, remainingEnemies });
    if (!remainingEnemies.length) {
      this.hero.pickup(currentEnemy)
      this.end();
      return;
    }
    this.startBattle();
  }

  end() {
    document.body.innerHTML = `
    ${this.hero.view()}
    <h2>Finished! You rocked it</h2>`;
  }
}

function isKnockedOut(character) {
  return character.hitpoints <= 0;
}
