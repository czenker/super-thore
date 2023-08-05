Mario.freeplay = function() {
  /* Freeplay */
  const exit = 204;
  level = new Mario.LevelOverworld({
    playerPos: [56,192],
    stageClearedLoader: Mario.freeplay,
    stageFailedLoader: Mario.freeplay,
    exit: exit,
  });
  player.pos[0] = level.playerPos[0];
  player.pos[1] = level.playerPos[1];
  vX = 0;

  level.displayMission("Freeplay. Thanks for playing. There might be more content soon.");
  
  Mario.randomizer(level, {
    exit: exit,
  });

  music.underground.pause();
  // music.overworld.currentTime = 0;
  music.overworld.play();
};
