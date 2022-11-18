const crypto = require('crypto')

var firstNameList = ['Mike', 'David', 'Eva', 'Samantha'];
var lastNameList = ['Harrow', 'Smith', 'Black', 'White'];

class User {

    constructor(firstName, lastName, email, password) {
        this.name = firstName;
        this.lastName = lastName
        this.email = email
        this.password = password
    }
}


const generatePassword = (
    length = 14,
    characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$'
) =>
    Array.from(crypto.randomFillSync(new Uint32Array(length)))
        .map((x) => characters[x % characters.length])
        .join('')


function getDefaultUser() {
    return User('Jon', 'Snow', 'jon.snow@mail.com', 'StrongPassword')
}


function uniqueRandom(range) {
    return Math.floor(Math.random() * range)
}


export function createUserCredentials() {
    let firstName = firstNameList[uniqueRandom(3)]
    let lastName = lastNameList[uniqueRandom(3)]
    let number = uniqueRandom(100)
    let email = `${firstName}.${lastName}${number}@mail.com`
    return new User(firstName, lastName, email, generatePassword())
}