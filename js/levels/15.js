Mario.onefive = function() {
  /* Sunday - Night */
  const exit = 204;
  level = new Mario.LevelOverworld({
    background: "#3c3a80", // dark blue, because it is night
    tintColor: '#00001133',
    playerPos: [56,192],
    stageClearedLoader: Mario.freeplay,
    stageFailedLoader: Mario.onefive,
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
      new Mario.Sprite('sprites/castle.png', [240,64], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [256,64], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [272,64], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [288,64], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [304,64], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [240,48], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [256,48], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [272,48], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [288,48], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [304,48], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [240,32], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [256,32], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [272,32], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [288,32], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [304,32], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [240,16], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [256,16], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [272,16], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [288,16], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [304,16], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [240,0], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [256,0], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [272,0], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [288,0], [16,16],0),
      new Mario.Sprite('sprites/castle.png', [304,0], [16,16],0)
    ],
  });
  player.pos[0] = level.playerPos[0];
  player.pos[1] = level.playerPos[1];
  vX = 0;

  level.displayMission("Der Tag ist geschafft! Super Thore hat alle Predigten gehalten. Jetzt schnell nach Hause.");
  Mario.Buddies.placeSpouse(level, exit+1, 11);
  
  Mario.randomizer(level, {
    exit: exit,
  });

  level.putStartBackdrop(-3);

  music.underground.pause();
  // music.overworld.currentTime = 0;
  music.overworld.play();
};
