import * as CryptoJs from "crypto-js";

class Block {
    static calculateHash = (
        index:number,
        previousHash:string,
        data : string,
        timestamp : number
    ):string => CryptoJs.SHA256(index + previousHash + timestamp + data).toString();
    static validateStructure = (block : Block) : boolean => (
        typeof block.index === "number"
        && typeof block.hash === "string"
        && typeof block.previousHash === "string"
        && typeof block.data === "string"
        && typeof block.timestamp === "number"
    )
    public index:number;
    public hash:string;
    public previousHash:string;
    public data : string;
    public timestamp : number;
    constructor(
        index:number,
        hash:string,
        previousHash:string,
        data : string,
        timestamp : number
    ){
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock:Block = new Block(0, "213h98", "", "Hi", 12345);

let blockchain: Block[] = [genesisBlock]; // telling that blockchain is an array of Block. can check only Block is added.

const getBlockChain = ():Block[] => blockchain;

const getLatestBlock = ():Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = ():number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data:string):Block => {
    const previousBlock : Block = getLatestBlock();
    const newIndex:number = previousBlock.index + 1;
    const newTimeStamp:number = getNewTimeStamp();
    const newHash:string = Block.calculateHash(newIndex, previousBlock.hash, data, newTimeStamp);
    const newBlock: Block = new Block(newIndex, newHash, previousBlock.hash, data, newTimeStamp);
    addBlock(newBlock);
    return newBlock;
}

const getHashForBlock = (block : Block):string => Block.calculateHash(block.index, block.previousHash, block.data, block.timestamp);

const isBlockValid = (candidateBlock : Block, previousBlock : Block):boolean => {
    if (!Block.validateStructure(candidateBlock)){
        return false;
    } else if (previousBlock.index + 1 !== candidateBlock.index){
        return false;
    } else if (previousBlock.hash !== candidateBlock.previousHash){
        return false;
    } else if (getHashForBlock(candidateBlock) !== candidateBlock.hash){
        return false;
    }
    return true;
} 

const addBlock = (candidateBlock : Block) : void => {
    if (isBlockValid(candidateBlock, getLatestBlock())) {
        blockchain.push(candidateBlock);
    }
}

createNewBlock("2nd");
createNewBlock("third block");
console.log(blockchain);

export {};