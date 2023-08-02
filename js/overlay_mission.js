(function() {
  if (typeof Mario === 'undefined')
  window.Mario = {};


  function multilineText(ctx, text, maxWidth) {
    // helper to autobreak long text on a canvas into multiple lines
    let effectiveWidth = 0;
    let effectiveHeight = 0;
    let lineHeight = 0;
    let lines = [];
    let words = text.split(" ");
    words.push(""); // delimits the end of the string \0

    let currentLine = words.shift();
    let currentLineWidth = 0;
    words.forEach(word => {
      let potentialLine = currentLine + " " + word;
      let meassures = ctx.measureText(potentialLine);
      if (word === "" || (meassures.width > maxWidth && currentLine !== "")) {
        // word does not fit the line
        effectiveWidth = Math.max(effectiveWidth, currentLineWidth);
        lineHeight = Math.max(lineHeight, meassures.actualBoundingBoxAscent + meassures.fontBoundingBoxDescent);
        effectiveHeight += lineHeight;
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = potentialLine;
        currentLineWidth = meassures.width;
      }
    });

    return [lines, effectiveWidth, effectiveHeight, lineHeight];
  }

  function createImage(text)  {
    const maxTextWidth = 200;
    const paddingTop = 1;
    const paddingHorizontal = 4;
    const paddingBottom = 4;
    const borderWidth = 2;
    const font = "12px MunroRegular";

    let canvas = document.createElement("canvas");
    canvas.width = maxTextWidth + 2 * paddingHorizontal + 2*borderWidth;
    canvas.height = 256; // just reserve enough space
    canvas.style["image-rendering"] = "pixelated";
    canvas.style["font-smooth"] = "never";
    let ctx = canvas.getContext("2d");
    ctx.font = font;

    const [lines, textWidth, textHeight, lineHeight] = multilineText(ctx, text, maxTextWidth);

    let boundingWidth = textWidth + 2*paddingHorizontal + 2*borderWidth;
    let boundingHeight = textHeight + paddingTop + paddingBottom + 2*borderWidth;

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
    
    ctx.imageSmoothingEnabled= false;
    ctx.fillStyle = "#104c00"; // textColor
    for(let idx=0; idx< lines.length; idx++) {
      const line = lines[idx];
      const dx = paddingHorizontal + borderWidth;
      const dy = paddingTop + borderWidth + (idx+1) * lineHeight;
      ctx.font = font;
      // @TODO: disabling font-smoothing seems impossible at the moment
      ctx.fillText(line, dx, dy);
    }
    
    return canvas;
  }

  var MissionOverlay = Mario.MissionOverlay = function(text) {
    this.text = text;
    this.visibility = 1; // fadout when mario starts moving
    // draw the screen once in a seperate canvas to be more performant
    this.image_canvas = createImage(text);
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
