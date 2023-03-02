const router = require('express').Router();
const apiRoutes = require('./api');

//prefix all routes defined in api directory with '/api'
router.use('/api', apiRoutes);

//otherwise send wrong route messsage
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;