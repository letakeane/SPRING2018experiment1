import Being from './Being';

export default class Ally extends Being {
  constructor(name = '', species = '', items = [], skills = [], health = 0, loyalty = 0) {
    super(name, species, items, skills, health);
    this.loyalty = loyalty;
  }

  greetPlayer(playerName) {
    switch(species) {
      
    }
  }
}
