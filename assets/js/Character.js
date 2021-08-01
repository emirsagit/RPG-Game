let id = 0;

export class Character {
  constructor(name, level) {
    let elements = { name, level, id, hitpoints: level * 4, maxHitpoints: level * 4, inventory: [] };
    Object.assign(this, elements);
    id++;
  }

  initializeInventory() {
    for (let food of this.inventory) {
      const domElement = food.domElement();
      domElement.addEventListener("click", () => {
        this.updateHitpoints(food.restores);
        this.inventory.splice(this.inventory.indexOf(food), 1);
        document.getElementById(`character-${this.id}-inventory`).innerHTML = this.getInventoryView();
        this.initializeInventory();
      });
    }
  }

  pickup(food) {
    this.inventory.push(food);
  }

  attack(target) {
    const newHitpoints = target.hitpoints - this.level;
    target.updateHitpoints(newHitpoints);
  }

  levelUp() {
    this.level++;
    this.maxHitpoints = this.level * 4;
    this.hitpoints = this.maxHitpoints;
  }

  getInventoryView() {
    let inventoryView = "";

    for (let food of this.inventory) {
      inventoryView += food.view();
    }

    return inventoryView;
  }

  view(details = "") {
    return `<div class="character" id="character-${this.id}">
      <div>${this.name}</div>
      <div>Level ${this.level}</div>
      <div id="character-${this.id}-hitpoints"> 
      HP: ${this.hitpoints}/${this.maxHitpoints}
      </div>
      <div class="inventory" id="character-${this.id}-inventory">${this.getInventoryView()}</div>
      ${details}
    </div>`;
  }

  updateHitpoints(newHitpoints) {
    this.hitpoints = newHitpoints;
    let { id, hitpoints, maxHitpoints } = this;
    document.getElementById(`character-${id}-hitpoints`).innerHTML = `HP: ${hitpoints}/${maxHitpoints}`;
  }

  domElement() {
    const domElement = document.getElementById(`character-${this.id}`);
    if (domElement) {
      return domElement;
    }
  }
}
