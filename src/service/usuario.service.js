const Usuario = require("../model/Usuario");

const findUserByIdService = (id) => {
    return Usuario.findById(id);
};

const findAllUserService = () => {
    return Usuario.find();
};

const createUserService = (body) => {
    return Usuario.create(body);
};

const updateUserService = (id, body) => {
    return Usuario.findByIdAndUpdate(id, body, {returnDocument: "after"});
};

const removeUserService = () => {
    return Usuario.findByIdAndRemove(id);
};

const addUserAdressService = (id, endereco) => {
    
};

const removeUserAddressService = (id) => {

};

const addUserFavProductService = (id, produto) => {

};

const removeUserFavProductService = (produto) => {

};

module.exports = {
    findUserByIdService,
    findAllUserService,
    createUserService,
    removeUserService,
    updateUserService,
    removeUserAddressService,
    addUserAdressService,
    removeUserFavProductService,
    addUserFavProductService
};