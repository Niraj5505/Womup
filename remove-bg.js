const { Jimp, intToRGBA, rgbaToInt } = require('jimp');

async function removeBackground() {
  try {
    const image = await Jimp.read('public/assets/new-logo.png');
    console.log('Image loaded. Removing background...');

    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      
      // Calculate how close the pixel is to pure white
      const diffR = 255 - red;
      const diffG = 255 - green;
      const diffB = 255 - blue;
      
      const dist = Math.sqrt(diffR * diffR + diffG * diffG + diffB * diffB);
      
      // If the pixel is very close to white, make it fully transparent
      if (dist < 20) {
        this.bitmap.data[idx + 3] = 0; // Alpha
      } else if (dist < 40) {
        // Anti-aliasing for edges
        const alpha = Math.floor(((dist - 20) / 20) * 255);
        this.bitmap.data[idx + 3] = alpha;
      }
    });

    await image.write('public/assets/new-logo.png');
    console.log('Background removed successfully!');
  } catch (err) {
    console.error(err);
  }
}

removeBackground();
