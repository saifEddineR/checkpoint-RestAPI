const express = require('express');
const router = express.Router();
// mongoose connect ---------------------------
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// mongoose model -----------------------------
const user = require('../models/userSchema');
// Routes -------------------------------------
/* get users list */
router.get('/users', (req, res) => {
  user
    .find()
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});
/*add new user */
router.post('/user', (req, res) => {
  const newUser = new user(req.body);
  newUser
    .save()
    .then(() => res.send('new user added'))
    .catch((err) => console.log(err));
});
/*remove user by id */
router.delete('/user/:id', (req, res) => {
  user
    .findByIdAndRemove(req.params.id, req.body)
    .then(() =>
      res.status(200).send(`user by the id of : ${req.params.id} is deleted`)
    )
    .catch((err) => console.log(err));
});
/*update user by id */
router.put('/user/:id', (req, res) => {
  user
    .findByIdAndUpdate(req.params.id, req.body)
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

module.exports = router;
