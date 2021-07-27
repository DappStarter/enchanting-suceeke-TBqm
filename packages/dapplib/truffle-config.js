require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace indoor sure security trap cruise ridge toss inflict prison sun slide'; 
let testAccounts = [
"0xc90dcdf00728ea4fd1e6cd4340a73caeaae3165a69944b3c412db81a7c65741a",
"0x3247035f2627125e7b28b3abfc50d72e966d16ba15db543f70d2bd5cb4daa4ca",
"0x8051cbc1a75b2ae1ebc1f534e2b0a871cdf01d3e169ca8a2a7523c3b9bfbeaf6",
"0xa88478bc8d1933e67e7191e0f0ed5ce724bce7a2a04800d17c727683cc4609ed",
"0x980a3dfc2b272241708f8907c6ef17bf4865b1d726df7a253e0ff9628778a16b",
"0xcfca570e2696c72db1c01dcf7ae12236bb697ce7edb0d73c80cc675a71d20a6d",
"0xa12d41750c7cb80377b1ece8a9a90a421911c860ffd76a89c8c0025a280743c6",
"0xf306c10008b43153fd32acca8356c01d9ecb3fb3a959adfc10cdc50d61f41a2b",
"0xc4b048d338fd031ba4677b92fb858e53b13cfd56994b47d81d3be385a53ec098",
"0xdfc2ee395344ede711ca422385e417aa13a552f30c7fe9f930842c0b2bb257b8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

