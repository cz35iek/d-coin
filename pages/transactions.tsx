// @deno-types="https://servestjs.org/@v1.1.3/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
import type { DFC } from "https://servestjs.org/@v1.1.3/mod.ts";
import Layout from "./shared/layout.tsx";
import Ascii from "./shared/ascii.tsx";

const Basics: DFC = () => {
  return (
    <Layout title="Transakcje">
      <Ascii art ={`
+------------+------------+
| from Alice | to Bob     |
+------------+------------+
|                         |
|      amount 400 Ð       +----------------+
|                         |                |
+-------------------------+                |
                                           |
+------------+------------+                |
| from Alice | to Charlie |                |
+------------+------------+                |             +-----------+
|                         |                |             |           |
|      amount 50 Ð        +----------------+------------->   BLOCK   |
|                         |                              |           |
+-------------------------+                              +-----------+
      `}/>
    </Layout>
  );
};

// default export are used for Server Side Rendering.
export default Basics;
