import axios from '../config/axios'

export async function ReturnAllProducts(req : any, res : any ){
    const result = await axios.get('produto/quantidade?depositoId=eb17e046-ac58-4273-8bb3-94650d16c559')

    result.data.forEach((element : any, index : number) => {
        result.data[index].valor_medio = Math.round(element.valor_medio*1.5)
    });

    console.log(result.data)

    return res.status(200).json(result.data)
}


