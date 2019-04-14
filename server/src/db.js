const uuidv4 = require('uuid/v4')
const moment = require('moment')

var stockholdersData = [
    {
        id: 'spaceX-ID',
        name: 'SpaceX'
    },
    {
        id: 'elon-ID',
        name: 'Elon Musk'
    },
    {
        id: 'employees-ID',
        name: 'Emplo Yeez'
    },
    {
        id: 'gor-ID',
        name: 'Gor Manukyan'
    }
]

var transactionsData = [
    {
        id: uuidv4(),
        amount: 10000000,
        stockholder_id: 'spaceX-ID',
        date: moment('2016-12-01').toISOString()
    },
    {
        id: uuidv4(),
        amount: -10000000,
        stockholder_id: 'spaceX-ID',
        date: moment('2018-01-01').toISOString()
    },
    {
        id: uuidv4(),
        amount: 9000000,
        stockholder_id: 'elon-ID',
        date: moment('2018-01-01').toISOString()
    },
    {
        id: uuidv4(),
        amount: 1000000,
        stockholder_id: 'employees-ID',
        date: moment('2018-01-01').toISOString()
    },
    {
        id: uuidv4(),
        amount: 7000000,
        stockholder_id: 'spaceX-ID',
        date: moment('2018-12-01').toISOString()
    },
    {
        id: uuidv4(),
        amount: 500000,
        stockholder_id: 'gor-ID',
        date: moment('2019-04-01').toISOString()
    }
]

module.exports = {
    stockholdersData,
    transactionsData
}
