// @deno-types="https://servestjs.org/@v1.1.3/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
import { DFC } from "https://servestjs.org/@v1.1.3/mod.ts";
import Layout from "./shared/layout.tsx";

const Basics: DFC = () => {
  return (
    <Layout>
      <h3>Ryan Dahl's deno</h3>
      <div style={{ display: "flex" }}>
        <img
          style={{ height: "30vh", backgroundColor: "white" }}
          src="https://cdn.glitch.com/90713e5e-413f-4a96-8bde-586609e14788%2Fdeno-logo.svg?v=1600770847585
        >
        </img>
        <ul>
          <li>
            Secure by default. No file, network, or environment access, unless
            explicitly enabled.
          </li>
          <li>
            Supports TypeScript out of the box.
          </li>
          <li>
            Ships only a single executable file.
          </li>
          <li>
            Has built-in utilities like a dependency inspector (deno info) and a
            code formatter (deno fmt).
          </li>
          <li>
            Has a set of reviewed (audited) standard modules that are guaranteed
            to work with Deno: deno.land/std
          </li>
        </ul>
      </div>
    </Layout>
  );
};

// default export are used for Server Side Rendering.
export default Basics;
