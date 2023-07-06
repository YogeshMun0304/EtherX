require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/KwSGR1J2oQq5vflWylisrD7vg85QJ_fF',
      accounts: ['1aec37b1aee9194afa2455d876cf34926bccefbe7d58b9b8dbc1093a75b136de'],
    },
  },
};