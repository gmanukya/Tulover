const Shareholder = require('../models/Stockholder')
const { stockholder } = require('../resolvers/Query')

// TODO: Add more tests
test('Adding a new stockholder to the database', () => {
    const newStockholderId = Shareholder.createStockholder('John Doe')
    const newStockholder = {
        id: newStockholderId,
        name: 'John Doe'
    }

    expect(stockholder(undefined, { id: newStockholderId })).toEqual(
        newStockholder
    )
})
