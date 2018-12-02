const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const RickMorty = function () {
  this.rickMortyData = [];
};

RickMorty.prototype.getData = function () {
  this.multipleRequest('https://rickandmortyapi.com/api/character/?page=1');
  this.multipleRequest('https://rickandmortyapi.com/api/character/?page=2');
  this.multipleRequest('https://rickandmortyapi.com/api/character/?page=3');
  this.multipleRequest('https://rickandmortyapi.com/api/character/?page=4');
  this.multipleRequest('https://rickandmortyapi.com/api/character/?page=5');
  this.multipleRequest('https://rickandmortyapi.com/api/character/?page=6');
  this.multipleRequest('https://rickandmortyapi.com/api/character/?page=7');
  this.multipleRequest('https://rickandmortyapi.com/api/character/?page=8');
  this.multipleRequest('https://rickandmortyapi.com/api/character/?page=9');
  this.multipleRequest('https://rickandmortyapi.com/api/character/?page=10');
  this.multipleRequest('https://rickandmortyapi.com/api/character/?page=11');
  this.multipleRequest('https://rickandmortyapi.com/api/character/?page=12');
  this.multipleRequest('https://rickandmortyapi.com/api/character/?page=13');
  this.multipleRequest('https://rickandmortyapi.com/api/character/?page=14');
  this.multipleRequest('https://rickandmortyapi.com/api/character/?page=15');
  this.multipleRequest('https://rickandmortyapi.com/api/character/?page=16');
  this.multipleRequest('https://rickandmortyapi.com/api/character/?page=17');
  this.multipleRequest('https://rickandmortyapi.com/api/character/?page=18');
  this.multipleRequest('https://rickandmortyapi.com/api/character/?page=19');
  this.multipleRequest('https://rickandmortyapi.com/api/character/?page=20');
  this.multipleRequest('https://rickandmortyapi.com/api/character/?page=21');
  this.multipleRequest('https://rickandmortyapi.com/api/character/?page=22');
  this.multipleRequest('https://rickandmortyapi.com/api/character/?page=23');
  this.multipleRequest('https://rickandmortyapi.com/api/character/?page=24');
  this.multipleRequest('https://rickandmortyapi.com/api/character/?page=25');

};


RickMorty.prototype.multipleRequest = function (url){
  const request = new RequestHelper(url);
  request.get()
  .then((data) => {
    this.rickMortyData = data;
    PubSub.publish('RickMorty:data-ready', this.rickMortyData.results);
  });
};



module.exports = RickMorty;
