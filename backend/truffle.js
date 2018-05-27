module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*' // match any network
    },
    live: {
      host: 'geth',
      port: 8545,
      network_id: '*', // match any network
      gas: 7000000,
      gasPrice: 10
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};
