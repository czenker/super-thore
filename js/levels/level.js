(function() {
  var Level = Mario.Level = function(options) {
    this.playerPos = options.playerPos;
    this.scrolling = options.scrolling;
    this.loader = options.loader;
    this.stageClearedLoader = options.stageClearedLoader;
    this.stageFailedLoader = options.stageFailedLoader;
    this.background = options.background;
    this.exit = options.exit;

    this.floorSprite = options.floorSprite;
    this.cloudSprite = options.cloudSprite;
    this.wallSprite = options.wallSprite;
    this.brickSprite = options.brickSprite;
    this.verticalBrickSprite = options.verticalBrickSprite;
    this.rubbleSprite = options.rubbleSprite;
    this.brickBounceSprite = options.brickBounceSprite;
    this.ublockSprite = options.ublockSprite;
    this.platformSprite = options.platformSprite;
    this.superShroomSprite = options.superShroomSprite;
    this.fireFlowerSprite = options.fireFlowerSprite;
    this.starSprite = options.starSprite;
    this.coinSprite = options.coinSprite;
    this.bcoinSprite = options.bcoinSprite;
    this.goombaSprite = options.goombaSprite;
    this.koopaSprite = options.koopaSprite;
    this.piranhaSprite = options.piranhaSprite;

    //prop pipe sprites, to be phased out
    this.pipeLEndSprite = options.pipeLEndSprite;
    this.pipeREndSprite = options.pipeREndSprite;
    this.pipeLMidSprite = options.pipeLMidSprite;
    this.pipeRMidSprite = options.pipeRMidSprite;

    this.treeLEndSprite = options.treeLEndSprite,
    this.treeMidSprite = options.treeMidSprite,
    this.treeREndSprite = options.treeREndSprite,
    this.treeStumpSprite = options.treeStumpSprite,

    //real pipe sprites, use these.
    this.pipeUpMid = options.pipeUpMid;
    this.pipeSideMid = options.pipeSideMid;
    this.pipeLeft = options.pipeLeft;
    this.pipeTop = options.pipeTop;

    this.flagpoleSprites = options.flagPoleSprites;

    this.LPipeSprites = options.LPipeSprites;
    this.cloudSprites = options.cloudSprites;
    this.hillSprites = options.hillSprites;
    this.bushSprite = options.bushSprite;
    this.bushSprites = options.bushSprites;
    this.castleSprites = options.castleSprites;
    this.startBackdropSprites = options.startBackdropSprites;
    this.qblockSprite = options.qblockSprite;

    this.invincibility = options.invincibility;
    this.start = options.start;
    this.tintColor = options.tintColor;
    this.isStarted = false;
    this.statics = [];
    this.scenery = [];
    this.platforms = [];
    this.blocks = [];
    this.enemies = [];
    this.items = [];
    this.pipes = [];
    this.overlays = [];

    for (var i = 0; i < 15; i++) {
      this.statics[i] = [];
      this.scenery[i] = [];
      this.blocks[i] = [];
    }

    if (options.timeLimit) {
      this.overlays.push(new Mario.TimerOverlay(options.timeLimit));
    }
  };

  Level.prototype.displayMission = function(text) {
    this.overlays.push(new Mario.MissionOverlay(text));
  }

  Level.prototype.putFloor = function(start, end) {
    for (var i = start; i < end; i++) {
      this.statics[13][i] = new Mario.Floor([16*i,208], this.floorSprite);
      this.statics[14][i] = new Mario.Floor([16*i,224], this.floorSprite);
    }
  };

  Level.prototype.putGoomba = function(x, y) {
    this.enemies.push(new Mario.Goomba([16*x, 16*y], this.goombaSprite() ));
  };

  Level.prototype.putKoopa = function(x, y) {
    this.enemies.push(new Mario.Koopa([16*x, 16*y], this.koopaSprite(), false));
  };

  Level.prototype.putPiranha = function(x, y) {
    this.enemies.push(new Mario.Piranha([16*x, 16*y], this.piranhaSprite() ));
  };

  Level.prototype.putWall = function(x, y, height) {
    //y is the bottom of the wall in this case.
    for (var i = y-height; i < y; i++) {
      this.statics[i][x] = new Mario.Floor([16*x, 16*i], this.wallSprite);
    }
  };

  Level.prototype.putPipe = function(x, y, height, withPiranha) {
    for (var i = y - height; i < y; i++) {
      if (i === y - height) {
        this.statics[i][x] = new Mario.Floor([16*x, 16*i], this.pipeLEndSprite);
        this.statics[i][x+1] = new Mario.Floor([16*x+16, 16*i], this.pipeREndSprite);
      } else {
        this.statics[i][x] = new Mario.Floor([16*x, 16*i], this.pipeLMidSprite);
        this.statics[i][x+1] = new Mario.Floor([16*x+16, 16*i], this.pipeRMidSprite);
      }
    }
    if (withPiranha) {
      this.putPiranha(x, y-height-1);
    }
  };

  //sometimes, pipes don't go straight up and down.
  Level.prototype.putLeftPipe = function(x,y) {
    this.statics[y][x] = new Mario.Floor([16*x, 16*y], this.LPipeSprites[0]);
    this.statics[y+1][x] = new Mario.Floor([16*x,16*(y+1)], this.LPipeSprites[1]);
    this.statics[y][x+1] = new Mario.Floor([16*(x+1),16*y], this.LPipeSprites[2]);
    this.statics[y+1][x+1] = new Mario.Floor([16*(x+1),16*(y+1)], this.LPipeSprites[3]);
    this.statics[y][x+2] = new Mario.Floor([16*(x+2),16*y], this.LPipeSprites[4]);
    this.statics[y+1][x+2] = new Mario.Floor([16*(x+2),16*(y+1)], this.LPipeSprites[5]);
  };

  Level.prototype.putCoin = function(x, y) {
    this.items.push(new Mario.Coin(
      [x*16, y*16],
      this.coinSprite()
    ));
  };

  Level.prototype.putCloud = function(x, y) {
    this.scenery[y][x] = new Mario.Prop([x*16, y*16], this.cloudSprite);
  };

  Level.prototype.putQBlock = function(x, y, item) {
    this.blocks[y][x] = new Mario.Block( {
      pos: [x*16, y*16],
      item: item,
      sprite: this.qblockSprite,
      usedSprite: this.ublockSprite
    });
  };

  Level.prototype.putBrick = function(x,y,item,sprite) {
    sprite = sprite || this.brickSprite;
    this.blocks[y][x] = new Mario.Block({
      pos: [x*16, y*16],
      item: item,
      sprite: sprite,
      bounceSprite: this.brickBounceSprite,
      usedSprite: this.ublockSprite,
      breakable: !item
    });
  };

  Level.prototype.putSolidBrick = function(x,y,sprite) {
    sprite = sprite || this.brickSprite;
    this.blocks[y][x] = new Mario.Block({
      pos: [x*16, y*16],
      sprite: sprite,
      bounceSprite: this.brickBounceSprite,
      usedSprite: this.ublockSprite,
      breakable: false
    });
  };

  Level.prototype.putBigHill = function(x, y) {
    var px = x*16, py = y*16;
    this.scenery[y][x] = new Mario.Prop([px, py], this.hillSprites[0]);
    this.scenery[y][x+1] = new Mario.Prop([px+16, py], this.hillSprites[3]);
    this.scenery[y-1][x+1] = new Mario.Prop([px+16, py-16], this.hillSprites[0]);
    this.scenery[y][x+2] = new Mario.Prop([px+32, py], this.hillSprites[4]);
    this.scenery[y-1][x+2] = new Mario.Prop([px+32, py-16], this.hillSprites[3]);
    this.scenery[y-2][x+2] = new Mario.Prop([px+32, py-32], this.hillSprites[1]);
    this.scenery[y][x+3] = new Mario.Prop([px+48, py], this.hillSprites[5]);
    this.scenery[y-1][x+3] = new Mario.Prop([px+48, py-16], this.hillSprites[2]);
    this.scenery[y][x+4] = new Mario.Prop([px+64, py], this.hillSprites[2]);
  };

  Level.prototype.putBush = function(x, y) {
    this.scenery[y][x] = new Mario.Prop([x*16, y*16], this.bushSprite);
  };

  Level.prototype.putThreeBush = function(x,y) {
    px = x*16;
    py = y*16;
    this.scenery[y][x] = new Mario.Prop([px, py], this.bushSprites[0]);
    this.scenery[y][x+1] = new Mario.Prop([px+16, py], this.bushSprites[1]);
    this.scenery[y][x+2] = new Mario.Prop([px+32, py], this.bushSprites[1]);
    this.scenery[y][x+3] = new Mario.Prop([px+48, py], this.bushSprites[1]);
    this.scenery[y][x+4] = new Mario.Prop([px+64, py], this.bushSprites[2]);
  };

  Level.prototype.putTwoBush = function(x,y) {
    px = x*16;
    py = y*16;
    this.scenery[y][x] = new Mario.Prop([px, py], this.bushSprites[0]);
    this.scenery[y][x+1] = new Mario.Prop([px+16, py], this.bushSprites[1]);
    this.scenery[y][x+2] = new Mario.Prop([px+32, py], this.bushSprites[1]);
    this.scenery[y][x+3] = new Mario.Prop([px+48, py], this.bushSprites[2]);
  };

  Level.prototype.putSmallHill = function(x, y) {
    var px = x*16, py = y*16;
    this.scenery[y][x] = new Mario.Prop([px, py], this.hillSprites[0]);
    this.scenery[y][x+1] = new Mario.Prop([px+16, py], this.hillSprites[3]);
    this.scenery[y-1][x+1] = new Mario.Prop([px+16, py-16], this.hillSprites[1]);
    this.scenery[y][x+2] = new Mario.Prop([px+32, py], this.hillSprites[2]);
  };

  Level.prototype.putTwoCloud = function(x,y) {
    px = x*16;
    py = y*16;
    this.scenery[y][x] = new Mario.Prop([px, py], this.cloudSprites[0]);
    this.scenery[y][x+1] = new Mario.Prop([px+16, py], this.cloudSprites[1]);
    this.scenery[y][x+2] = new Mario.Prop([px+32, py], this.cloudSprites[1]);
    this.scenery[y][x+3] = new Mario.Prop([px+48, py], this.cloudSprites[2]);
  };

  Level.prototype.putThreeCloud = function(x,y) {
    px = x*16;
    py = y*16;
    this.scenery[y][x] = new Mario.Prop([px, py], this.cloudSprites[0]);
    this.scenery[y][x+1] = new Mario.Prop([px+16, py], this.cloudSprites[1]);
    this.scenery[y][x+2] = new Mario.Prop([px+32, py], this.cloudSprites[1]);
    this.scenery[y][x+3] = new Mario.Prop([px+48, py], this.cloudSprites[1]);
    this.scenery[y][x+4] = new Mario.Prop([px+64, py], this.cloudSprites[2]);
  };

  Level.prototype.putRealPipe = function(x, y, length, direction, destination) {
    px = x*16;
    py = y*16;
    this.pipes.push(new Mario.Pipe({
      pos: [px, py],
      length: length,
      direction: direction,
      destination: destination
    }));
  }

  Level.prototype.putTree = function(x, y, length) {
    px = x*16;
    py = y*16;

    for (let i=0;i<length; i++) {
      let sprite = this.treeMidSprite;
      if (i === 0) {
        sprite = this.treeLEndSprite;
      }
      if (i === length-1) {
        sprite = this.treeREndSprite;
      }
      this.blocks[y][x+i] = new Mario.Block({
        pos: [(x+i)*16, y*16],
        sprite: sprite,
        breakable: false
      });
    }
    // draw stump
    let stumpMin = x+1;
    let stumpMax = x+length-1;
    if (length < 3) {
      // for small platforms: don't have overhanging green
      stumpMin = x;
      stumpMax = x+length;
    }

    for (let xStump=stumpMin;xStump<stumpMax;xStump++) {
      for (var i = y+1; i < 15; i++) {
        this.statics[i][xStump] = new Mario.Floor([16*xStump, 16*i], this.treeStumpSprite);
      }
    }

  }

  Level.prototype.putFlagpole = function(x) {
    this.statics[12][x] = new Mario.Floor([16*x, 192], this.wallSprite);
    for (i=3; i < 12; i++) {
      this.scenery[i][x] = new Mario.Prop([16*x, 16*i], this.flagpoleSprites[1])
    }
    this.scenery[2][x] = new Mario.Prop([16*x, 32], this.flagpoleSprites[0]);
    this.items.push(new Mario.Flag(16*x));
    // "castle"
    for(let dy=0;dy<5;dy++) {
      for(let dx=0;dx<5;dx++) {
        let i = dy*5+dx;
        let pos_x = x+4+dx;
        let pos_y = 12-dy;
        this.scenery[pos_y][pos_x] = new Mario.Prop([16*pos_x, 16*pos_y], this.castleSprites[i]);
      }
    }
  }

  Level.prototype.putStartBackdrop = function(x) {
    // "castle"
    for(let dy=0;dy<5;dy++) {
      for(let dx=0;dx<5;dx++) {
        let i = dy*5+dx;
        let pos_x = x+4+dx;
        let pos_y = 12-dy;
        this.scenery[pos_y][pos_x] = new Mario.Prop([16*pos_x, 16*pos_y], this.startBackdropSprites[i]);
      }
    }
  }

  Level.prototype.putPlatform = function(x, y, options) {
    options = {...options, ...{
      pos: [x*16, y*16],
      sprite: this.platformSprite,
    }}
    this.platforms.push(new Mario.Platform(options));
  }

  Level.prototype.start = function() {
    if (this.isStarted) { return; }
    this.isStarted = true;
    if (this.start) {
      this.start();
    }
  }

  Level.prototype.onStageCleared = function() {
    // onStageCleared
    // TODO: submit collected coins, points, etc
    this.stageClearedLoader.call(this);
  }

  Level.prototype.onStageFailed = function() {
    // onStageFailed
    // TODO: restore coins, points, etc from end of last level
    this.stageFailedLoader.call(this);
  }

})();
