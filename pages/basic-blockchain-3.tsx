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
+----------------+
|     BLOCK      |
+----------------+
|  data          |
|  timestamp     |
|  hash          |
+----------------+
      `}
      />
      <Editor
        id="block"
        editorHeight="200px"
        code={`import { createHash } from "https://deno.land/std/hash/mod.ts";

class Block {
  timestamp: Date;
  data: unknown;
  //TODO

  constructor(data: unknown, previousHash: string = "") {
    // TODO
  }

  calculateHash() {
    //TODO
  }
}

console.log(new Block({ amount: 4 }))`}
      />
    </Layout>
  );
};

// default export are used for Server Side Rendering.
export default Basics;
