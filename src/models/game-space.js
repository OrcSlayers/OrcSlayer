import Monster from './monster';
import Room from './room';
import Item from './item';

let Zero = new Room(
  '  a pristine alchemy lab, full of glassware coursing with solutions of every color.  Books, balances, and quills litter the floor.  It has reddish cherry wood doors on the south and east sides.',
  null,
  new Monster(
    'alchemist', 
    6, 
    '  a wizened alchemist with a great grey beard is sitting at a lab bench, making notes with a quill in a parchment.', 
    'The alchemist\'s bloody body lives slumped over his lab bench.',
    new Item(
      'clear potion', 
      1, 
      '  A flask containing a clear potion, or water, is sticking out of the dead alchemists\'s pocket.'
    ),
    ''
  ),
  null,
  1,
  4,
  null
);

let One = new Room(
  '  a very decrepit alchemy lab, full of broken flasks, beakers, and alembics.  A corrosive substance is dripping out of a broken flask and smoking every time a drop hits the stone floor.  It has oaken doors on ever side but to the north.',
  new Item(
    'red potion', 
    1, 
    '  A red potion in a vial sits on a marble pedestal.'
  ),
  null,
  null,
  2,
  5,
  0
);

let Two = new Room(
  '  a dark forge, lit only by the orange and red glow of the giant furnace, full of liquid ore.  You seer large iron doors to the east and west.  A large, worn anvil stands in the center of the room.  The body of an armored knigh lies dead on the floor by the anvil.',
  null,
  new Monster(
    'Troll', 
    65, 
    '  A huge, ferocious troll stands in the back of the room wielding a giant warhammer, terryfying expression on his (her?) face.',
    ' The huge body of the troll lies across the anvil in the center of the room.  His hammer is too big for you to carry.',
    null,
    ''
  ),
  null,
  3,
  null,
  1
);

let Three = new Room(
  '  a simple dining room with white painted doors to the south and west. A table, littered with food and wine stands against the eastern wall.',
  null,
  new Monster(
    'white knight',
    30,
    '  A knight, in bright, silvery armor stands up from the table as you enter, his gauntleted hand resting on the hilt of his longsword.',
    '  A knight in dented armor lies dead on teh floor by the table.', 
    new Item(
      'long sword', 
      20,
      ' The knights deadly-looking long sword lies on the ground next to his body.'
    ),
    ''
  ),
  null,
  null,
  7,
  2
);

let Four = new Room(
  '  a totally unadorned room with simple wooden doors on the north and east walls.  How boring!',
  null,
  null,
  0,
  5,
  null,
  null
);

let Five = new Room(
  ' a bright entryway with doors on all four sides.  Dusty light streams down from the stained glass dome, illuminating a spinning wheel sitting on a large intricate carpet.  ',
  null,
  new Monster(
    'maiden', 
    8, 
    '  A beautiful maiden is standing in the center of the room.  She backs away from you with a terrified expression.', 
    '  The formerly beautiful dead maiden lays face down on the blood-stained carpet.',
    '',
    new Item(
      'pearl-handled dagger',
      8, 
      '  A glittering dagger with a large pearl on the pommel lays on the carpet several feet from the dead maiden.'
    ),
    ''
  ),
  1,
  6,
  9,
  4
);

let Six = new Room(
  '  a large room, with only one door.  The floor is covered in straw and huge piles of dung and ',
  null,
  new Monster(
    'elephant',
    35,
    ' a huge bull elephant!',
    '  the remains of the majestic creature lie on the ground.  You feel deeply ashamed.  There is nothing work taking.  Too late do you realize this was not the best way to acknowledge the elephant in the room.', 
    'I\'m the elephant in the room',
    null,
    ''
  ),
  null,
  null,
  null,
  5
);

let Seven = new Room(
  '',
  null,
  null,
  3,
  null,
  11,
  null
);

let Eight = new Room(
  ' a suprisingly well-kept study with only one door, the one you came from. There are two chairs facing a stone hearth on the North wall of the room.  The fire in the hearth appears to have recently gone out, although nothing but warm ashes remain.',
  new Item(
    'turkey drumstick', 
    1,
    '  A delicious-smelling turkey drumstick sits on a plate on one of the chairs.'
  ),
  null,
  null,
  null,
  12,
  null
);

let Nine = new Room(
  ' a bare room with a ragged indecipherable tapestry on the west wall and doors on the north and south sides.',
  null,
  new Monster(
    'Orc',
    16,
    '  A savage orc warrior is standing in a threatening position at the center of the room with an axe in each hand. ',
    '  The newly-dead body of the orc warrior lies face-up on the floor, his eyes open but unseeing.',
    'Feeeeeble one, i are orc. I are too hungry to talk to you! What doo youuuu wantt?!?', 
    new Item(
      'sharp axe',
      10,
      '  A sharp and savage-looking orcish hand axe lies besides the orcs\'s outstretched hand.'
    ),
    'turkey drumstick' 
  ),
  5,
  null,
  13,
  null
);

let Ten = new Room(
  '',
  null,
  null,
  null,
  11,
  14,
  null
);

let Eleven = new Room(
  '',
  null,
  null,
  7,
  null,
  15,
  10
);

let Twelve = new Room(
  ' a dark and foul-smelling room.  The source of the smell is a bloated corpse, decomposing in the Northwest corner of the room.  There are doors on  the North and East sides of the room.',
  null,
  null,
  8,
  13,
  null,
  null
);

let Thirteen = new Room(
  ' a room filled with ancient implements of battle.  Old oxidized axes and swords, long ago rusted to obscure orange shapes line the walls of the chamber.  Old, notched wooden doors are found on the north and west walls.  Several mildewy practice dummies stand halfway erect in the center of the room, leaking straw.',
  new Item(
    'rusty sword',
    5,
    '  A rusty, but functional, iron short sword is sticking out of one of the practice dummies.'
  ),
  null,
  9,
  null,
  null,
  12
);

let Fourteen = new Room(
  '',
  null,
  null,
  10,
  null,
  null,
  null
);

let Fifteen = new Room(
  '',
  null,
  null,
  11,
  null,
  null,
  null
);

export default class GameSpace {
  constructor () {
    this.rooms = [Zero, One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Eleven, Twelve, Thirteen, Fourteen, Fifteen];
    this.startLocation = 12;
  }
}
//module.exports = rooms;

//sword, turkey drumstick, axe, dagger
