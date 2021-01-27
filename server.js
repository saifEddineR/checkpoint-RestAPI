const express = require('express');
// init app --------------------------------------
const app = express();
app.use(express.json());
// dotenv setup ----------------------------------
require('dotenv').config({ path: './config/.env' });
// routes ----------------------------------------
app.use('/', require('./routes/userRouter'));
// create server and connect ---------------------
app.listen(process.env.PORT, (err) => {
  if (err) throw err;
  else console.log('connected on port', process.env.PORT);
});
