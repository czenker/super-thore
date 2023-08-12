(function() {
  if (typeof Mario === 'undefined')
  window.Mario = {};

  var Piranha = Mario.Piranha = function(pos, sprite) {
    Mario.Entity.call(this, {
      pos: pos,
      sprite: sprite,
      hitbox: [9,8,14,24]
    });
    this.cycle = 1; // 1 -> up, -1 -> down, 2 -> stop on top, -2 -> hide
    this.yOffset = -8; // start hidden
    this.timeout = 0;
    this.speed = 15 // pixels per second
  };

  Piranha.prototype.render = function(ctx, vX, vY) {
    this.sprite.render(ctx, this.pos[0]+8, this.pos[1], vX, vY+this.yOffset);
  };

  Piranha.prototype.update = function(dt, vX) {
    if (this.pos[0] - vX > 336) { //if we're too far away, do nothing.
      return;
    } 
    if (this.cycle === 1) {
      // if rising
      this.yOffset = this.yOffset + this.speed * dt;
      if (this.yOffset >= 15)  {
        this.yOffset = 15;
        this.cycle = 2; // stay on top
        this.timeout = 0.5;
      }
    } else if(this.cycle == 2) {
      // if staying on top
      this.timeout -= dt;
      if (this.timeout <= 0) {
        this.cycle = -1;
      }
    } else if (this.cycle === -1) {
      // if retreating
      this.yOffset = this.yOffset - this.speed * dt;
      if (this.yOffset <= -8)  {
        this.yOffset == -8;
        this.cycle = -2;
        this.timeout = 0.5;
      }
    } else if (this.cycle == -2) {
      // if hiding
      this.timeout -= dt;

      // piranha does not emerge if player is close
      if (this.timeout <= 0 && !this.isPlayerClose()) {
        this.cycle = 1;
      }
    }
    this.sprite.update(dt);
  };

  Piranha.prototype.isHidden = function() {
    return this.yOffset <= -6;
  }
  Piranha.prototype.isPlayerClose = function() {
    return player.pos[0] > this.pos[0] - 24 && player.pos[0] < this.pos[0] + 40;
  }

  Piranha.prototype.checkCollisions = function() {
    if (this.isHidden()) {
      // no collision detection if hidden
      return;
    }
    this.isCollideWith(player);
  };

  Piranha.prototype.isCollideWith = function(ent) {
    if (ent instanceof Mario.Player && (this.dying || ent.invincibility)) {
      return;
    }

    //the first two elements of the hitbox array are an offset, so let's do this now.
    var hpos1 = [this.pos[0] + this.hitbox[0], this.pos[1] + this.hitbox[1]];
    var hpos2 = [ent.pos[0] + ent.hitbox[0], ent.pos[1] + ent.hitbox[1]];

    //if the hitboxes actually overlap
    if (!(hpos1[0] > hpos2[0]+ent.hitbox[2] || (hpos1[0]+this.hitbox[2] < hpos2[0]))) {
      if (!(hpos1[1] > hpos2[1]+ent.hitbox[3] || (hpos1[1]+this.hitbox[3] < hpos2[1]))) {
        if (ent instanceof Mario.Player) { //if we hit the player
          if (ent.starTime) {
            this.bump();
          } else { //or the player gets hit
            ent.damage();
          }
        } else {
          this.collideWall();
        }
      }
    }
  };

  Piranha.prototype.bump = function() {
    // if hit by fireball or starman

    let idx = level.enemies.indexOf(this);
    if (idx !== undefined) {
      level.enemies.splice(idx, 1);
    }
  };

})();
