var levelrandomizer = Mario.randomizer = function() {
  level = new Mario.Level({
    playerPos: [56,192],
    stageClearedLoader: Mario.randomizer,
    stageFailedLoader: Mario.randomizer,
    background: "#7974FF",
    scrolling: true,
    invincibility: [144, 192, 240],
    exit: 204,
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
 });
  player.pos[0] = level.playerPos[0];
  player.pos[1] = level.playerPos[1];
  vX = 0;

  for(let i=0; i< 10; i++) {
    level.putFloor(i,i+1);
  }

  let x = 10;
  let levelFull = false;
  while (!levelFull) {
    const [segment_width, segment] = segments[Math.floor(Math.random()*segments.length)]();
    if (x+segment_width < 198) {
      segment(level, x);
      x = x + segment_width;
    } else {
      levelFull = true;
    }
  }

  level.putFlagpole(198);
  level.putFloor(x, 198+20);

  // add some clouds
  for(let x=randomInt(5,20); x<=200; x+=randomInt(7,20)) {
    const cloudSize = randomInt(0,3);
    if (cloudSize==0) {
      // big
      level.putThreeCloud(x,3);
    } else if(cloudSize == 1) {
      // medium
      level.putTwoCloud(x, 2);
    } else {
      // small
      level.putCloud(x, randomInt(2,3));
    }
  }

  music.underground.pause();
  // music.overworld.currentTime = 0;
  music.overworld.play();
};

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max+1-min))+min;
}

