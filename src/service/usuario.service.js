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
    return Usuario.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $push:{
                enderecos: endereco,
            }
        },
        {
            rawResult: true,
        }
    );
};

const removeUserAddressService = (id, addressId) => {
    return Usuario.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $pull:{
                enderecos: {
                    _id: addressId,
                },
            }
        },
        {
            rawResult: true,
        }
    );
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