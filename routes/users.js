const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/send_data', (req, res) => {
  const inner_data = req.body;
  const message = inner_data.message;
  const image = inner_data.image;
  console.log(req.body)
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify({ status: OK }));
  res.end();
})

module.exports = router;
