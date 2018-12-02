const PubSub = require('../helpers/pub_sub.js');

const CharacterView = function (selectElement) {
  this.selectElement = selectElement;
};

CharacterView.prototype.createCharacterDetail = function (character) {
  const characterDetail = document.createElement('div');
  characterDetail.classList.add('character-detail');

  const name = document.createElement('h2');
  name.textContent = `Name: ${character.name}`;

  const image = document.createElement('img');
  image.setAttribute('src', `${character.image}`);
  // image.setAttribute('width', '75%');
  // image.setAttribute('height', '75%');

  const status = document.createElement('h3');
  status.textContent = `Status: ${character.status}`;

  const species = document.createElement('h3');
  species.textContent = `Species: ${character.species}`;


  characterDetail.appendChild(name);
  characterDetail.appendChild(status);
  characterDetail.appendChild(species);
  characterDetail.appendChild(image);


  return characterDetail;
};

module.exports = CharacterView;
