
const findUserByIdController = async (req, res) => {
    try{



    }catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro Inesperado tente novamente!`});
    }
};

const createUserController = async (req,res) => {
    try{



    }catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro Inesperado tente novamente!`});
    }
};

const findAllUserController = async (req, res) => {
    try{



    }catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro Inesperado tente novamente!`});
    }
};

const updateUserCotroller = async (req, res) => {
    try{



    }catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro Inesperado tente novamente!`});
    }
};

const deleUserCrontoller = async(req, res) => {
    try{



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
    deleUserCrontoller,
    updateUserCotroller,
    removeUserAddressController,
    addUserAddressController,
    removeUserFavProductController,
    addUserFavProductController,


};