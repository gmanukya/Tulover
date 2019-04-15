const moment = require('moment')
const Transaction = require('../models/Transaction')
const Stockholder = require('../models/Stockholder')

const getSharesAmount = (stockholderId, date) => {
    const transactions = Transaction.getTransactions(stockholderId, date)

    return transactions.reduce(
        (total, transaction) => total + transaction.amount,
        0
    )
}

const allStockholders = (parent, args, context) => {
    let date

    if (!args.date) {
        date = moment().toISOString()
    }

    const stockholders = Stockholder.getAllStockholders()

    return stockholders.map(stockholder => ({
        id: stockholder.id,
        name: stockholder.name,
        shares: getSharesAmount(stockholder.id, args.date || date)
    }))
}

const stockholder = (parent, args, context) => {
    return Stockholder.getStockholder(args.id)
}

const transactions = (parent, args, context) => {
    return Transaction.getTransactions(args.stockholderId)
}

module.exports = {
    stockholder,
    allStockholders,
    transactions
}
