const Transaction = require('../models/Transaction')
const Stockholder = require('../models/Stockholder')

const createTransaction = (parent, args, context) => {
    let { stockholderId } = args
    const { amount, date, stockholderName } = args

    if (!stockholderId) {
        stockholderId = Stockholder.createStockholder(stockholderName)
    }

    const transactionId = Transaction.createTransaction(
        amount,
        stockholderId,
        date
    )

    // TODO: add shares to stockholder
    return {
        id: transactionId,
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
