// @deno-types="https://servestjs.org/@v1.1.3/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
import type { DFC } from "https://servestjs.org/@v1.1.3/mod.ts";
import Layout from "./shared/layout.tsx";
import Editor from "./shared/editor.tsx";

const BeforeWeStart: DFC = () => {
  return (
    <Layout>
      <h3>Zanim zaczniemy</h3>
      <img
        style={{ width: "60vw" }}
        src="https://cdn.glitch.com/90713e5e-413f-4a96-8bde-586609e14788%2Fturbo.png?v=1600769929050"
      />
    </Layout>
  );
};

// default export are used for Server Side Rendering.
export default BeforeWeStart;
