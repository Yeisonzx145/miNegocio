const userPostControlle = require('../../controllers/user/userPostControlle')

const userPostHandler = async (req,res)=>{

    const {name,lastname,password,email} = req.body;
    
    try {
        const user = await userPostControlle(name,lastname,password,email)
        res.status(200).json(user)
    } catch (error) {
        res.status(401).json({error:error.message})
    }
}

module.exports = userPostHandler;