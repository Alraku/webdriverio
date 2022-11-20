const crypto = require('crypto')
const generator = require('creditcard-generator')
const { cityList,
        countryList,
        firstNameList,
        lastNameList } = require('../webdriverio/constants')

class User {

    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.location = new Location()
        this.creditCard = new CreditCard();
    }
}

class CreditCard {

    constructor() {
        let random = uniqueRandom(12) + 1;

        this.number = generator.GenCC()[0];
        this.month = String(random).padStart(2, '0');
        this.year = '2025';
    }
}

class Location {

    constructor() {
        this.city = cityList[uniqueRandom(4)]
        this.country = countryList[uniqueRandom(2)]
    }
}

const generatePassword = (
    length = 14,
    characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$'
) =>
    Array.from(crypto.randomFillSync(new Uint32Array(length)))
        .map((x) => characters[x % characters.length])
        .join('')

function uniqueRandom(range) {
    return Math.floor(Math.random() * range)
}

function createUser() {
    let firstName = firstNameList[uniqueRandom(3)]
    let lastName = lastNameList[uniqueRandom(3)]
    let number = uniqueRandom(100)
    let email = `${firstName}.${lastName}${number}@mail.com`
    return new User(firstName, lastName, email, generatePassword())
}

export { uniqueRandom, createUser }