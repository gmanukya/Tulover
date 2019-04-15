const uuidv4 = require('uuid/v4')
const { stockholdersData } = require('../db.js')

const createStockholder = name => {
    const stockholderId = uuidv4()
    const stockholder = {
        id: stockholderId,
        name: name
    }

    stockholdersData.push(stockholder)

    return stockholderId
}

const getStockholder = stockholderId => {
    return stockholdersData.find(
        stockholder => stockholder.id === stockholderId
    )
}

const getAllStockholders = () => {
    return stockholdersData
}

module.exports = {
    createStockholder,
    getStockholder,
    getAllStockholders
}
