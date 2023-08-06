(function() {
  if (typeof Mario === 'undefined')
    window.Mario = {};

  window.Mario.Buddies = {
    placeBuddy1: function(level, vX, vY) {
      // @TODO: should not be a block, but it does no harm after the level ends
      level.blocks[vY][vX] = new Mario.Block({
        pos: [(vX)*16, vY*16],
        sprite: new Mario.Sprite('sprites/buddies.png', [80,0], [16,32], 3, [0,1,2,0,0,0,2,0,1,0]),
      });
    },
    placeNewCampusBuddy: function(level, vX, vY) {
      // @TODO: should not be a block, but it does no harm after the level ends
      level.blocks[vY][vX] = new Mario.Block({
        pos: [(vX)*16, vY*16],
        sprite: new Mario.Sprite('sprites/buddies.png', [80,32], [16,32], 4, [0,0,0,1,2,0,0,0,0,0,0,1,1,2,2]),
      });
    },
    placeSpouse: function(level, vX, vY) {
      // @TODO: should not be a block, but it does no harm after the level ends
      level.blocks[vY][vX] = new Mario.Block({
        pos: [(vX)*16, vY*16],
        sprite: new Mario.Sprite('sprites/buddies.png', [80,64], [16,32], 5, [0,0,0,1,0,0,0,0,2,0,1,0,0,0,0,0,2]),
      });
    },
    placeDog: function(level, vX, vY) {
      // @TODO: should not be a block, but it does no harm after the level ends
      level.blocks[vY][vX] = new Mario.Block({
        pos: [(vX)*16, vY*16],
        sprite: new Mario.Sprite('sprites/buddies.png', [80,112], [16,16], 6, [0,1, 0,2]),
      });
    },
  }

})();
