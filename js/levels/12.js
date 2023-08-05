var onetwo = Mario.onetwo = function() {
  /* Sunday - Lunch Time */
  const exit = 204;
  level = new Mario.LevelOverworld({
    playerPos: [56,192],
    stageClearedLoader: Mario.onetwo,
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
    ]
  });
  player.pos[0] = level.playerPos[0];
  player.pos[1] = level.playerPos[1];
  vX = 0;

  level.displayMission("Super Thore wants to meet his friends for dinner after church. Be quick, because his sermon took longer than expected... again...");

  Mario.randomizer(level, {
    exit: exit,
  });

  level.putStartBackdrop(-3);

  music.underground.pause();
  // music.overworld.currentTime = 0;
  music.overworld.play();
};
