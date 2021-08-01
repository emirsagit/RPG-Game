let id = 0;

export class Food {
  constructor(name, restores) {
    this.name = name;
    this.restores = restores;
    this.id = id++;
  }

  view() {
    return `<div class="food" id="foot-${this.id}">${this.name}</div>`;
  }

  domElement() {
    const domElement = document.getElementById(`foot-${this.id}`);
    if (domElement) {
      return domElement;
    }
  }
}
