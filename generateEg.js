const fs = require('fs');

function createEnvFile(sourceEnvFilePath, destinationEnvFilePath) {
  // Read the content of the source .env file
  fs.readFile(sourceEnvFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading ${sourceEnvFilePath}:`, err.message);
      return;
    }

    // Split the content into lines
    const lines = data.split('\n');

    // Extract and write only the keys to the destination .env file
    const keys = lines
      .filter((line) => line.trim() !== '' && !line.startsWith('#'))
      .map((line) => line.trim())
      .join('\n');

    // Write the keys to the destination .env file
    fs.writeFile(destinationEnvFilePath, keys, 'utf8', (err) => {
      if (err) {
        console.error(`Error writing ${destinationEnvFilePath}:`, err.message);
        return;
      }

      console.log(`Keys written to ${destinationEnvFilePath}`);
    });
  });
}

module.exports = { createEnvFile };
