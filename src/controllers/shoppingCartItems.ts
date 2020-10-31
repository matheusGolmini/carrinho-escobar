import { Request, Response } from 'express'
import { getRepository, QueryRunner } from 'typeorm'

export async function createProductItem(req: Request, res: Response){

    const { produto } = req.body


    const instanceRepo2 = getRepository('shoppingcart')

    console.log("aqui")

    let result2 : any = await instanceRepo2.findOne({ where: [{ user:produto.user }, {finished:false} ] })
    console.log(result2)
    if(!result2){
        result2 = await instanceRepo2.save({user:produto.user, finished:false})
    }
    
    produto.shoppingcart = result2.id

    try {
        console.log("aqui 1")
        const instanceRepo = getRepository('shoppingcartitems')
        let result3 : any = await instanceRepo.findOne({where: [ { user:produto.user}, {shoppingcart:result2.id}, {produtoId:produto.produtoId }  ]})
        let response : any 

        if(!result3){
            response = await instanceRepo.save(produto)

        }else{
            result3.amount += produto.amount
            response = await instanceRepo.save(result3)
        }
        return res.status(200).json(response)    
        
    } catch (error) {
        console.log(error)
    }
   
    
}



