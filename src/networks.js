module.exports = {
    btcbam: {
        messagePrefix: '\x15Btcbam Signed Message:\n',
        bech32: 'qc',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4
        },
        pubKeyHash: 0x1a,
        scriptHash: 0x05,
        wif: 0x99
    },
    btcbam_testnet: {
        messagePrefix: '\x15Btcbam Signed Message:\n',
        bech32: 'tq',
        bip32: {
            public: 0x043587cf,
            private: 0x04358394
        },
        pubKeyHash: 0x33,
        scriptHash: 0x32,
        wif: 0xb2
    }
}
