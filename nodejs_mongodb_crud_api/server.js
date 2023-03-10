const express = require("express");
const cors = require("cors");
const app = express();

global.__basedir = __dirname;

var corsOptions = {
origin: "http://localhost:4200"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

//Connect to MongoDB database
//TODO:
// register to mongodb and get user/password to put in .env file

db.mongoose
.connect(db.url, {
 useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to the database");
})
.catch(error => {
  console.log("Cannot connect to the database", error);
  process.exit();
});


app.get("/", (req, res) => {
  res.json({ message: "Welcome to this CRUD API" });
});

require("./app/routes/api.routes")(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}.`);
});

