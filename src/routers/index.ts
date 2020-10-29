import { Router } from 'express'
import userRouter from './user'

const router = Router()

//Default
router.post('/test', (req, res) => {
    res.status(200).send('test')
})

router.use(userRouter)

export default router