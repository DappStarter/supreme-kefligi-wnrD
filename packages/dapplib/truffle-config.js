require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'inflict process broken skull stone note pulse proud hockey enroll surge gesture'; 
let testAccounts = [
"0x0215c71e0fe47be483d2f5a62d0483300c3a29e8347440a4d875aabc91ceaefe",
"0x87583d650d9e5a754a9f802ebb082f8c523e916b8406133ba8b8365b26d2f9ac",
"0xa75ca92144353c0dbeec2f375d0aae5b3bc1f6aef53b5c8c9beebb101022b24d",
"0x8a4da0cf6808ba993969a626f9a1b624773a1a7eb06187f51377cb7049f60cca",
"0x1fc018c99b9fb2791690cb0e5c02b22a6f3296060dc7db4f013ae444770d1376",
"0x335c62ce29a5ebc9b810dd43594a5cf4c75004d5e0073ea13bbbb11000d4b8c5",
"0xdf491193d0d21de4d95f6d88751239da60c0c4970ca038c8b17aeb2d9c8bd4a0",
"0x321f4dc41abab7eb2170cb6cba50726fe470564cb2d58b9136456ad8cb3b3808",
"0xa2d396bece749198c98af7ad071bd105ccec574d5775759a2a1f1729c06570cd",
"0x4121fd711dfd253367f8d8fc12293344cfa3fd08de376b100af985daade6cad7"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


