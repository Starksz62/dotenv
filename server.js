require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.SERVER_PORT;
app.listen(port, () => {
  console.log(`serveur sur le port ${port}`);
});

const name = process.env.MY_NAME;
const city = process.env.MY_CITY;
const language = process.env.MY_LANGUAGE;

console.log(`I am ${name}, wilder in ${city}, and I love ${language}.`)
console.log(`I am ${process.env.MY_NAME}, wilder in ${process.env.MY_CITY}, and I love ${process.env.MY_LANGUAGE}.`)