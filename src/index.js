var btcbamjs = require('bitcoinjs-lib')

Object.assign(btcbamjs.networks, require('./networks'))

btcbamjs.utils = require('./utils')

module.exports = btcbamjs