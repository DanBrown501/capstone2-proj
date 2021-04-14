const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// database
const db = require("./models");
const Role = db.role;

// db.sequelize.sync();
// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Database with { force: true }');
  initial();
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to db's capstone application." });
});

// routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}


// {
//     "username": "Daniel"
//     "email": "danbrown501@gmail.com",
//     "password": "Basia123"
//     "roles": ["admin"]
// }

// {
//     "username": "mod",
//     "email": "mod@danbrown.com",
//     "password": "mod123",
//     "roles": ["user", "moderator"]
// }

// {
//     "id": 2,
//     "username": "Daniel",
//     "email": "danbrown501@gmail.com",
//     "roles": [
//       "ROLE_ADMIN"
//     ],
//     "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjE4MzY1NzM3LCJleHAiOjE2MTg0NTIxMzd9.3E846mbu1q4MY39U82nwTr9lBK83LMQbVhj1BsVmXtI"
//   }

// {
//     "id": 1,
//     "username": "mod",
//     "email": "mod@danbrown.com",
//     "roles": [
//       "ROLE_USER",
//       "ROLE_MODERATOR"
//     ],
//     "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE4MzY1NjczLCJleHAiOjE2MTg0NTIwNzN9.2zEHhveF6h260DeKKI2psN_7UjbGbUuWyoCBwpRMJn0"
//   }

// {
//     "username": "user",
//     "email": "user@danbrown.com",
//     "password": "user123",
//     "roles": ["user"]
// }

// {
//     "id": 3,
//     "username": "user",
//     "email": "user@danbrown.com",
//     "roles": [
//       "ROLE_USER"
//     ],
//     "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjE4MzY1Nzg4LCJleHAiOjE2MTg0NTIxODh9.k5xgrWGsOBZQwpXDKCE9lqpjbEL-7jjG49QtlQECGhk"
//   }

// https://localhost:8080/api/auth/signup
// http://localhost:8080/api/test/all