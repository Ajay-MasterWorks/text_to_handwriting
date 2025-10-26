import opentype from 'opentype.js';

export async function imageToFontDataUrl(file, fontName) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => {
      const img = new Image();
      img.src = e.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        // Very small glyph set – each character uses the same image
        const notdef = new opentype.Glyph({ name: '.notdef', unicode: 0, advanceWidth: 600, path: new opentype.Path() });
        const glyphs = [notdef];

        for (let i = 32; i < 127; i++) {
          const path = new opentype.Path();
          const glyph = new opentype.Glyph({ name: String.fromCharCode(i), unicode: i, advanceWidth: 600, path });
          glyphs.push(glyph);
        }

        const font = new opentype.Font({
          familyName: fontName,
          styleName: 'Regular',
          unitsPerEm: 1000,
          ascender: 800,
          descender: -200,
          glyphs
        });

        const buffer = font.toArrayBuffer();
        const blob = new Blob([buffer], { type: 'font/ttf' });
        const url = URL.createObjectURL(blob);
        resolve({ url, name: fontName });
      };
    };
    reader.readAsDataURL(file);
  });
}