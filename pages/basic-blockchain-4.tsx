// @deno-types="https://servestjs.org/@v1.1.3/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
import type { DFC } from "https://servestjs.org/@v1.1.3/mod.ts";
import Layout from "./shared/layout.tsx";
import Editor from "./shared/editor.tsx";
import Ascii from "./shared/ascii.tsx";

const Basics: DFC = () => {
  return (
    <Layout title="Podstawy">
      <Ascii
        art={`        
+-------------------+           +-------------------+           +-------------------+
| previousHash      |     +-----+ previousHash      |     +-----+ previousHash      |
+-------------------+     |     +-------------------+     |     +-------------------+
| hash    <---------------+     | hash     <--------------+     | hash              |
| data ...          |           | data ...          |           | data ...          |
+-------------------+           +-------------------+           +-------------------+
      `}
      />
      <Editor
        id="blockchain"
        isFolded={true}
        code={`//region imports
import { createHash } from "https://deno.land/std/hash/mod.ts";
class Block {
  previousHash: string;
  timestamp: Date;
  data: uknown;
  hash: string;

  constructor(data: uknown, previousHash: string = "") {
    this.previousHash = previousHash;
    this.timestamp = new Date();
    this.data = data;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    const sha256 = createHash("sha256");

    return sha256.update(
      this.previousHash + this.timestamp.getTime() + JSON.stringify(this.data),
    ).toString();
  }
}
//endregion

class Blockchain {
  chain: Block[] = [this.createGenesisBlock()];

  createGenesisBlock(): Block {
    // TODO
  }

  getLatestBlock(): Block {
    // TODO            
  }

  addBlock(newBlock: Block) {
    // TODO
  }

  isChainValid(): Boolean {
    // TODO
  }
}

//region tests
const dcoin = new Blockchain();
dcoin.addBlock(new Block({ amount: 4 }));
dcoin.addBlock(new Block({ amount: 8 }));
console.log(dcoin.isChainValid());

dcoin.chain[1].data = { amount: 3 };
console.log(dcoin.isChainValid());
//endregion`}
      />
    </Layout>
  );
};

// default export are used for Server Side Rendering.
export default Basics;
