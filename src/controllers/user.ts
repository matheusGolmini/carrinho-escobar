import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import { getRepository } from 'typeorm'


export async function createUser(req: Request, res: Response): Promise<Response> {
    const { user } = req.body
    console.log(user)
    user.password = bcrypt.hashSync(user.password, 10)
    const instanceRepo = getRepository('user')

    const result = await instanceRepo.save(user)
    return res.status(200).json(result)
}


export async function getUser(req: Request, res: Response): Promise<Response> {
    const instanceRepo = getRepository('user')
    const result = await instanceRepo.find()
    return res.status(200).json(result)
}

export async function getUserById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const instanceRepo = getRepository('user')
    const result = await instanceRepo.find({ where: { id } })
    return res.status(200).json(result)
}

export async function updateUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const userReq = req.body

    const repo = getRepository('user')
    const result: any = await repo.findOne({
        id
    })
    if (!result) {
        return res.status(404).json({
            message: 'user not found'
        })
    }
    userReq.password = bcrypt.hashSync(userReq.password, 10)
    userReq.id = id
    const sav = await repo.save(userReq)
    if (sav) {
        return res.status(200).json(sav)
    }
    return res.status(404).json({
        message: 'user not found'
    })
}
