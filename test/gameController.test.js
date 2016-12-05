/* globals angular, chai */
const { assert } = chai;
import Player from '../src/models/player';
import Room from '../src/models/room';
import GameSpace from '../src/models/game-space';

describe.skip ( 'gameController', () => {

  beforeEach(angular.mock.module('controllers'));

  let $controller, $scope;

  beforeEach(angular.mock.inject(function($rootScope, _$controller_) {
    $scope = $rootScope.$new();
    $controller = _$controller_;
  }));

  it ('player moves from one room to another', () => {
    // $scope.player = { room: 1 }; // player starts in room 1
    // $scope.rooms = [
    //   { N: null, S: 1, E: null, W: null },
    //   { N: 0, S: null, E: null, W: null }
    // ];
    var gc = $controller('gameController', { $scope });
    gc.move('N');
    assert.equal($scope.player.room, 0); // player should have moved to room 0
  });

  it ('player can pick up an item', () => {
    var gc = $controller('gameController', { $scope });
    $scope.player.room = 0;
    gc.equip();
    assert.equal($scope.player.item.name, 'turkey drumstick');
  });

  it ('player drops current item if she picks up a new one', () => {
    var gc = $controller('gameController', { $scope });
    $scope.player.room = 2;
    // console.log('\nI am about to equip!\n');
    // console.log('>>> Before equip player ', $scope.player, ' room ', $scope.rooms);
    gc.equip();
    // console.log('>>> After equip player ', $scope.player, ' room ', $scope.rooms);
    assert.equal($scope.player.item.name, 'sword');    
  });

});

describe ('gameController test2', () => {

  // beforeEach(module('orcSlayer'));

  // let ctrl;

  // beforeEach(inject(function($controller) {
  //   ctrl = $controller('gameController');
  // }));

  beforeEach(angular.mock.module('controllers'));

  let $controller, gc, map, player;

  beforeEach(angular.mock.inject(function(_$controller_) {
    // $scope = $rootScope.$new();
    $controller = _$controller_;
    gc = $controller('gameController', { });
  }));

  it ('should move player from room to room', () => {
    // create two rooms; put player in 1 and move to 2
    map = new GameSpace(
      new Room('Room 0', null, null, 1, null, null, null),
      new Room('Room 1', null, null, null, null, 0, null)
    );
    player = new Player(0);
    gc.move('N');
    assert.equal(player.room, 1);
  });

  it ('should equip player with item', () => {
    assert(false);
  });

  it ('should leave item in room when player drops it', () => {
    assert(false);
  });

});