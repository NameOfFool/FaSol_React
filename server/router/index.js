const Router = require("express").Router;
const userController = require("../controllers/userController");
const UserController = require("../controllers/userController")
const router = Router();
const authMiddleware = require("../middlewares/auth_middleware")
const { body } = require("express-validator")

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({ min: 3, map: 15 }),
    userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);

module.exports = router;