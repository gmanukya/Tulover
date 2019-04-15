const uuidv4 = require('uuid/v4')
const moment = require('moment')
const { transactionsData } = require('../db.js')

const createTransaction = (amount, stockholderId, date) => {
    const transactionId = uuidv4()
    const transaction = {
        id: transactionId,
        amount,
        stockholder_id: stockholderId,
        date
    }

    transactionsData.push(transaction)

    return transactionId
}

const getTransactions = (stockholderId, date) => {
    return transactionsData.filter(transaction => {
        return (
            transaction.stockholder_id === stockholderId &&
            (date ? moment(transaction.date).isBefore(moment(date)) : 1)
        )
    })
}

module.exports = {
    createTransaction,
    getTransactions
}
