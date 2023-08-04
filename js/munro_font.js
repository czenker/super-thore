(function() {
  if (typeof Mario === 'undefined')
    window.Mario = {};

  var MunroFont = Mario.MunroFont = function(img, x, x_end, height) {
    this.x = x;
    this.img = img;
    this.width = x_end - x; // includes space to next letter
    this.height = height;
  }

  MunroFont.prototype.render = function(ctx, posx, posy) {
    console.log("Hello");
    ctx.imageSmoothingEnabled = false;
    // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    ctx.drawImage(resources.get(this.img), this.x, 0, this.width, this.height, posx, posy, this.width, this.height);
  }

  const letterImage = 'sprites/munro-font.png';
  const fontHeight = 10;
  const lineHeight = fontHeight+2;

  MunroFont.prototype.render = function(ctx, posx, posy) {
    console.log("Hello");
    ctx.imageSmoothingEnabled = false;
    // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    ctx.drawImage(resources.get(this.img), this.x, 0, this.width, this.height, posx, posy + Math.floor((lineHeight - fontHeight)/2), this.width, this.height);
  }

  window.letters = {
    "A": new MunroFont(letterImage, 0, 5, fontHeight),
    "B": new MunroFont(letterImage, 5, 10, fontHeight),
    "C": new MunroFont(letterImage, 10, 14, fontHeight),
    "D": new MunroFont(letterImage, 14, 19, fontHeight),
    "E": new MunroFont(letterImage, 19, 23, fontHeight),
    "F": new MunroFont(letterImage, 23, 27, fontHeight),
    "G": new MunroFont(letterImage, 27, 32, fontHeight),
    "H": new MunroFont(letterImage, 32, 37, fontHeight),
    "I": new MunroFont(letterImage, 37, 39, fontHeight),
    "J": new MunroFont(letterImage, 39, 42, fontHeight),
    "K": new MunroFont(letterImage, 42, 47, fontHeight),
    "L": new MunroFont(letterImage, 47, 51, fontHeight),
    "M": new MunroFont(letterImage, 51, 57, fontHeight),
    "N": new MunroFont(letterImage, 57, 62, fontHeight),
    "O": new MunroFont(letterImage, 62, 67, fontHeight),
    "P": new MunroFont(letterImage, 67, 72, fontHeight),
    "Q": new MunroFont(letterImage, 72, 77, fontHeight),
    "R": new MunroFont(letterImage, 77, 82, fontHeight),
    "S": new MunroFont(letterImage, 82, 86, fontHeight),
    "T": new MunroFont(letterImage, 86, 90, fontHeight),
    "U": new MunroFont(letterImage, 90, 95, fontHeight),
    "V": new MunroFont(letterImage, 95, 101, fontHeight),
    "W": new MunroFont(letterImage, 101, 107, fontHeight),
    "X": new MunroFont(letterImage, 107, 113, fontHeight),
    "Y": new MunroFont(letterImage, 113, 119, fontHeight),
    "Z": new MunroFont(letterImage, 119, 123, fontHeight),
    "a": new MunroFont(letterImage, 123, 128, fontHeight),
    "b": new MunroFont(letterImage, 128, 133, fontHeight),
    "c": new MunroFont(letterImage, 133, 137, fontHeight),
    "d": new MunroFont(letterImage, 137, 142, fontHeight),
    "e": new MunroFont(letterImage, 142, 147, fontHeight),
    "f": new MunroFont(letterImage, 147, 150, fontHeight),
    "g": new MunroFont(letterImage, 150, 155, fontHeight),
    "h": new MunroFont(letterImage, 155, 160, fontHeight),
    "i": new MunroFont(letterImage, 160, 162, fontHeight),
    "j": new MunroFont(letterImage, 162, 165, fontHeight),
    "k": new MunroFont(letterImage, 165, 170, fontHeight),
    "l": new MunroFont(letterImage, 170, 172, fontHeight),
    "m": new MunroFont(letterImage, 172, 180, fontHeight),
    "n": new MunroFont(letterImage, 180, 185, fontHeight),
    "o": new MunroFont(letterImage, 185, 190, fontHeight),
    "p": new MunroFont(letterImage, 190, 195, fontHeight),
    "q": new MunroFont(letterImage, 195, 200, fontHeight),
    "r": new MunroFont(letterImage, 200, 204, fontHeight),
    "s": new MunroFont(letterImage, 204, 208, fontHeight),
    "t": new MunroFont(letterImage, 208, 212, fontHeight),
    "u": new MunroFont(letterImage, 212, 217, fontHeight),
    "v": new MunroFont(letterImage, 217, 223, fontHeight),
    "w": new MunroFont(letterImage, 223, 231, fontHeight),
    "x": new MunroFont(letterImage, 231, 237, fontHeight),
    "y": new MunroFont(letterImage, 237, 242, fontHeight),
    "z": new MunroFont(letterImage, 242, 246, fontHeight),
    "~": new MunroFont(letterImage, 246, 252, fontHeight),
    "!": new MunroFont(letterImage, 252, 254, fontHeight),
    "@": new MunroFont(letterImage, 254, 262, fontHeight),
    "#": new MunroFont(letterImage, 262, 268, fontHeight),
    "_": new MunroFont(letterImage, 268, 274, fontHeight),
    "^": new MunroFont(letterImage, 274, 278, fontHeight),
    "&": new MunroFont(letterImage, 278, 285, fontHeight),
    ":": new MunroFont(letterImage, 285, 287, fontHeight),
    ";": new MunroFont(letterImage, 287, 289, fontHeight),
    "'": new MunroFont(letterImage, 289, 291, fontHeight),
    "\"": new MunroFont(letterImage, 291, 295, fontHeight),
    ",": new MunroFont(letterImage, 295, 297, fontHeight),
    ".": new MunroFont(letterImage, 297, 299, fontHeight),
    "+": new MunroFont(letterImage, 299, 305, fontHeight),
    "-": new MunroFont(letterImage, 305, 309, fontHeight),
    "*": new MunroFont(letterImage, 309, 313, fontHeight),
    "/": new MunroFont(letterImage, 313, 317, fontHeight),
    "%": new MunroFont(letterImage, 317, 325, fontHeight),
    "=": new MunroFont(letterImage, 325, 330, fontHeight),
    "(": new MunroFont(letterImage, 330, 333, fontHeight),
    ")": new MunroFont(letterImage, 333, 336, fontHeight),
    "{": new MunroFont(letterImage, 336, 340, fontHeight),
    "}": new MunroFont(letterImage, 340, 344, fontHeight),
    "[": new MunroFont(letterImage, 344, 347, fontHeight),
    "]": new MunroFont(letterImage, 347, 350, fontHeight),
    "<": new MunroFont(letterImage, 350, 355, fontHeight),
    ">": new MunroFont(letterImage, 355, 360, fontHeight),
    "?": new MunroFont(letterImage, 360, 364, fontHeight),
    "\\": new MunroFont(letterImage, 364, 368, fontHeight),
    "|": new MunroFont(letterImage, 368, 370, fontHeight),
    " ": new MunroFont(letterImage, 370, 374, fontHeight),
  }

  const wordToGlyphs = function(word) {
    let letters = word.split("");
    letters = letters.map((letter) => {
      return window.letters[letter];
    })
    return letters;
  }

  MunroFont.textToMultilineGlyphs = function(text, maxWidth) {
    let effectiveWidth = 0;
    let effectiveHeight = 0;
    let lines = [];
    let words = text.split(" ");
    words.push(""); // delimits the end of the string \0

    let currentGlyphs = wordToGlyphs(words.shift());
    let currentLineWidth = 0;
    words.forEach(word => {
      let potentialGlyphs = [...currentGlyphs,...wordToGlyphs(" "+word)]; // the line of glyphs that we need to check if it fits
      const potentialWidth = potentialGlyphs.reduce((sum, glpyh) => { return sum + glpyh.width }, 0);
      if (word === "" || (potentialWidth > maxWidth && currentGlyphs !== [])) {
        // word does not fit the line
        effectiveWidth = Math.max(effectiveWidth, currentLineWidth);
        effectiveHeight += lineHeight;
        lines.push(currentGlyphs);
        currentGlyphs = wordToGlyphs(word);
      } else {
        currentGlyphs = potentialGlyphs;
        currentLineWidth = potentialWidth;
      }
    });

    return [lines, effectiveWidth, effectiveHeight, lineHeight];
    
  }

})();
