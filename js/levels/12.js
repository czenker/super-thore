var onetwo = Mario.onetwo = function() {
  /* Sunday - Lunch Time */
  const exit = 204;
  level = new Mario.LevelOverworld({
    playerPos: [56,192],
    stageClearedLoader: Mario.onethree,
    stageFailedLoader: Mario.onetwo,
    exit: exit,
    startBackdropSprites: [
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
    castleSprites: [
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
  });
  player.pos[0] = level.playerPos[0];
  player.pos[1] = level.playerPos[1];
  vX = 0;

  level.displayMission("Super Thore will sich nach der Morgensession mit einem Freund zum Mittagessen treffen. Er ist spät dran, denn er hat seine Predigt etwas überzogen...\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07 mal wieder...");

  Mario.Buddies.placeBuddy1(level, exit+2, 11);
  
  Mario.randomizer(level, {
    exit: exit,
  });

  level.putStartBackdrop(-3);

  music.underground.pause();
  // music.overworld.currentTime = 0;
  music.overworld.play();
};
