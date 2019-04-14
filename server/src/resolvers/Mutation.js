const uuidv4 = require('uuid/v4')
const { stockholdersData, transactionsData } = require('../db.js')

const createStockholder = name => {
    const stockholderId = uuidv4()
    const stockholder = {
        id: stockholderId,
        name: name
    }

    stockholdersData.push(stockholder)

    return stockholderId
}

const createTransaction = (parent, args, context) => {
    let { stockholderId } = args
    const { amount, date, stockholderName } = args

    if (!stockholderId) {
        stockholderId = createStockholder(stockholderName)
    }

    const transaction = {
        id: uuidv4(),
        amount,
        stockholder_id: stockholderId,
        date
    }

    transactionsData.push(transaction)

    return {
        id: transaction.id,
        amount,
        date,
        stockholder: {
            id: stockholderId,
            name: stockholderName
        }
    }
}

module.exports = {
    createTransaction
}
