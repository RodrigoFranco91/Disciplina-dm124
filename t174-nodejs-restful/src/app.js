const express =  require('express');
const app = express();

//Middlewares
const notFound = require('./middleware//not-found');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

//Routes
const tasksRouter = require('./routes/tasks');
app.use('/api/tasks', tasksRouter);

// Missing Routes
app.use(notFound);

module.exports = app;