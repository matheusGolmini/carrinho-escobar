import { Router } from 'express'

const router = Router()

//Default
router.post('/test', (req, res) => {
    res.status(200).send('test')
})

export default router