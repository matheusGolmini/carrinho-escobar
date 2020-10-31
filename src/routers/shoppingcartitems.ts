import { Router } from 'express'

import * as Controller from '../controllers/shoppingCartItems'

const router = Router()

router.post('/shoppingcartitems/create', Controller.createProductItem)

export default router