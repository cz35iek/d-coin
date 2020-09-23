// @deno-types="https://servestjs.org/@v1.1.3/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
import type { DFC } from "https://servestjs.org/@v1.1.3/mod.ts";
import Layout from "./shared/layout.tsx";
import Editor from "./shared/editor.tsx";

const Basics: DFC = () => {
  return (
    <Layout title="Konkurs">
      <p>
        Zadanie bonusowe będzie polegało na wydobyciu bloku o trudności "0000" i
        podesłaniu mailem na adres marketing@nbc.com.pl
      </p>
      <Editor
        id="blockchain"
        isFolded={true}
        editorHeight="100%"
        code={`//region imports
import { createHash } from "https://deno.land/std/hash/mod.ts";
import * as secp from "https://deno.land/x/secp256k1/mod.ts";
import { encodeToString } from "https://deno.land/x/std@0.63.0/encoding/hex.ts";

class Transaction {
  fromAddress: string | null;
  toAddress: string;
  amount: number;
  signature?: string;

  constructor(fromAddress: string | null, toAddress: string, amount: number) {
    this.fromAddress = fromAddress;
    this.toAddress = toAddress;
    this.amount = amount;
  }

  calculateHash() {
    const sha256 = createHash("sha256");

    return sha256.update(this.fromAddress + this.toAddress + this.amount)
      .toString();
  }

  async signTransaction(signingKey: string) {
    if (secp.getPublicKey(signingKey) !== this.fromAddress) {
      throw new Error("You cannot sign transactions for other wallets!");
    }

    const hashTx = this.calculateHash();
    const sig = await secp.sign(hashTx, signingKey);
    this.signature = sig;
  }

  isValid() {
    if (this.fromAddress === null) {
      return true;
    }

    if (!this.signature || this.signature.length === 0) {
      throw new Error("No signature in this transaction");
    }

    return secp.verify(this.signature, this.calculateHash(), this.fromAddress);
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

  hasValidTransactions() {
    for (const tx of this.transactions) {
      if (!tx.isValid()) {
        return false;
      }
    }

    return true;
  }
}

class Blockchain {
  chain: Block[] = [this.createGenesisBlock()];
  difficulty: string = "0000";

  pendingTransactions: Transaction[] = [];

  miningReward: number = 100;

  createGenesisBlock() {
    return new Block([], "0");
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  createTransaction(transaction: Transaction) {
    this.pendingTransactions.push(transaction);
  }

  minePendingTransactions(miningRewardAddress: string) {
    let block = new Block(this.pendingTransactions, this.getLatestBlock().hash);
    block.mineBlock(this.difficulty);

    this.chain.push(block);

    this.pendingTransactions = [
      new Transaction(null, miningRewardAddress, this.miningReward),
    ];
  }

  getBalanceOfAddress(address: string) {
    let balance = 0; // you start at zero!

    for (const block of this.chain) {
      for (const trans of block.transactions) {
        if (trans.fromAddress === address) {
          balance -= trans.amount;
        }

        if (trans.toAddress === address) {
          balance += trans.amount;
        }
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
//endregion
const block = new Block([]);

block.mineBlock(/* TODO */)

console.log(JSON.stringify(block))`}
      />
    </Layout>
  );
};

// default export are used for Server Side Rendering.
export default Basics;
