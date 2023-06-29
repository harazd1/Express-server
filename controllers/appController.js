import appService from "../services/appService.js";

class appController {
    async create(req, res) {
        try {
            const post = await appService.addEmail(req.body)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}


export default new appController();