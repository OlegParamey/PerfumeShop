export default function CreateFilterList(array) {
    // sort((a ,b)=> a-b)
    const res = {
        brand: [],
        title: [],
        capacity: [],
        price: {
            from: 0,
            to: 0,
        },
    }
    let priceList = []
    let capacityList = []

    array.forEach((obj) => {
        if (!res.brand.includes(obj.brand)) {
            res.brand.push(obj.brand)
        }
        if (!res.title.includes(obj.title)) {
            res.title.push(obj.title)
        }
        if (obj.productInfo && obj.productInfo.length > 0) {
            priceList.push(...obj.productInfo.map((info) => info.price))

            obj.productInfo.forEach((info) => {
                if (!capacityList.includes(info.capacity)) {
                    capacityList.push(info.capacity)
                }
            })
        }
    })

    priceList.sort((a, b) => a - b)
    capacityList.sort((a, b) => a - b)

    if (priceList.length > 0) {
        res.price.from = priceList[0] // Lowest price
        res.price.to = priceList[priceList.length - 1] // Highest price
    }

    if (capacityList.length > 0) {
        res.capacity = [...capacityList]
    }

    return res
}
