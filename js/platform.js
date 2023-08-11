(function() {
  if (typeof Mario === 'undefined')
    window.Mario = {};

  var Platform = Mario.Platform = function(options) {
    this.sprite = options.sprite;
    this.width = options.width || 3;

    this.direction = options.direction || 1;
    this.speed = options.speed || 42; // pixel per second

    this.minX = options.pos[0];
    this.maxX = options.pos[0]+(options.travelDistance || 64);
    this.lastMove = 0;

    Mario.Entity.call(this, {
      pos: options.pos,
      sprite: options.sprite,
      hitbox: [0,0,16*this.width,8]
    });
  }

  Mario.Util.inherits(Platform, Mario.Floor);

  Platform.prototype.render = function(ctx, vX, vY) {
		this.sprite.render(ctx, this.pos[0], this.pos[1], vX, vY);
    this.sprite.render(ctx, this.pos[0]+16, this.pos[1], vX, vY);
    this.sprite.render(ctx, this.pos[0]+32, this.pos[1], vX, vY);
	}

  Platform.prototype.update = function(dt, gameTime) {
    let speed = this.speed;
    if (this.pos[0] <= this.minX+4 || this.pos[0] >= this.maxX - 4) {
      speed /= 2;
    }

    const deltaX = this.direction * dt * speed;
    this.pos[0] += deltaX;
    if (this.pos[0] < this.minX) {
      this.pos[0] = this.minX;
      this.direction = 1;
    }
    if (this.pos[0] > this.maxX) {
      this.pos[0] = this.maxX;
      this.direction = -1;
    }
    this.lastMove = deltaX;
  }

  Platform.prototype.isCollideWith = function (ent) {
		//the first two elements of the hitbox array are an offset, so let's do this now.
		var hpos1 = [this.pos[0] + this.hitbox[0], this.pos[1] + this.hitbox[1]];
		var hpos2 = [ent.pos[0] + ent.hitbox[0], ent.pos[1] + ent.hitbox[1]];

		//if the hitboxes actually overlap
		if (!(hpos1[0] > hpos2[0]+ent.hitbox[2] || (hpos1[0]+this.hitbox[2] < hpos2[0]))) {
			if (!(hpos1[1] > hpos2[1]+ent.hitbox[3] || (hpos1[1]+this.hitbox[3] < hpos2[1]))) {
        //if the entity is over the block, it's basically floor
        var center = hpos2[0] + ent.hitbox[2] / 2;
        if (Math.abs(hpos2[1] + ent.hitbox[3] - hpos1[1]) <= ent.vel[1]) {
          ent.vel[1] = 0;
          ent.pos[1] = hpos1[1] - ent.hitbox[3] - ent.hitbox[1];
          ent.pos[0] += this.lastMove;
          ent.standing = true;
          if (ent.vel === [0,0]) {
            //if ent has not moved on its own in the current tick snap it to a full pixel of the platform 
            // to avoid a visual glitch that looks as if mario is moving a few pixels on the platform
            ent.pos[0] = Math.round(ent.pos[0] - this.pos[0]) + this.pos[0];
          }
          if (ent instanceof Mario.Player) {
            ent.jumping = 0;
          }
        } else if (Math.abs(hpos2[1] - hpos1[1] - this.hitbox[3]) > ent.vel[1] &&
        center + 2 >= hpos1[0] && center - 2 <= hpos1[0] + this.hitbox[2]) {
          //ent is under the block.
          ent.vel[1] = 0;
          ent.pos[1] = hpos1[1] + this.hitbox[3];
          if (ent instanceof Mario.Player) {
            ent.jumping = 0;
          }
        } else {
          //entity is hitting it from the side, we're a wall
          ent.collideWall(this);
        }
			}
		}
	}

	Platform.prototype.collideWall = function(wall) {
		if (this.pos[0] > wall.pos[0]) {
			//from the right
			this.vel[0] = Math.max(0, this.vel[0]);
			this.acc[0] = Math.max(0, this.acc[0]);
		} else {
			this.vel[0] = Math.min(0, this.vel[0]);
			this.acc[0] = Math.min(0, this.acc[0]);
		}
	}

})();
