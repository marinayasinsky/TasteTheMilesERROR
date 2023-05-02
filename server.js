require('dotenv').config();
require('./config/database'); // connects to db
const cors = require('cors');
const express = require('express');
const path = require('path'); // node module
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();
const PORT = process.env.PORT || 3001;

//* Config
app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(require('./config/checkToken'));
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello to Fitness Tracker API");
});

// * Routes

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);


// Catch all route
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
