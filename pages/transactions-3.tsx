// @deno-types="https://servestjs.org/@v1.1.3/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
import type { DFC } from "https://servestjs.org/@v1.1.3/mod.ts";
import Layout from "./shared/layout.tsx";
import Editor from "./shared/editor.tsx";

const Basics: DFC = () => {
  return (
    <Layout title="Transakcje">
      <h5>Blockchain</h5>
      <Editor
        id="block"
        isFolded={true}
        editorHeight="100%"
        code={`//region imports
import { createHash } from "https://deno.land/std/hash/mod.ts";        
class Transaction {
  fromAddress: string | null;
  toAddress: string;
  amount: number;

  constructor(fromAddress: string | null, toAddress: string, amount: number) {
    this.fromAddress = fromAddress;
    this.toAddress = toAddress;
    this.amount = amount;
  }
}

class Block {
  previousHash: string;
  timestamp: Date;
  transactions: Transaction[];
  hash: string;
  nonce: number;

  constructor(transactions: Transaction[], previousHash = "") {
    this.previousHash = previousHash;
    this.timestamp = new Date();
    this.transactions = transactions;
    this.hash = this.calculateHash();
    this.nonce = 0;
  }

  calculateHash() {
    const sha256 = createHash("sha256");

    return sha256.update(
      this.previousHash + this.timestamp.getTime() + JSON.stringify(this.transactions) +
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
  difficulty: string = "0000";

  // Place to store transactions in between block creation
  pendingTransactions: Transaction[] = [];

  // How many coins a miner will get as a reward for his/her efforts
  miningReward: number = 100;

  createGenesisBlock() {
    return new Block([], "0");
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  createTransaction(transaction: Transaction) {
    // There should be some validation here!
    // Push into onto the "pendingTransactions" array
    // TODO
  }

  minePendingTransactions(miningRewardAddress: string) {
    // Create new block with all pending transactions and mine it..
    // TODO

    // Add the newly mined block to the chain
    // TODO

    // Reset the pending transactions and send the mining reward
    // TODO
  }

  getBalanceOfAddress(address: string) {
    let balance = 0; // you start at zero!

    // Loop over each block and each transaction inside the block
    for (const block of this.chain) {
      for (const trans of block.transactions) {
        // If the given address is the sender -> reduce the balance
        // TODO

        // If the given address is the receiver -> increase the balance
        // TODO
      }
    }

    return balance;
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
// region tests
let dcoin = new Blockchain();

console.log("Creating some transactions...");
dcoin.createTransaction(new Transaction("Alice", "Bob", 100));
dcoin.createTransaction(new Transaction("Bob", "Alice", 50));

console.log("Starting the miner...");
dcoin.minePendingTransactions("Dawid");

console.log(
  "Balance of my address is",
  dcoin.getBalanceOfAddress("Dawid"),
);

console.log("Starting the miner again!");
dcoin.minePendingTransactions("Dawid");

console.log(
  "Balance of my address is",
  dcoin.getBalanceOfAddress("Dawid"),
);
//endregion`}
      />
    </Layout>
  );
};

// default export are used for Server Side Rendering.
export default Basics;
