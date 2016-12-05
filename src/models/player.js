
// let player = {
//   life: 20,
//   room: 12,
//   item: {name: null, strength: null, text: null}
// };

// module.exports = player;

export default class Player {
  constructor (room) {
    this.life = 20;
    this.room = room;
    this.item = { name: null, strength: null, text: null };
  }

  setLocation(loc) {
    this.room = loc;
  }
}