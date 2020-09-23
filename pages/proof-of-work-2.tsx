// @deno-types="https://servestjs.org/@v1.1.3/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
import type { DFC } from "https://servestjs.org/@v1.1.3/mod.ts";
import Layout from "./shared/layout.tsx";
import Editor from "./shared/editor.tsx";

const Basics: DFC = () => {
  return (
    <Layout title="Proof of Work">
      <h5>Block</h5>
      <Editor
        id="block"
        isFolded={true}
        editorHeight="100%"
        code={`import { createHash } from "https://deno.land/std/hash/mod.ts";

class Block {
  previousHash: string;
  timestamp: Date;
  data: unknown;
  hash: string;
  // TODO

  constructor(data: unknown, previousHash: string = "") {
    this.previousHash = previousHash;
    this.timestamp = new Date();
    this.data = data;
    this.hash = this.calculateHash();
    // TODO
  }

  calculateHash() {
    const sha256 = createHash("sha256");
    return sha256.update(/* TODO */).toString();
  }
  
  // hash should start with couple of zeros
  mineBlock(difficulty: string) {
    // TODO
    console.log('Mined block: ', this.hash)
  }
}
//region tests
new Block({}).mineBlock("00");
new Block({}).mineBlock("000");
new Block({}).mineBlock("0000");
//endregion`}
      />
    </Layout>
  );
};

// default export are used for Server Side Rendering.
export default Basics;
