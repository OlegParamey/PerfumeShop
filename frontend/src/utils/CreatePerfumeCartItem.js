import { v4 as uuidv4 } from 'uuid'

export const CreatePerfumeCartItem = (perfume, activeOption) => {
    const { capacity, price, imgSrc, title, brand, id } = {
        ...perfume,
        ...activeOption,
    }

    return {
        capacity,
        price,
        imgSrc,
        title,
        brand,
        id,
        quantity: 1,
        subtotal: +price,
        productId: uuidv4(),
    }
}
