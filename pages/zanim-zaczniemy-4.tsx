// @deno-types="https://servestjs.org/@v1.1.3/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
import { DFC } from "https://servestjs.org/@v1.1.3/mod.ts";
import Layout from "./shared/layout.tsx";
import Editor from "./shared/editor.tsx";
import Ascii from "./shared/ascii.tsx";

const Basics: DFC = () => {
  return (
    <Layout>
      <Ascii art={`
  _________  ___  ___  ________  ________  ________          ________  ________  ________  ___  ________  _________   
 |\\___   ___\\\\  \\|\\  \\|\\   __  \\|\\   __  \\|\\   __  \\        |\\   ____\\|\\   ____\\|\\   __  \\|\\  \\|\\   __  \\|\\___   ___\\ 
 \\|___ \\  \\_\\ \\  \\\\\\  \\ \\  \\|\\  \\ \\  \\|\\ /\\ \\  \\|\\  \\       \\ \\  \\___|\\ \\  \\___|\\ \\  \\|\\  \\ \\  \\ \\  \\|\\  \\|___ \\  \\_| 
      \\ \\  \\ \\ \\  \\\\\\  \\ \\   _  _\\ \\   __  \\ \\  \\\\\\  \\       \\ \\_____  \\ \\  \\    \\ \\   _  _\\ \\  \\ \\   ____\\   \\ \\  \\  
       \\ \\  \\ \\ \\  \\\\\\  \\ \\  \\\\  \\\\ \\  \\|\\  \\ \\  \\\\\\  \\       \\|____|\\  \\ \\  \\____\\ \\  \\\\  \\\\ \\  \\ \\  \\___|    \\ \\  \\ 
        \\ \\__\\ \\ \\_______\\ \\__\\\\ _\\\\ \\_______\\ \\_______\\        ____\\_\\  \\ \\_______\\ \\__\\\\ _\\\\ \\__\\ \\__\\        \\ \\__\\
         \\|__|  \\|_______|\\|__|\\|__|\\|_______|\\|_______|       |\\_________\\|_______|\\|__|\\|__|\\|__|\\|__|         \\|__|
                                                               \\|_________|                                           
      `} />
      <Editor
        id="factorial"
        editorHeight="35vh"
        code={`const factorial =
  (n: bigint): bigint => {
    // TODO
  }

console.log('elo', factorial(100n));`}
      />
    </Layout>
  );
};

// default export are used for Server Side Rendering.
export default Basics;
