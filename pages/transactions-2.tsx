// @deno-types="https://servestjs.org/@v1.1.3/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
import type { DFC } from "https://servestjs.org/@v1.1.3/mod.ts";
import Layout from "./shared/layout.tsx";
import Editor from "./shared/editor.tsx";

const Basics: DFC = () => {
  return (
    <Layout title="Transakcje">
      <h5>Block</h5>
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
//endregion
class Block {
  previousHash: string;
  timestamp: Date;  
  hash: string;
  nonce: number;
  // TODO

  constructor(transactions: Transaction[], previousHash = "") {
    this.previousHash = previousHash;
    this.timestamp = new Date();
    this.hash = this.calculateHash();
    this.nonce = 0;
    // TODO
  }

  calculateHash() {
    const sha256 = createHash("sha256");

    return sha256.update(
      this.previousHash + this.timestamp.getTime() +
      // TODO
        this.nonce
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
//region tests
console.log(new Block([
  new Transaction("Alice", "Bob", 400),
  new Transaction("Alice", "Charlie", 50),
  new Transaction("Bob", "Charlie", 200),
]));
//endregion`}
      />
    </Layout>
  );
};

// default export are used for Server Side Rendering.
export default Basics;
