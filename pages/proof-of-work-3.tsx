// @deno-types="https://servestjs.org/@v1.1.3/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
import type { DFC } from "https://servestjs.org/@v1.1.3/mod.ts";
import Layout from "./shared/layout.tsx";
import Editor from "./shared/editor.tsx";

const Basics: DFC = () => {
  return (
    <Layout title="Proof of Work">
      <h5>Blockchain</h5>
      <Editor
        id="blockchain"
        editorHeight="100%"
        isFolded={true}
        code={`//region imports, Block
import { createHash } from "https://deno.land/std/hash/mod.ts";

class Block {
  previousHash: string;
  timestamp: Date;
  data: any;
  hash: string;
  nonce: number;

  constructor(data: any, previousHash: string = "") {
    this.previousHash = previousHash;
    this.timestamp = new Date();
    this.data = data;
    this.hash = this.calculateHash();
    this.nonce = 0;
  }

  calculateHash() {
    const sha256 = createHash("sha256");
    return sha256.update(
      this.previousHash + this.timestamp.getTime() + JSON.stringify(this.data) +
        this.nonce,
    ).toString();
  }

  mineBlock(difficulty: string) {
    while (!this.hash.startsWith(difficulty)) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
    console.log("BLOCK MINED: " + this.hash);
  }
}
//endregion

class Blockchain {
  chain: Block[] = [this.createGenesisBlock()];
  //TODO add difficulty

  createGenesisBlock() {
    return new Block("Genesis block", "0");
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock: Block) {
    newBlock.previousHash = this.getLatestBlock().hash;
    //TODO use mineBlock
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }
}
//region tests
const dcoin = new Blockchain();
console.log("Mining block 1");
var block = new Block({ amount: 4 });
console.log(block);
dcoin.addBlock(new Block({ amount: 4 }));

console.log("Mining block 2");
dcoin.addBlock(new Block({ amount: 8 }));
//endregion`}
      />
    </Layout>
  );
};

// default export are used for Server Side Rendering.
export default Basics;
