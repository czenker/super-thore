(function() {
  if (typeof Mario === 'undefined')
  window.Mario = {};

  var TimerOverlay = Mario.TimerOverlay = function(timeout) {
    this.timeout = timeout;
  };

  TimerOverlay.prototype.render = function(ctx, vX, vY) {
    let shouldDisplay = this.timeout > 15 || Math.ceil(this.timeout*6) - (this.timeout*6) < 0.5;

    Mario.MarioFont.render(ctx, "Time", 10, 10);
    if (shouldDisplay) {
      const time = Math.ceil(this.timeout);
      let text = "";
      if (time < 100) {
        text += "0";
      }
      if (time < 10) {
        text += "0";
      }
      text += time;
      Mario.MarioFont.render(ctx, text, 14, 20);
    }
  };

  TimerOverlay.prototype.update = function(dt, vX) {
    if (vX === 0) {
      // we don't start the time until the player has moved
      return;
    }
    this.timeout -= dt;
    if (this.timeout <= 0) {
      this.timeout = 0;
      if (!player.noInput) {
        // if player has not yet finished the level
        player.die();
      }
    }
  };
})();
