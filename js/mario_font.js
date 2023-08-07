(function() {
  if (typeof Mario === 'undefined')
    window.Mario = {};

  var MarioFont = Mario.MarioFont = function(img, x, height) {
    this.x = x;
    this.img = img;
    this.width = MarioFont.monospaceWidth
    this.height = height;
  }

  const letterImage = 'sprites/mario-font.png';
  const fontHeight = 8;
  MarioFont.monospaceWidth = 8;
  const lineHeight = fontHeight+2;

  MarioFont.prototype.render = function(ctx, posx, posy) {
    ctx.imageSmoothingEnabled = false;
    // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    ctx.drawImage(resources.get(this.img), this.x, 0, this.width, this.height, posx, posy + Math.floor((lineHeight - fontHeight)/2), this.width, this.height);
  }

  window.mario_glyphs = {}

  const letters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ -*!.".split(""); // order of the letters in the file
  for (let i=0; i<letters.length; i++) {
    const letter = letters[i];
    window.mario_glyphs[letter] = new MarioFont(letterImage, i*MarioFont.monospaceWidth, fontHeight);
  }
  
  const wordToGlyphs = function(word) {
    word = word.toUpperCase();
    let letters = word.split("");
    letters = letters.map((letter) => {
      return window.mario_glyphs[letter];
    })
    return letters;
  }

  MarioFont.render = function(ctx, text, x, y) {
    const glyphs = wordToGlyphs(text);
    for (let i=0; i<glyphs.length; i++) {
      const glyph = glyphs[i];
      glyph.render(ctx, x+i*MarioFont.monospaceWidth, y);
    }
  }

  // MarioFont.textToMultilineGlyphs = function(text, maxWidth) {
  //   let effectiveWidth = 0;
  //   let effectiveHeight = 0;
  //   let lines = [];
  //   let words = text.split(" ");
  //   words.push(""); // delimits the end of the string \0

  //   let currentGlyphs = wordToGlyphs(words.shift());
  //   let currentLineWidth = currentGlyphs.reduce((sum, glpyh) => { return sum + glpyh.width }, 0);
  //   words.forEach(word => {
  //     let potentialGlyphs = [...currentGlyphs,...wordToGlyphs(" "+word)]; // the line of glyphs that we need to check if it fits
  //     const potentialWidth = potentialGlyphs.reduce((sum, glpyh) => { return sum + glpyh.width }, 0);
  //     if (word === "" || (potentialWidth > maxWidth && currentGlyphs !== [])) {
  //       // word does not fit the line
  //       effectiveWidth = Math.max(effectiveWidth, currentLineWidth);
  //       effectiveHeight += lineHeight;
  //       lines.push(currentGlyphs);
  //       currentGlyphs = wordToGlyphs(word);
  //     } else {
  //       currentGlyphs = potentialGlyphs;
  //       currentLineWidth = potentialWidth;
  //     }
  //   });

  //   return [lines, effectiveWidth, effectiveHeight, lineHeight];  
  // }

})();
