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
        res.status(200).send({ message: `Sucesso, usuario deletado!`});

        /*if(deletedUser.deleteCount > 0) {
          
        } else {
            res.status(404).send({ message: `Usuario não encontrado, tente novamente!`});
        }*/

    }catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro Inesperado tente novamente!`});
    }
};

const addUserAddressController = async (req, res) => {
    try{



    }catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro Inesperado tente novamente!`});
    }
};

const removeUserAddressController = async (req, res) => {
    try{



    }catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro Inesperado tente novamente!`});
    }
};

const addUserFavProductController =async (req, res) => {
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