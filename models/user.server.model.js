const User = require('../config/db_schemas/user.schema')

/**
 * Creates and returns a new forum user using the userSchema
 * @param {String} username User's username used for login
 * @param {String} name User's name used for public display
 * @param {String} email User's email associated to their account
 * @param {String} hashedPassword User's hased passsword used for login and verification
 */
 exports.create = function(username, name, email, hashedPassword) {
    return newUser = new User({
        username,
        name,
        email,
        hashedPassword
    })
}
