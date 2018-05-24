const Web3 = require('web3');
const Tx = require('ethereumjs-tx');

const provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/zB5bHmSaCqYES4awEVn2');

const web3 = new Web3(provider);
const contract = require('truffle-contract');
const TokenTokenArtifacts = require('../build/contracts/TokenToken.json');

const Token = require('../models/Token');

const contractAddress = process.env.CONTRACT_ADDRESS;
const ownerAddress = process.env.OWNER_ADDRESS;
const ownerPK = process.env.OWNER_PRIVATE_KEY;


exports.sendTokensRaw = async (address, value) => {
  // set token source, destination and amount

  const amount = web3.utils.toHex(value);

  // get transaction count, later will used as nonce
  const count = await web3.eth.getTransactionCount(ownerAddress);

  const abiArray = TokenTokenArtifacts.abi;
  // Here you may get the abicode from a string or a file, here is a string case

  const contract = new web3.eth.Contract(abiArray, contractAddress, { from: ownerAddress });


  const privateKey = Buffer.from(ownerPK, 'hex');

  const txParams = {
    nonce: web3.utils.toHex(count),
    gasPrice: web3.utils.toHex(2000000000),
    gasLimit: web3.utils.toHex(7100000),
    to: contractAddress,
    value: '0x00',
    data: contract.methods.transfer(address, amount).encodeABI(),
    // EIP 155 chainId - mainnet: 1, ropsten: 3
    chainId: '0x04'
  };

  const tx = new Tx(txParams);
  tx.sign(privateKey);
  console.log('Validation:', tx.validate(true));
  const serializedTx = tx.serialize();

  web3.eth.sendSignedTransaction(`0x${serializedTx.toString('hex')}`)
    .on('receipt', console.log)
    .on('error', console.log);

  // check the balance
//   contract.methods.balanceOf(ownerAddress).call().then((balance) => { console.log(balance); });
};

exports.getBalance = async (address) => {
  const TokenToken = await contract(TokenTokenArtifacts);
  TokenToken.setProvider(provider);
  if (typeof TokenToken.currentProvider.sendAsync !== 'function') {
    TokenToken.currentProvider.sendAsync = function () {
      return TokenToken.currentProvider.send.apply(TokenToken.currentProvider, arguments);
    };
  }
  return new Promise((resolve, reject) => {
    TokenToken.at(contractAddress)
      .then(contract => contract.balanceOf(address, { from: ownerAddress }))
      .then((response) => {
        console.log(response);
        return resolve(response);
      })
      .catch((e) => {
        console.log(e);
        return reject();
      });
  });
};

exports.getTokens = (req, res) => {
  Token.find({}, (err, tokens) => {
    if (err) { console.log(err); }
    console.log(tokens);
    res.send(tokens);
  });
};
