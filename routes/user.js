const express = require('express');
const User = require('../controllers/user');

const router = express.Router();

router.post('/', User.login);
router.post('/create', User.create);
router.put('/update_password', User.changePassword);
router.post('/verify-username-email', User.verifyUsernameEmail);
router.put('/forgot_password', User.changePasswordForgot);

module.exports = router;
