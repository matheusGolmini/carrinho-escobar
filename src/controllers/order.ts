import { Request, Response } from 'express'
import { getRepository, QueryRunner } from 'typeorm'

export async function closedOrder(req: Request, res: Response){

    const { userId } = req.body
    console.log(userId)
    const instanceRepo = getRepository('shoppingcart')

    const user = await instanceRepo.query(`select * from shoppingcart s  
    where s."userId" = '${userId}'
    and s.finished is false 
    limit 1`)

    if(!user.length){
        return res.status(400).json({messagem: "Carrinho não encontrado"})
    }

    const instanceRepo2 = getRepository('shoppingcartitems')

    const itens = await  instanceRepo2.find({where : { shoppingcart:user[0].id } })

    user[0].finished = true 

    instanceRepo.save(user[0])

    return res.status(200).json(user[0])   

}
