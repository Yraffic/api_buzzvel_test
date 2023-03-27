import { Router } from "express"
import { getUser, setRegisterUser } from "./controller/UserController"

const rotas = Router()

rotas.get('/:name/:id', getUser)
rotas.post('/generate', setRegisterUser)

export default rotas