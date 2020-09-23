// @deno-types="https://servestjs.org/@v1.1.3/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
import type { DFC } from "https://servestjs.org/@v1.1.3/mod.ts";
import Ascii from "./shared/ascii.tsx";
import Editor from "./shared/editor.tsx";
import Layout from "./shared/layout.tsx";

const Basics: DFC = () => {
  return (
    <Layout title="credits">
      <Ascii
        art={`
██████╗        ██████╗ ██████╗ ██╗███╗   ██╗
██╔══██╗      ██╔════╝██╔═══██╗██║████╗  ██║
██║  ██║█████╗██║     ██║   ██║██║██╔██╗ ██║
██║  ██║╚════╝██║     ██║   ██║██║██║╚██╗██║
██████╔╝      ╚██████╗╚██████╔╝██║██║ ╚████║
╚═════╝        ╚═════╝ ╚═════╝ ╚═╝╚═╝  ╚═══╝
      `}
      />
      <Editor
        id="credits"
        isFolded={true}
        code={`//region credits
"all credits goes to ->\\n - Xavier Decuyper - @savjee\\n - Oskar Wieczorek / Paweł Rajba - itcourses.eu/blockchain (ii.uni.wroc.pl) \\n - Wojciech Górecki"
  .split("")
  .map((c, i) => { setTimeout(() => Deno.stdout.write(new TextEncoder().encode(c)), i * 250 + Math.random() * 100) })
//endregion
        `}
      />
    </Layout>
  );
};

// default export are used for Server Side Rendering.
export default Basics;
