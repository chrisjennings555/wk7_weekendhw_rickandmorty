const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const RickMorty = function () {
  this.rickMortyData = [];
};

RickMorty.prototype.getData = function () {
  const request = new RequestHelper('https://rickandmortyapi.com/api/character/');
  request.get()
  .then((data) => {
    this.rickMortyData = data;
    PubSub.publish('RickMorty:data-ready', this.rickMortyData);
    console.log(this.rickMortyData);
  });

};

module.exports = RickMorty;
