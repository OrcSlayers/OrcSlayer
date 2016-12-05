import angular from 'angular';
import './main.css';
import controllers from './controllers'; //find the index.js and import contents
import GameSpace from './models/game-space';
import Player from './models/player';

angular.module('orcSlayer', [controllers])
  .service('GameSpace', GameSpace)
  .service('Player', Player);
