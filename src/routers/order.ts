import { Router } from 'express'

import * as Controller from '../controllers/order'

const router = Router()

router.post('/order/closedOrder', Controller.closedOrder)

export default router