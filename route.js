import Router from 'express'
import appController from "./controllers/appController.js";

const router = new Router()

router.post('/posts', appController.create)

export default router;