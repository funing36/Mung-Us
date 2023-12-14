const Jimp = require('jimp');
const fs = require('fs');

// Function to create bounds from the image
async function createBounds(imagePath, outputPath) {
    try {
        // Load the image using Jimp
        const image = await Jimp.read(imagePath);

        // Define the RGB values for the bounds
        const targetColor = { r: 2, g: 255, b: 1 };

        // Array to store pixel positions
        const pixelPositions = [];

        // Loop through each pixel and create bounds
        for (let y = 0; y < image.bitmap.height; y++) {
            for (let x = 0; x < image.bitmap.width; x++) {
                const color = Jimp.intToRGBA(image.getPixelColor(x, y));

                // Check if the pixel color matches the target color
                if (
                    color.r === targetColor.r &&
                    color.g === targetColor.g &&
                    color.b === targetColor.b
                ) {
                    // Add the pixel position to the array
                    pixelPositions.push({ x, y });
                }
            }
        }

        // Save pixel positions to a file (optional)
        fs.writeFileSync(outputPath, JSON.stringify(pixelPositions, null, 2));
        console.log(`Pixel positions saved to: ${outputPath}`);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Example usage
const inputImagePath = 'among_us/public/assets/mapmask.png';
const outputFilePath = './pixel_positions.json';
createBounds(inputImagePath, outputFilePath);