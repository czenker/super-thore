Mario.onethree = function() {
  /* Sunday - Afternoon */
  const exit = 204;
  level = new Mario.LevelOverworld({
    playerPos: [56,192],
    stageClearedLoader: Mario.onefour,
    stageFailedLoader: Mario.onethree,
    exit: exit,
    timeLimit: 300,
    startBackdropSprites: [
      new Mario.Sprite('sprites/castle.png', [80,64], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [96,64], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [112,64], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [128,64], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [144,64], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [80,48], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [96,48], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [112,48], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [128,48], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [144,48], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [80,32], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [96,32], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [112,32], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [128,32], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [144,32], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [80,16], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [96,16], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [112,16], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [128,16], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [144,16], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [80,0], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [96,0], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [112,0], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [128,0], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [144,0], [16,16],0)
    ],
    castleSprites: [
      new Mario.Sprite('sprites/castle.png', [160,64], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [176,64], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [192,64], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [208,64], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [224,64], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [160,48], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [176,48], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [192,48], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [208,48], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [224,48], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [160,32], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [176,32], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [192,32], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [208,32], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [224,32], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [160,16], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [176,16], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [192,16], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [208,16], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [224,16], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [160,0], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [176,0], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [192,0], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [208,0], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [224,0], [16,16],0)
    ],
  });
  player.pos[0] = level.playerPos[0];
  player.pos[1] = level.playerPos[1];
  vX = 0;

  level.displayMission("Nach dem Mittag trifft sich Super Thore mit seinem neuen Campus Pastor, um in der neusten Location am Nachmittag zu predigen.");

  Mario.Buddies.placeNewCampusBuddy(level, exit+1, 11);
  
  Mario.randomizer(level, {
    exit: exit,
  });

  level.putStartBackdrop(-3);

  music.underground.pause();
  // music.overworld.currentTime = 0;
  music.overworld.play();
};
