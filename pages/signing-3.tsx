// @deno-types="https://servestjs.org/@v1.1.3/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
import type { DFC } from "https://servestjs.org/@v1.1.3/mod.ts";
import Layout from "./shared/layout.tsx";
import Editor from "./shared/editor.tsx";

const Basics: DFC = () => {
  return (
    <Layout title="Podpisy">
      <Editor
        id="block"
        isFolded={true}
        editorHeight="100%"
        code={`//region imports
import { createHash } from "https://deno.land/std/hash/mod.ts";
import * as secp from "https://deno.land/x/secp256k1/mod.ts";
//endregion

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
    // TODO We shouldn't be able to sign transactions for other wallets

    // TODO calculate and set signature
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
}`}
      />
    </Layout>
  );
};

// default export are used for Server Side Rendering.
export default Basics;
