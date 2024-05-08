const userPostControlle = require('../../controllers/user/userPostControlle')

const userPostHandler = async (req,res)=>{

    const name = req.body.name;
    console.log(name);

    try {
        const user = await userPostControlle(name,lastname,password,email)
        res.status(200).json(user)
    } catch (error) {
        res.status(401).json({error:error.message})
    }
}

module.exports = userPostHandler;