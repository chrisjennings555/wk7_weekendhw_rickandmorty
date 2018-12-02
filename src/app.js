const RickMorty = require('./models/rick_morty.js');
const CharacterListView = require('./views/character_list_view.js');
const CharacterView = require('./views/character_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log("JavaScript loaded");

  const listContainer = document.querySelector('#character-list');
  const characterListView = new CharacterListView(listContainer);
  characterListView.bindEvents();

  const rickMorty = new RickMorty;
  rickMorty.getData();

});
