(function() {
  const defaultOptions = {
    saveZoneAtStart: 10,
    exit: 204,
  }

  window.Mario.randomizer = function(level, options) {
    options = {...defaultOptions, options};

    for(let i=0; i< options.saveZoneAtStart; i++) {
      level.putFloor(i,i+1);
    }

    const flagX = options.exit - 6;

    let x = options.saveZoneAtStart;
    let levelFull = false;
    while (!levelFull) {
      const [segment_width, segment] = segments[Math.floor(Math.random()*segments.length)]();
      if (x+segment_width < flagX) {
        segment(level, x);
        x = x + segment_width;
      } else {
        levelFull = true;
      }
    }

    level.putFlagpole(flagX);
    level.putFloor(x, flagX+20);

    // add some clouds
    for(let x=randomInt(5,7); x<=flagX; x+=randomInt(7,15)) {
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
        level.putPipe(x, 13, height, Math.random() < 0.5);
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
          level.putSolidBrick(x, y, level.verticalBrickSprite);
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
          for(let y=sHeight+1;y<13;y++) {
            level.putSolidBrick(x+lowWidth+2, y, level.verticalBrickSprite);
          }
          for (let dx=1; dx<=lowWidth+1; dx++) {
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
    function() { // trees
      const gap = 3;
      const widths = [randomInt(3,6),randomInt(3,6),randomInt(3,6),randomInt(3,6)].slice(0, randomInt(3, 4));
      const width = widths.reduce(function(a, b){
        return a + b;
      }) + widths.length * gap + 1;

      return [width, (level, x) => {
        let dx = x;
        let lastHeight = 12;
        widths.forEach((w) => {
          lastHeight = randomInt(Math.max(3, lastHeight-3), 12);
          const hasCoins = Math.random() < 0.25;
          level.putTree(dx, lastHeight, w);
          for(let i=0; i<w; i++) {
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
})();
