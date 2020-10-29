import { Router } from 'express'
import * as Controller from '../controllers/user'

const router = Router()

router.post('/user', Controller.createUser)
router.get('/user/:id', Controller.getUserById)
router.get('/user', Controller.getUser)
router.put('/user/:id', Controller.updateUser)

export default router