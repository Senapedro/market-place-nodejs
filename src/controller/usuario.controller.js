const Usuario = require("../model/Usuario");
const userService = require("../service/usuario.service");

const findUserByIdController = async (req, res) => {
    try{
        const user = await userService.findUserByIdService(req.params.id);

        if(!user) {
            return res.status(404).send({message: "Usuario não encontrado, tente novamente!"});
        }

        return res.status(200).send(user);

    }catch (err) {
        if(err.kind == "objectId") {
            console.log(err.kind == "objectId");
            return res.status(400).send({ message: `ID informado esta incorreto, tente novamente!`});
        }

        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro Inesperado tente novamente!`});
    }
};

const findAllUserController = async (req, res) => {
    try{
        return res.status(200).send(await userService.findAllUserService());
    }catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro Inesperado tente novamente!`});
    }
};

const createUserController = async (req,res) => {
    try{
        const body = req.body;
        
        if(!body.nome) {
            return res.status(400).send({message: `O campo 'nome' precisa ser preenchido`});
        }

        return res.status(201).send(await userService.createUserService(body));

    }catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro Inesperado tente novamente!`});
    }
};

const updateUserCotroller = async (req, res) => {
    try{
        const body = req.body;
        
        if(!body.nome) {
            return res.status(400).send({message: `O campo 'nome' precisa ser preenchido`});
        }

        return res.send(await userService.updateUserService(req.params.id, body));

    }catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro Inesperado tente novamente!`});
    }
};

const removeUserCrontoller = async(req, res) => {
    try{
        const deletedUser = await userService.removeUserService(req.params.id);

        console.log(deletedUser)

        if(deletedUser == null) {
            res.status(404).send({ message: `Usuario não encontrado, tente novamente!`});
        } else {
            res.status(200).send({ message: `Sucesso, usuario deletado!`});
        }

    }catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro Inesperado tente novamente!`});
    }
};

const addUserAddressController = async (req, res) => {
    try{
        req.body.creatAt = new Date();
        const endereco = await userService.addUserAdressService(req.params.id, req.body);

        if(endereco.ok == 1) {
            res.status(200).send({ message: `Endeço adicionado com sucesso!`});
        }else {
            res.status(400).send({ message: `Algo deu errado no endereço, tente novamente!`});
        }


    }catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro Inesperado tente novamente!`});
    }
};

const removeUserAddressController = async (req, res) => {
    try{
        const endereco = await userService.removeUserAddressService(req.body.id, req.body.addressId)
        let found = false;

        endereco.value.enderecos.map((valor, chave) => {
            if(valor._id == req.body.addressId) {
                found = true;
            }
        })

        if(found) {
            res.status(200).send({ message: `Endeço removido com sucesso!`});
        }else {
            res.status(400).send({ message: `Algo deu errado no endereço, não foi removido tente novamente!`});
        }

    }catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro Inesperado tente novamente!`});
    }
};

const addUserFavProductController = async (req, res) => {
    try{



    }catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro Inesperado tente novamente!`});
    }
};

const removeUserFavProductController =async (req, res) => {
    try{



    }catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro Inesperado tente novamente!`});
    }
};



module.exports = {
    findUserByIdController,
    findAllUserController,
    createUserController,
    removeUserCrontoller,
    updateUserCotroller,
    removeUserAddressController,
    addUserAddressController,
    removeUserFavProductController,
    addUserFavProductController,


};