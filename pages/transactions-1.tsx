// @deno-types="https://servestjs.org/@v1.1.3/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
import type { DFC } from "https://servestjs.org/@v1.1.3/mod.ts";
import Layout from "./shared/layout.tsx";
import Editor from "./shared/editor.tsx";

const Basics: DFC = () => {
  return (
    <Layout title="Transakcje">
      <Editor
        id="block"
        editorHeight="100%"
        code={`class Transaction {
  fromAddress: string | null;
  toAddress: string;
  amount: number;

  constructor(fromAddress: string | null, toAddress: string, amount: number) {
    this.fromAddress = fromAddress;
    this.toAddress = toAddress;
    this.amount = amount;
  }
}`}
      />
    </Layout>
  );
};

// default export are used for Server Side Rendering.
export default Basics;
