const PubSub = require('../helpers/pub_sub.js');
const CharacterView = require('./character_view.js');

const CharacterListView = function (container){
  this.container = container;
};

CharacterListView.prototype.bindEvents = function(){
  PubSub.subscribe('RickMorty:data-ready', (event) => {
    // this.clearList();
    this.render(event.detail);
  });
};

CharacterListView.prototype.clearList = function () {
  this.container.innerHTML = '';
};

CharacterListView.prototype.render = function (characters) {
  characters.forEach((character) => {
    const characterItem = this.createCharacterListItem(character);
    console.log(characterItem);
    this.container.appendChild(characterItem);
  });
};




CharacterListView.prototype.createCharacterListItem = function (character) {
  const characterView = new CharacterView();
  const characterDetail = characterView.createCharacterDetail(character);
  return characterDetail;

};

module.exports = CharacterListView;
