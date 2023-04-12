const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");

// Rotas Get
router.get('/findById/:id', usuarioController.findUserByIdController);
router.get('/findAll', usuarioController.findAllUserController);

// Rotas Post
router.post('/create', usuarioController.createUserController);
router.post('/addAddress/:id', usuarioController.addUserAddressController);
router.post('/addFavProduct/:id', usuarioController.addUserFavProductController);

// Rotas Put
router.put('/update/:id', usuarioController.updateUserCotroller);

// Rotas Delete
router.delete('/remove/:id', usuarioController.removeUserAddressController);
router.delete('/removeAddress', usuarioController.removeUserAddressController);
router.delete('/removeFavProduct', usuarioController.removeUserFavProductController);

module.exports = router;