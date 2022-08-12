class UserController {
    /**
     * 
     * @param {import("express").Request} req 
     * @param {import("express").Response} res 
     */
    static async create(req, res) {
        const {email, password} = req.body;
        return res.json({success : true, user : {
            email,
            password
        }})
    }

    static async get(req, res) {
        return res.json({success : true})
    }
}

module.exports = UserController;