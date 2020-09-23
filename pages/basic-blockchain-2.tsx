// @deno-types="https://servestjs.org/@v1.1.3/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
import type { DFC } from "https://servestjs.org/@v1.1.3/mod.ts";
import Layout from "./shared/layout.tsx";
import Editor from "./shared/editor.tsx";

const Basics: DFC = () => {
  return (
    <Layout title="Podstawy">
      <h4>hash</h4>
      <ul>
        <li>H(x) = x mod 13 (nie jest dobra)</li>
        <li>MD5 (1992)</li>
        <li>SHA-1 (1995)</li>
        <li>SHA-224 (2001)</li>
        <li><strong>SHA-256 (2001)</strong></li>
        <li>SHA-512 (2001)</li>
      </ul>
      <Editor
        id="hash"
        editorHeight="200px"
        code={`import { createHash } from "https://deno.land/std/hash/mod.ts";

function getHash(data: unknown) {
  // TODO
}

console.log(getHash("aaa"))
console.log(getHash("aaa"))
console.log(getHash('aab'))`}
      />
    </Layout>
  );
};

// default export are used for Server Side Rendering.
export default Basics;
