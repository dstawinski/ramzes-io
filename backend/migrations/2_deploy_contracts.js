const SafeMath = artifacts.require('./SafeMath.sol');
const TokenToken = artifacts.require('./TokenToken.sol');

module.exports = (deployer) => {
  deployer.deploy(SafeMath);
  deployer.link(SafeMath, TokenToken);
  deployer.deploy(TokenToken, 'TokenToken', 'TOK', 2, 100);
};