const segments=[
  function() { // just a hole
    const holeWidth = randomInt(2,3);
    const safezoneWidth = randomInt(1,3);
    const width = holeWidth + safezoneWidth;
    return [width, (level, x) => {
      level.putFloor(x+holeWidth, x+holeWidth+safezoneWidth);
    }]
  },
  function() { // pyramid
    const areOddQ = Math.random() < 0.5;
    const areEvenHoles = Math.random() < 0.5;
    const topHasMushroom = Math.random() < 0.5;
    const hasGoomba = Math.random() < 0.5;
    const width = 9;
    return [width, (level, x) => {
      if (areOddQ) {
        level.putQBlock(x, 9, new Mario.Bcoin([x*16, 9*16]));
        level.putQBlock(x+3, 9, new Mario.Bcoin([(x+3)*16, 9*16]));
        level.putQBlock(x+6, 9, new Mario.Bcoin([(x+6)*16, 9*16]));
        level.putQBlock(x+3, 5, topHasMushroom ? new Mario.Mushroom([(x+3)*16, 5*16]) : new Mario.Bcoin([(x+3)*16, 5*16]));
      } else {
        level.putBrick(x, 9, null);
        level.putBrick(x+3, 9, null);
        level.putBrick(x+6, 9, null);
        level.putBrick(x+3, 5, null);
      }
      if (areEvenHoles) {
        // nothing
      } else {
        level.putBrick(x+1, 9, null);
        level.putBrick(x+2, 9, null);
        level.putBrick(x+4, 9, null);
        level.putBrick(x+5, 9, null);
        level.putBrick(x+2, 5, null);
        level.putBrick(x+4, 5, null);
      }
      if (hasGoomba) {
        const goombaY = Math.random() < 0.5 || areEvenHoles ? 12 : 9;
        const goombaX = randomInt(0,5);
        level.putGoomba(x+goombaX, goombaY);
        if (Math.random() < 0.5) {
          level.putGoomba(x+goombaX+1, goombaY);
        }
      }

      level.putFloor(x, x+width);
    }]
  },
  function() { // just a pipe
    const height = randomInt(2,4);
    const width = 3;
    return [width, (level, x) => {
      level.putPipe(x, 13, height);
      level.putFloor(x, x+width);
    }]
  },
  function() { // ramp
    const height = randomInt(2,8);
    const width = height+2;
    return [width, (level, x) => {
      for(let i=1; i<=height; i++) {
        level.putWall(x+i, 13, i);
      }
      level.putFloor(x, x+width);
    }]
  },
  function() { // ramp jump
    const leftHeight = randomInt(0,3);
    const rightHeight = randomInt(leftHeight,leftHeight+3);
    const gap = 2;
    const width = leftHeight+1+gap+rightHeight+2;
    return [width, (level, x) => {
      // left ramp up
      for(let i=1; i<=leftHeight; i++) {
        level.putWall(x+i, 13, i);
      }
      level.putFloor(x, x+leftHeight+1);
      // gap
      // ...
      // right ramp down
      for(let i=rightHeight;i>0;i--) {
        level.putWall(x+leftHeight+gap+i, 13, rightHeight-i+1);
      }
      level.putFloor(x+leftHeight+gap+1, x+leftHeight+gap+rightHeight+3);
    }]
  },
  function() { // crouch part
    const lowWidth = randomInt(2,5);
    const numberGoombas=randomInt(0,2);
    const specialId=randomInt(0,3);
    let rowsOfCoins = 0;
    let hasMushroom = false;
    if (specialId == 0) {
      // nothing
    } else if (specialId == 1) {
      rowsOfCoins = 1;
    } else if (specialId == 2) {
      rowsOfCoins = 2;
    } else if (specialId == 3) {
      hasMushroom = true;
    }
    
    const hasSShape=Math.random() < 0.5;
    const sHeight=randomInt(6,7);
    const width = lowWidth+2+(hasSShape?2:0);
    return [width, (level, x) => {
      for(let y=0;y<11;y++) {
        level.putBrick(x, y);
      }
      for (let dx=1; dx<=lowWidth; dx++) {
        level.putBrick(x+dx, 10);
      }
      level.putFloor(x, x+width);
      if (rowsOfCoins > 0) {
        for (let dx=1; dx<=lowWidth; dx++) {
          level.putCoin(x+dx, 9);
          if (rowsOfCoins > 1) {
            level.putCoin(x+dx, 8);
          }
        }
      }
      if (numberGoombas > 0) {
        const dx = randomInt(0,lowWidth);
        level.putGoomba(x+dx, 12);
        if (numberGoombas > 1) {
          level.putGoomba(x+dx+1, 12);
        }
      }
      if (hasSShape) {
        for(let y=sHeight;y<13;y++) {
          level.putBrick(x+lowWidth+2, y);
        }
        for (let dx=1; dx<=lowWidth; dx++) {
          if (dx==1 && hasMushroom) {
            level.putQBlock(x+dx+1, sHeight, new Mario.Mushroom([(x+dx+1)*16, sHeight*16]));
          } else {
            level.putBrick(x+dx+1, sHeight);
          }
        }
      }
    }]
  },
  function() { // flat land
    const width = randomInt(4,12);
    const hasGoombas = true;
    const hasGold = Math.random() < 0.3;
    return [width, (level, x) => {
      level.putFloor(x, x+width);
      if (hasGoombas) {
        const goombaX = randomInt(0,width-1);
        level.putGoomba(x+goombaX, 12);
        if (Math.random() < 0.5) {
          level.putGoomba(x+goombaX+1, 12);
        }
      }
      if (hasGold) {
        const goldX = randomInt(0,width-4);
        level.putCoin(x+goldX, 9);
        level.putCoin(x+goldX+1, 8);
        level.putCoin(x+goldX+2, 8);
        level.putCoin(x+goldX+3, 9);
      }
    }]
  },
  function() { // floating platforms
    const gap = 3;
    const widths = [randomInt(1,3), randomInt(1,3), randomInt(1,3), randomInt(1,3), randomInt(1,3), randomInt(1,3)].slice(0, randomInt(3, 6));
    const width = widths.reduce(function(a, b){
      return a + b;
    }) + widths.length * gap + 1;

    return [width, (level, x) => {
      let dx = x;
      let lastHeight = 12;
      widths.forEach((w) => {
        lastHeight = randomInt(Math.max(3, lastHeight-3), 12);
        const hasCoins = Math.random() < 0.25;
        for(let i=0; i<w; i++) {
          level.putSolidBrick(dx+i, lastHeight);
          if (hasCoins) {
            level.putCoin(dx+i, lastHeight-1);
          }
        }
        dx += w+gap;
      })
      level.putFloor(dx, dx+1);
    }]
    

  },
  function() { // mountain
    const specialId = randomInt(0,2);
    let topography = [];
    let lastHeight = randomInt(0,4);
    // climbing up
    do {
      topography.push(lastHeight);
      lastHeight = randomInt(lastHeight, lastHeight+4);
    } while(lastHeight < 10);
    lastHeight = 9;
    // climbing down
    do {
      topography.push(lastHeight);
      lastHeight = randomInt(lastHeight-4, lastHeight);
    } while(lastHeight > 0);
    const width = topography.length+1;
    return [width, (level, x) => {
      let wasSpecialSpawned = false;
      let wasGoombaSpawned = false;
      level.putFloor(x, x+width);
      for(let i=0;i<topography.length;i++) {
        level.putWall(x+i, 13, topography[i]);
        if (topography[i] == 9 && !wasSpecialSpawned) {
          if (specialId == 0) {
            // a coin
            level.putCoin(x+i, 1);
          } else if (specialId == 1) {
            level.putQBlock(x+i, 1, new Mario.Mushroom([(x+i)*16, 1*16]));
          }
          wasSpecialSpawned=true;
        }
        if (!wasGoombaSpawned && Math.random() < 0.1) {
          level.putGoomba(x+i, 12-topography[i]);
          wasGoombaSpawned = true;
        }
      }
    }];
  },
  function() { // field of gold - you have to be lucky to get high enough
    const width = randomInt(2,6);
    const platformHeight = randomInt(3,6);
    const coinRows = randomInt(1,3);
    return [width+1, (level, x) => {
      level.putFloor(x, x+width+1);
      for(let dx=0; dx< width; dx++) {
        level.putBrick(x+dx, platformHeight, null);
        
        for(let dy=0;dy<coinRows;dy++) {
          level.putCoin(x+dx, platformHeight-1-dy);
        }
      }
    }]
  },
  function() { // jumping left/right
    const gapWidth = randomInt(10,12);
    const rightHeight = randomInt(9,10);
    const leftHeight = randomInt(6,7);
    const hasGoomba = randomInt(0,2);
    const hasLeftCoin = randomInt(0,2);
    const hasRightCoin = randomInt(0,2);
    const width = gapWidth+1;

    return [width, (level, x) => {
      level.putFloor(x, x+1);
      level.putSolidBrick(x, leftHeight);
      if (hasLeftCoin > 0) {
        level.putCoin(x+1, leftHeight-3);
        if (hasLeftCoin > 1) {
          level.putCoin(x+2, leftHeight-4);
        }
      }
      level.putSolidBrick(x+3, rightHeight);
      if (hasRightCoin > 0) {
        level.putCoin(x+2, rightHeight-3);
        if (hasRightCoin > 1) {
          level.putCoin(x+1, rightHeight-4);
        }
      }
      for(let dx=3;dx<gapWidth;dx++) {
        level.putSolidBrick(x+dx, 3);
      }
      level.putFloor(x+gapWidth, x+gapWidth+1);
      if (hasGoomba > 0) {
        const goombaX = randomInt(5, gapWidth-1);
        level.putGoomba(x+goombaX, 2);
        if (hasGoomba > 1) {
          level.putGoomba(x+goombaX+1, 2);
        }
      }
      // add a cloud
      
      const cloudSize = randomInt(0,2);
      if (cloudSize==0) {
        // big
        level.putThreeCloud(randomInt(x+3, x+gapWidth-3),randomInt(6,9));
      } else if(cloudSize == 1) {
        // medium
        level.putTwoCloud(randomInt(x+3, x+gapWidth-3),randomInt(6,9));
      } else {
        // small
        level.putCloud(randomInt(x+3, x+gapWidth-3),randomInt(6,9));
      }
    }];
  },
];
