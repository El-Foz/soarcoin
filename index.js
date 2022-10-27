const SHA256 = require('crypto-js/sha256');
class Block{
    constructor(index, timestamp, data, previousHash){
      this.index = index;
      this.timestamp = timestamp;
      this.data = data;
      this.previousHash = previousHash;
      this.hash = this.generateHash();
    }
  
    generateHash(){
      return SHA256(this.index + this.timestamp + this.previousHash + JSON.stringify(this.data)).toString()
    }
}
class Blockchain{
    constructor(){
        this.blockchain = [this.createGenesisBlock()];
    }
    createGenesisBlock(){
        return new Block(0, new Date(), "first block ", "0");
    }
    getTheLatestBlock(){
        return this.blockchain[this.blockchain.length - 1];
    }
    addNewBlock(newBlock, senderpublic, signature){
        newBlock.previousHash = this.getTheLatestBlock().hash;
        newBlock.hash = newBlock.generateHash();
        this.blockchain.push(newBlock);
    }

    // testing the integrity of the chain
    
    
}
class Wallet{
    publicKey;
    privateKey;
    cryptomount
    constructor() {
        const keypair = crypto.generateKeyPairSync('rsa', {
          modulusLength: 2048,
          publicKeyEncoding: { type: 'spki', format: 'pem' },
          privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
        });
    
        this.privateKey = keypair.privateKey;
        this.publicKey = keypair.publicKey;
    }
    
}
const soarcoin=new Blockchain()