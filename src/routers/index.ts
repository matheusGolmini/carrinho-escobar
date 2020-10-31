import { Router } from 'express'
import userRouter from './user'
import productRouter from './product'
import shoppingcartitemsRouter from './shoppingcartitems'

const router = Router()

//Default
router.post('/test', (req, res) => {
    res.status(200).send('test')
})


router.use(userRouter)
router.use(productRouter)
router.use(shoppingcartitemsRouter)

export default router