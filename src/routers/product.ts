import { Router } from 'express'

import * as Controller from '../controllers/product'

const router = Router()

router.get('/product', Controller.ReturnAllProducts)

export default router