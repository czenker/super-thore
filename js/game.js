let wasGameInit = false;

//create the canvas
var canvas = document.createElement("canvas", {alpha: false});
var ctx = canvas.getContext('2d');
var updateables = [];
var fireballs = [];
var player = new Mario.Player([0,0]);

//viewport
var vX = 0,
    vY = 0,
    vWidth = 256,
    vHeight = 240;

//we might have to get the size and calculate the scaling
//but this method should let us make it however big.
//Cool!
//TODO: Automatically scale the game to work and look good on widescreen.
//TODO: fiddling with scaled sprites looks BETTER, but not perfect. Hmm.
const game_container = document.getElementById("game");
let scale = 6; // render at larger scale to allow crispy pixel art 
canvas.width = vWidth*scale;
canvas.height = vHeight*scale;
ctx.scale(scale, scale);
ctx.imageSmoothingEnabled = false;
game_container.appendChild(canvas);
let base_image = new Image();
base_image.src = 'sprites/splash.png';
base_image.onload = function(){
  ctx.drawImage(base_image, 0, 0);
}


function initGame() {
  if (wasGameInit) { return };
  wasGameInit = true;

  var requestAnimFrame = (function(){
    return window.requestAnimationFrame       ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame    ||
      window.oRequestAnimationFrame      ||
      window.msRequestAnimationFrame     ||
      function(callback){
        window.setTimeout(callback, 1000 / 60);
      };
  })();

  //load our images
  resources.load([
    'sprites/player.png',
    'sprites/enemy.png',
    'sprites/tiles.png',
    'sprites/playerl.png',
    'sprites/castle.png',
    'sprites/items.png',
    'sprites/enemyr.png',
    'sprites/munro-font.png',
  ]);

  resources.onReady(init);

  function createAudio(src, loop = false) {
    // Safari is a bit wonky. We need to play an audio file as soon as the user interacts. Once it is done
    // the AudioElement is free to play ANY audio file afterwards.
    // @see https://stackoverflow.com/a/57547943

    let audio = new Audio();
    const listener = () => {
      // the mock audio has stopped playing. Now load the real sound file
      audio.src = src;
      audio.autoplay = false;
      audio.loop = loop;
      audio.removeEventListener('ended', listener);
    }

    audio.addEventListener('ended', listener)
    audio.loop = false;
    audio.autoplay = true;
    // (This is a tiny MP3 file that is silent and extremely short - retrieved from https://bigsoundbank.com and then modified)
    audio.src = "data:audio/mpeg;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAABgAAAzIyMzUAVFNTRQAAAA8AAANMYXZmNTcuODMuMTAwAAAAAAAAAAAAAAD/80DEAAAAA0gAAAAATEFNRTMuMTAwVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQsRbAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQMSkAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV";
    return audio;
  }

  //initialize
  var lastTime;
  function init() {
    window.music = {
      overworld: createAudio('sounds/overworld.mp3', true),
      underground: createAudio('sounds/underground_bgm.ogg', true),
      clear: createAudio('sounds/stage_clear.wav'),
      death: createAudio('sounds/mariodie.wav')
    };
    window.sounds = {
      smallJump: createAudio('sounds/jump-small.wav'),
      bigJump: createAudio('sounds/jump-super.wav'),
      breakBlock: createAudio('sounds/breakblock.wav'),
      bump: createAudio('sounds/bump.wav'),
      coin: createAudio('sounds/coin.wav'),
      fireball: createAudio('sounds/fireball.wav'),
      flagpole: createAudio('sounds/flagpole.wav'),
      kick: createAudio('sounds/kick.wav'),
      pipe: createAudio('sounds/pipe.wav'),
      itemAppear: createAudio('sounds/itemAppear.wav'),
      powerup: createAudio('sounds/powerup.wav'),
      stomp: createAudio('sounds/stomp.wav')
    };
    Mario.oneone();
    lastTime = Date.now();
    main();
  }

  var gameTime = 0;

  //set up the game loop
  function main() {
    var now = Date.now();
    var dt = (now - lastTime) / 1000.0;

    update(dt);
    render();

    lastTime = now;
    requestAnimFrame(main);
  }

  function update(dt) {
    gameTime += dt;

    handleInput(dt);
    updateEntities(dt, gameTime);

    checkCollisions();
  }

  function handleInput(dt) {
    if (player.piping || player.dying || player.noInput) return; //don't accept input

    if (input.isDown('RUN')){
      player.run();
    } else {
      player.noRun();
    }
    if (input.isDown('JUMP')) {
      player.jump();
    } else {
      //we need this to handle the timing for how long you hold it
      player.noJump();
    }

    if (input.isDown('DOWN')) {
      player.crouch();
    } else {
      player.noCrouch();
    }

    if (input.isDown('LEFT')) { // 'd' or left arrow
      player.moveLeft();
    }
    else if (input.isDown('RIGHT')) { // 'k' or right arrow
      player.moveRight();
    } else {
      player.noWalk();
    }
  }

  //update all the moving stuff
  function updateEntities(dt, gameTime) {
    player.update(dt, vX);
    updateables.forEach (function(ent) {
      ent.update(dt, gameTime);
    });

    //This should stop the jump when he switches sides on the flag.
    if (player.exiting) {
      if (player.pos[0] > vX + 96)
        vX = player.pos[0] - 96
    }else if (level.scrolling && player.pos[0] > vX + 80) {
      vX = player.pos[0] - 80;
    }

    if (player.powering.length !== 0 || player.dying) { return; }
    level.items.forEach (function(ent) {
      ent.update(dt);
    });

    level.enemies.forEach (function(ent) {
      ent.update(dt, vX);
    });

    level.overlays.forEach (function(ent) {
      ent.update(dt, vX);
    })

    fireballs.forEach(function(fireball) {
      fireball.update(dt);
    });
    level.pipes.forEach (function(pipe) {
      pipe.update(dt);
    });
  }

  //scan for collisions
  function checkCollisions() {
    if (player.powering.length !== 0 || player.dying) { return; }
    player.checkCollisions();

    //Apparently for each will just skip indices where things were deleted.
    level.items.forEach(function(item) {
      item.checkCollisions();
    });
    level.enemies.forEach (function(ent) {
      ent.checkCollisions();
    });
    fireballs.forEach(function(fireball){
      fireball.checkCollisions();
    });
    level.pipes.forEach (function(pipe) {
      pipe.checkCollisions();
    });
  }

  //draw the game!
  function render() {
    updateables = [];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = level.background;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //scenery gets drawn first to get layering right.
    for(var i = 0; i < 15; i++) {
      for (var j = Math.floor(vX / 16) - 1; j < Math.floor(vX / 16) + 20; j++){
        if (level.scenery[i][j]) {
          renderEntity(level.scenery[i][j]);
        }
      }
    }

    //then items
    level.items.forEach (function (item) {
      renderEntity(item);
    });

    level.enemies.forEach (function(enemy) {
      renderEntity(enemy);
    });



    fireballs.forEach(function(fireball) {
      renderEntity(fireball);
    })

    //then we draw every static object.
    for(var i = 0; i < 15; i++) {
      for (var j = Math.floor(vX / 16) - 1; j < Math.floor(vX / 16) + 20; j++){
        if (level.statics[i][j]) {
          renderEntity(level.statics[i][j]);
        }
        if (level.blocks[i][j]) {
          renderEntity(level.blocks[i][j]);
          updateables.push(level.blocks[i][j]);
        }
      }
    }

    level.overlays.forEach (function(overlay) {
      renderEntity(overlay);
    });

    //then the player
    if (player.invincibility % 2 === 0) {
      renderEntity(player);
    }

    //Mario goes INTO pipes, so naturally they go after.
    level.pipes.forEach (function(pipe) {
      renderEntity(pipe);
    });
  }

  function renderEntity(entity) {
    entity.render(ctx, vX, vY);
  }
}

canvas.addEventListener('click', initGame);
canvas.addEventListener('touchstart', initGame);
