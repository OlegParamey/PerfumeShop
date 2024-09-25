export default function CreateFilterList(array) {
    // sort((a ,b)=> a-b)
    let res = {
        brand: [],
        title: [],
        price: {
            from: 0,
            to: 0,
        },
    }
    let priceList = []

    array.forEach((obj) => {
        if (!res.brand.includes(obj.brand)) {
            res.brand.push(obj.brand)
        }
        if (!res.title.includes(obj.title)) {
            res.title.push(obj.title)
        }
        priceList.push(...obj.productInfo.map((obj) => obj.price))
    })

    priceList.sort((a, b) => a - b)

    if (priceList.length > 0) {
        res.price.from = priceList[0] // Lowest price
        res.price.to = priceList[priceList.length - 1] // Highest price
    }

    return res
}
