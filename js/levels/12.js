var onetwo = Mario.onetwo = function() {
  /* Sunday - Lunch Time */
  const exit = 204;
  level = new Mario.LevelOverworld({
    playerPos: [56,192],
    stageClearedLoader: Mario.onetwo,
    stageFailedLoader: Mario.onetwo,
    exit: exit
  });
  player.pos[0] = level.playerPos[0];
  player.pos[1] = level.playerPos[1];
  vX = 0;

  level.displayMission("Super Thore wants to meet his friends for dinner after church. Be quick, because his sermon took longer than expected... again...");

  Mario.randomizer(level, {
    exit: exit,
  });

  music.underground.pause();
  // music.overworld.currentTime = 0;
  music.overworld.play();
};
