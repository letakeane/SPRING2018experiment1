export default class Being {
  constructor(name = '', species = '', items = [], skills = [], health = 0) {
    this.name = name;
    this.species = species;
    this.items = items;
    this.skills = skills;
    this.health = health;
  }

  gainHealth() {
    this.health++;
  }

  loseHealth() {
    if (this.health) {
      this.health--;
    }
  }
}
