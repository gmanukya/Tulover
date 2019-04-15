const { GraphQLScalarType } = require('graphql')
const { isISO8601 } = require('validator')

/*
 * This function is called when an inline input parameter should be parsed.
 */
const parseISO8601 = value => {
    if (isISO8601(value)) {
        return value
    }
    throw new Error('DateTime cannot represent an invalid ISO-8601 Date string')
}

/*
 * This function is called when a value is passed to the client.
 */
const serializeISO8601 = value => {
    if (isISO8601(value)) {
        return value
    }
    throw new Error('DateTime cannot represent an invalid ISO-8601 Date string')
}

/*
 * This function is called when an input parameter should be parsed.
 */
const parseLiteralISO8601 = ast => {
    if (isISO8601(ast.value)) {
        return ast.value
    }
    throw new Error('DateTime cannot represent an invalid ISO-8601 Date string')
}

const DateTime = new GraphQLScalarType({
    name: 'DateTime',
    description: 'An ISO-8601 encoded UTC date string.',
    serialize: serializeISO8601,
    parseValue: parseISO8601,
    parseLiteral: parseLiteralISO8601
})

module.exports = {
    DateTime
}
