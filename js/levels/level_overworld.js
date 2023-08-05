(function() {
  const defaultOptions = {
    background: "#7974FF",
    scrolling: true,
    invincibility: [144, 192, 240],
    floorSprite:  new Mario.Sprite('sprites/tiles.png', [0,0],[16,16],0),
    cloudSprite:  new Mario.Sprite('sprites/tiles.png', [0,320],[48,32],0),
    wallSprite: new Mario.Sprite('sprites/tiles.png', [0, 16],[16,16],0),
    brickSprite: new Mario.Sprite('sprites/tiles.png', [16, 0], [16,16], 0),
    brickBounceSprite: new Mario.Sprite('sprites/tiles.png',[32,0],[16,16],0),
    rubbleSprite: function () {
      return new Mario.Sprite('sprites/items.png', [64,0], [8,8], 3, [0,1])
    },
    ublockSprite: new Mario.Sprite('sprites/tiles.png', [48, 0], [16,16],0),
    superShroomSprite: new Mario.Sprite('sprites/items.png', [0,0], [16,16], 0),
    fireFlowerSprite: new Mario.Sprite('sprites/items.png', [0,32], [16,16], 20, [0,1,2,3]),
    starSprite: new Mario.Sprite('sprites/items.png', [0,48], [16,16], 20, [0,1,2,3]),
    pipeLEndSprite: new Mario.Sprite('sprites/tiles.png', [0, 128], [16,16], 0),
    pipeREndSprite: new Mario.Sprite('sprites/tiles.png', [16, 128], [16,16], 0),
    pipeLMidSprite: new Mario.Sprite('sprites/tiles.png', [0, 144], [16,16], 0),
    pipeRMidSprite: new Mario.Sprite('sprites/tiles.png', [16, 144], [16,16], 0),

    pipeUpMid: new Mario.Sprite('sprites/tiles.png', [0, 144], [32,16], 0),
    pipeSideMid: new Mario.Sprite('sprites/tiles.png', [48, 128], [16,32], 0),
    pipeLeft: new Mario.Sprite('sprites/tiles.png', [32, 128], [16,32], 0),
    pipeTop: new Mario.Sprite('sprites/tiles.png', [0, 128], [32,16], 0),
    qblockSprite: new Mario.Sprite('sprites/tiles.png', [384, 0], [16,16], 8, [0,0,0,0,1,2,1]),
    coinSprite: function() {
      return new Mario.Sprite('sprites/items.png', [0,96],[16,16], 20,[0,1,2,3]);
    },
    bcoinSprite: function() {
      return new Mario.Sprite('sprites/items.png', [0,112],[16,16], 20,[0,1,2,3]);
    },
    cloudSprites:[
      new Mario.Sprite('sprites/tiles.png', [0,320],[16,32],0),
      new Mario.Sprite('sprites/tiles.png', [16,320],[16,32],0),
      new Mario.Sprite('sprites/tiles.png', [32,320],[16,32],0)
    ],
    hillSprites: [
      new Mario.Sprite('sprites/tiles.png', [128,128],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [144,128],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [160,128],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [128,144],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [144,144],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [160,144],[16,16],0)
    ],
    bushSprite: new Mario.Sprite('sprites/tiles.png', [176, 144], [48, 16], 0),
    bushSprites: [
     new Mario.Sprite('sprites/tiles.png', [176,144], [16,16],0),
     new Mario.Sprite('sprites/tiles.png', [192,144], [16,16],0),
     new Mario.Sprite('sprites/tiles.png', [208,144], [16,16],0)
    ],
    castleSprites: [
      new Mario.Sprite('sprites/castle.png', [0,64], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [16,64], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [32,64], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [48,64], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [64,64], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [0,48], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [16,48], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [32,48], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [48,48], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [64,48], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [0,32], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [16,32], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [32,32], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [48,32], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [64,32], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [0,16], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [16,16], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [32,16], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [48,16], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [64,16], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [0,0], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [16,0], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [32,0], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [48,0], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [64,0], [16,16],0)
    ],
    goombaSprite: function() {
      return new Mario.Sprite('sprites/enemy.png', [0, 16], [16,16], 3, [0,1]);
    },
    koopaSprite: function() {
      return new Mario.Sprite('sprites/enemy.png', [96,0], [16,32], 2, [0,1]);
    },
    flagPoleSprites: [
      new Mario.Sprite('sprites/tiles.png', [256, 128], [16,16], 0),
      new Mario.Sprite('sprites/tiles.png', [256, 144], [16,16], 0),
      new Mario.Sprite('sprites/items.png', [128, 32], [16,16], 0)
    ]
  };

  var LevelOverworld = Mario.LevelOverworld = function(options) {
    options = {...defaultOptions, ...options};
    
    Mario.Level.call(this, options);
  };

  LevelOverworld.prototype = Mario.Level.prototype; // inherit all methods from level...
  LevelOverworld.prototype.constructor = LevelOverworld; // ...but use our own consturctor

})();
