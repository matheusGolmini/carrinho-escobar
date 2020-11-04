import { Request, Response } from 'express'
import { getRepository, QueryRunner } from 'typeorm'

export async function createProductItem(req: Request, res: Response){

    const { produto } = req.body

    let result2 : any

    const instanceRepo2 = getRepository('shoppingcart')
    try {

        result2 = await instanceRepo2.query(`select * from shoppingcart s  
        where s."userId" = '${produto.user}'
        and s.finished is false 
        limit 1`)

        if(!result2.length){
            result2 = await instanceRepo2.save({user:produto.user, finished:false})
            produto.shoppingcart = result2.id
        }else {
            produto.shoppingcart = result2[0].id
        }
        
    } catch (error) {
        console.log(error)
    }
    
    
    try {
        const instanceRepo = getRepository('shoppingcartitems')
        let result3 : any = await instanceRepo.query(`select * from shoppingcartitems s2  
        where s2."produtoId" = '${produto.produtoId}'
        and s2."shoppingcartId" = '${produto.shoppingcart}'
        and s2."userId" = '${produto.user}'
        limit 1`)
       
       let response : any 
        console.log("AQUI "+JSON.stringify(result3))
        if(!result3.length){
            response = await instanceRepo.save(produto)

        }else{
            result3[0].amount += produto.amount
            response = await instanceRepo.save(result3[0])
        }
        return res.status(200).json(response)    
        
    } catch (error) {
        console.log(error)
    }
   
    
}



