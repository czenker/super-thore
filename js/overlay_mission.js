(function() {
  if (typeof Mario === 'undefined')
  window.Mario = {};

  function createImage(text)  {
    const maxTextWidth = 200;
    const paddingTop = 2;
    const paddingHorizontal = 4;
    const paddingBottom = 2;
    const borderWidth = 2;

    const [lines, textWidth, textHeight, lineHeight] = Mario.MunroFont.textToMultilineGlyphs(text, maxTextWidth);

    let boundingWidth = textWidth + 2*paddingHorizontal + 2*borderWidth;
    let boundingHeight = textHeight + paddingTop + paddingBottom + 2*borderWidth;

    let canvas = document.createElement("canvas");
    canvas.width = boundingWidth;
    canvas.height = boundingHeight;
    let ctx = canvas.getContext("2d");

    // draw border in a pixelated way
    // we overlay rects to get this nice blocky look
    canvas.width = boundingWidth;
    canvas.height = boundingHeight;
    ctx.fillStyle = "#104c00"; // borderColor
    ctx.fillRect(4, 0, boundingWidth-8, boundingHeight);
    ctx.fillRect(2, 1, boundingWidth-4, boundingHeight-2);
    ctx.fillRect(1, 2, boundingWidth-2, boundingHeight-4);
    ctx.fillRect(0, 4, boundingWidth, boundingHeight-8);
    ctx.fillStyle = "#8cd600"; // fillColor
    ctx.fillRect(4, 2, boundingWidth-8, boundingHeight-4);
    ctx.fillRect(3, 3, boundingWidth-6, boundingHeight-6);
    ctx.fillRect(2, 4, boundingWidth-4, boundingHeight-8);

    // draw the bounding box
    // ctx.fillRect(0, 0, textMeasure.width + 2*paddingHorizontal + 2*borderWidth, fontHeight + paddingTop + paddingBottom + 2*borderWidth);
    this.lines = lines;
    this.startX = borderWidth + paddingHorizontal;
    this.nextLetterX = this.startX;
    this.nextLetterY = borderWidth + paddingTop;
    this.lineHeight = lineHeight;
    this.image_canvas = canvas;
    this.image_ctx = ctx;
  }

  var MissionOverlay = Mario.MissionOverlay = function(text) {
    this.text = text;
    this.visibility = 1; // fadout when mario starts moving
    // draw the screen once in a seperate canvas to be more performant
    createImage.call(this, text);
    this.drawLetterCycle = 0;
  };

  MissionOverlay.prototype.render = function(ctx, vX, vY) {
    ctx.save();
    ctx.globalAlpha = this.visibility*0.9;
    const width = this.image_canvas.width;
    const height = this.image_canvas.height;
    const dx = Math.floor((vWidth - width)/2);
    const dy = Math.floor((vHeight - height)/2);
    ctx.drawImage(this.image_canvas, dx, dy);
    ctx.restore();
  };

  MissionOverlay.prototype.update = function(dt, vX) {
    if (this.lines.length > 0) {
      if (this.drawLetterCycle % 2 == 0) { // how fast text is printed
        const nextGlyph = this.lines[0].shift();
        nextGlyph.render(this.image_ctx, this.nextLetterX, this.nextLetterY);
        if (this.lines[0].length < 1) {
          // if: no more glyphs in this line
          this.lines.shift(); // delete current line
          this.nextLetterX = this.startX;
          this.nextLetterY += this.lineHeight;
        } else {
          this.nextLetterX += nextGlyph.width;
        }
      }
      this.drawLetterCycle += 1;
    }
    if (vX >= 32 && this.visibility > 0) {
      this.visibility -= dt;
    }
    if (this.visibility <= 0) {
      // delete
      let idx = level.overlays.indexOf(this);
      if (idx !== undefined) {
        level.overlays.splice(idx, 1);
      }
    }
  };
})();
