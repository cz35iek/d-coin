// @deno-types="https://servestjs.org/@v1.1.3/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
import type { DFC } from "https://servestjs.org/@v1.1.3/mod.ts";
import Layout from "./shared/layout.tsx";
import Editor from "./shared/editor.tsx";

const Basics: DFC = () => {
  return (
    <Layout title="Konkurs">
      <p>
        Aby sprawdzić zadanie trzeba wkleić odpowiedz w miejscu recievedBlock i
        uruchomić program.
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

  constructor(block: Block) {
    this.previousHash = block.previousHash;
    this.timestamp = new Date(block.timestamp);
    this.transactions = block.transactions;
    this.nonce = block.nonce;
    this.hash = this.calculateHash();
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

//endregion
const recievedBlock = <Block>JSON.parse(
  '{ *** tutaj *** }'
);

const newBlock = new Block(recievedBlock);

const isValid = newBlock.hash === recievedBlock.hash && recievedBlock.hash.startsWith("0000");
  
console.log("Is valid?", isValid);`}
      />
    </Layout>
  );
};

// default export are used for Server Side Rendering.
export default Basics;
