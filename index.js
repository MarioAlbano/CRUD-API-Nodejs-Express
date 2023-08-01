//Using express, mongoose and defining a port
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 8080;
const User = require("./models/user");

//Seting mongoDB Cloud link, dont forget to remove '<>'
const mongoURI =
  "mongodb+srv://exampleuser:hashed_password@cluster0.s6m8nep.mongodb.net/";

//Conecting with mongoose using a promise. Need 'useNewUrlParser' and 'useUnifiedTopology' to avoid deprecations warning
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connectado ao MongoDB!");
    app.listen(port, () => {
      console.log("Server iniciado na porta 8080");
    });
  })
  .catch((err) => {
    console.log(`Erro ao conectar: ${err}`);
  });

//Now, create a new folder 'models' and define schema and model with Mongoose
