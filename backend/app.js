require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const { PORT, MONGO_URI } = process.env;

const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MongoDB 연결
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));

// 라우팅
app.use('/career', require('./router/career'));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
