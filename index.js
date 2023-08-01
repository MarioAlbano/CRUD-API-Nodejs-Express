//Using express, mongoose, bodyParser and defining a port
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 8080;
const User = require("./models/user");

//Using body parser to handle request in body

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

//After create a new folder 'models' and define schema and model with Mongoose, we will starting routes handlers

//Create
app.post("/users", async (req, res) => {
  try {
    const user = new User(req.body); //Creating new User instance with data from the body
    await user.save(); //Saving user to database
    res.status(201).send(user); //Successful response
  } catch (e) {
    res.status(400).send(e); //Error message
  }
});

//Read all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find({}); //Retrieving all users
    res.send(users); //Sending array as response
  } catch (e) {
    res.status(500).send(e); //Error message
  }
});

//Read one user by ID
app.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id); //Finding user by id
    if (!user) {
      return res.status(404).send(); // Error message
    }
    res.send(user); //Sending user as response if found
  } catch (e) {
    res.status(500).send(e);
  }
});

//Update
app.patch("/users/:id", async (req, res) => {
  const updates = Object.keys(req.body); //Extracting fields from body
  const allowedUpdates = ["name", "email", "age"]; //Defining allowed keys to update
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  ); //Verify if each entry it's match with 'allowedUpdates'

  if (!isValidOperation) {
    return res
      .status(400)
      .send({ error: "Entrada inválidas, por favor verifique novamente" });
  }

  try {
    const user = await User.findById(req.params.id); //Finding user by id

    if (!user) {
      return res.status(404).send(); //Error message
    }

    updates.forEach((update) => (user[update] = req.body[update]));
    await user.save(); //Saving updated user to database

    res.send(user);
  } catch (e) {
    res.status(400).send(e); //Error message
  }
});

//Delete user by ID
app.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id); //FInding id to delete

    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (e) {
    res.status(500).send(e); //Error with response
  }
});

//Next steps: Install Postman. A folder and inside create request for 'Create', 'Read All Users', 'Read by ID', 'Update' and 'Delete' to test the application
//In Create: Use POST and 'http://localhost:8080/users' in body. Click body -> raw -> JSON and send your json
//In Read All users: Use GET and 'http://localhost:8080/users'
//In Read by ID: Use GET and 'http://localhost:8080/users/digit_the_id_here'. Click body -> raw -> JSON and send you json
//In Delete: Use DELETE and 'http://localhost:8080/users/digit_the_id_here'

//After exporting the collection, will generate 'CRUD Node.js.postman_collection.json'. It's available in the root
//That API can be considered RESTful because: Has HTTP Methods(POST, GET, PATCH, DELETE), URL Structure (example '/users' and '/users/:id'), Stateless to not rely on server-side, Send response in JSON, and has status codes
