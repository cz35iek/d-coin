// @deno-types="https://servestjs.org/@v1.1.3/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
import type { DFC } from "https://servestjs.org/@v1.1.3/mod.ts";
import Layout from "./shared/layout.tsx";
import Editor from "./shared/editor.tsx";

const Basics: DFC = () => {
  return (
    <Layout title="Podpisy">
      <Editor
        id={"crypto"}
        isFolded={true}
        code={`//region imports
import * as secp from "https://deno.land/x/secp256k1/mod.ts";
import { encodeToString } from "https://deno.land/x/std@0.63.0/encoding/hex.ts";
//endregion
const myPrivateKey: string = encodeToString(secp.utils.randomPrivateKey());
const myPublicKey = secp.getPublicKey(myPrivateKey);
const messageHash = "9c1185a5c5e9fc54612808977ee8f548b2258d31";

const signature = await secp.sign(messageHash, myPrivateKey);
const isSigned = secp.verify(signature, messageHash, myPublicKey);

console.log('Priate key: ', myPrivateKey)
console.log('Wallet address: ', myPublicKey);
console.log('Signature: ', signature);
console.log('isSigned: ', isSigned);`}
      />
    </Layout>
  );
};

// default export are used for Server Side Rendering.
export default Basics;
