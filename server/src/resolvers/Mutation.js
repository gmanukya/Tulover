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

    if (!stockholderId) {
        stockholderId = createStockholder(args.stockholderName)
    }

    const transaction = {
        id: uuidv4(),
        amount: args.amount,
        stockholder_id: stockholderId,
        date: args.date
    }

    transactionsData.push(transaction)
    return transaction
}

module.exports = {
    createTransaction
}
