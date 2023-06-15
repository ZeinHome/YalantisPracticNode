const express = require('express');

const router = express.Router();

const {
  validateBody,
  ctrlWrapper,
  authenticate,
} = require('../../middlewares');
const { register, login, getCurrent } = require('../../controllers');
const { schemas } = require('../../models/user');

router.post(
  '/signup',
  validateBody(schemas.registerSchema),
  ctrlWrapper(register)
);

router.post(
  '/login',
  validateBody(schemas.loginSchema),
  ctrlWrapper(login)
);

router.get('/current', authenticate, ctrlWrapper(getCurrent));

module.exports = router;
