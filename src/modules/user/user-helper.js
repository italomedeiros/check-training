/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
function validateUserData(req, res, next){
    const {email, password} = req.body;
    if (!email || !password){
        return res.status(400).send("Invalid data.")
    }
    if (!isEmail(email)){
        return res.status(400).send("Invalid email.")
    }
    next();
}

function isEmail(email){
    return true;
}

module.exports = {validateUserData, isEmail}