const express = require('express');
const { createEnvFile } = require('./generateEg');

const app = express();

app.listen(3999, () => {
    console.log("Working");
});

const destinationEnvFilePath = 'eg.env';

let sourceEnvFilePath = '.env';

createEnvFile(sourceEnvFilePath, destinationEnvFilePath);

