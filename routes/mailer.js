const express = require('express');
const router = express.Router();

const mailing_controller = require('../controllers/mailing_controller');

router.get('/mail', function (req, res) {
    res.send('sender home page');
});

router.post('/send_message', mailing_controller.get_data);

router.get('/sent', (req, res) => {
    // res.send('message was sent!')
    res.render('sent')
});

module.exports = router;
