const moment = require('moment')
const { stockholdersData, transactionsData } = require('../db.js')

const getSharesAmount = (stockholderId, date) => {
    const transactions = transactionsData.filter(transaction => {
        return (
            transaction.stockholder_id === stockholderId &&
            moment(transaction.date).isBefore(moment(date))
        )
    })

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

    return stockholdersData.map(stockholder => ({
        id: stockholder.id,
        name: stockholder.name,
        shares: getSharesAmount(stockholder.id, args.date || date)
    }))
}

const stockholder = (parent, args, context) => {
    return stockholdersData.filter(stockholder => stockholder.id == args.id)[0]
}

module.exports = {
    stockholder,
    allStockholders
}
