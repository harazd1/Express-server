import express from 'express'
import router from "./route.js";
import cors from 'cors'

const app = express()
app.use(cors())
const PORT = 5000;
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', router)


async function startApp() {
    try {
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()