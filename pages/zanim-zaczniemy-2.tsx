// @deno-types="https://servestjs.org/@v1.1.3/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
import type { DFC } from "https://servestjs.org/@v1.1.3/mod.ts";
import Layout from "./shared/layout.tsx";

const BeforeWeStart: DFC = () => {
  return (
    <Layout>
      <h3>Zanim zaczniemy</h3>
      W dzisiejszym webinarze wykorzystamy:
      <ul>
        <li>
          język typescript,
        </li>
        <li>
          środowisko uruchomieniowe Deno 🦕 (może kiedyś następca node.js),
        </li>
        <li>
          monaco editor (ten z vscode)
        </li>
        <li>
          xterm.js jako terminal (ten z vscode)
        </li>
        <li>
          czcionka Fira Code, old-school DOS layout :)
        </li>
      </ul>
      <p style={{ whiteSpace: "pre" }}>
        {`
+-------------------+       +------------------------+       +---------------------+
|                   |       |                        |       |        deno         |
|   monaco editor   +------>+  deno server HTTP/WS   +------>+     subprocess      |
|                   |       |                        |       |     (sandboxed)     |
+-------------------+       +------------------------+       +----------+----------+
                                                                        |
+--------------+                                                        |
|              |                                                        |
|   xterm.js   +<-------------------------------------------------------+
|              |
+--------------+`}
      </p>
    </Layout>
  );
};

// default export are used for Server Side Rendering.
export default BeforeWeStart;
