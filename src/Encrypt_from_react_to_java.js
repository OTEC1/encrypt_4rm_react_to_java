import React from 'react'
const Cryptr = require('cryptr')
const keys = new Cryptr('ZgGDBnaHNOysFNaKVl8oMoOL6bk5oRV6H8PddR6jK2Q=')


const Com = props => {
    const ECES = keys.encrypt('ones')
const dec =keys.decrypt(encryptString)
console.log(dec)
console.log(ECES)
    return <h1>Two</h1>
}
 

export  default Com