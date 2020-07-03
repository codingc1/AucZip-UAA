const express = require('express');
const router = express.Router();

const { userController } = require('../controller');

// * POST /user/signin
router.post('/signin', userController.signin.post);

// * POST /user/signout
// router.get('/signout', userController.signout.get);

// * POST /user/signup
router.post('/signup', userController.signup.post);

// * GET /user/info
router.get('/info', userController.info.get);

module.exports = router;
