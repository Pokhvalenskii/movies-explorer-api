const express = require('express');
const mongoose = require('mongoose');

const app = express();
const { PORT = 3001, DB_URL, NODE_ENV } = process.env;
const router = require('./routes/index');

mongoose.connect(NODE_ENV === 'production' ? DB_URL : 'mongodb://localhost:27017/diploma', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(express.json());
app.use(router);
app.listen(PORT, () => {});
