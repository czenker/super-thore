Mario.onefour = function() {
  /* Sunday - Evening */
  const exit = 204;
  level = new Mario.LevelOverworld({
    playerPos: [56,192],
    stageClearedLoader: Mario.onefive,
    stageFailedLoader: Mario.onefour,
    exit: exit,
    startBackdropSprites: [
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

  level.displayMission("Jetzt schnell zurück zum Hauptcampus für die Abendsession. Die letzten drei Punkte von der Predigt am Vormittag müssen noch erzählt werden.");
  
  Mario.randomizer(level, {
    exit: exit,
  });

  level.putStartBackdrop(-3);

  music.underground.pause();
  // music.overworld.currentTime = 0;
  music.overworld.play();
};
