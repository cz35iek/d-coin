// @deno-types="https://servestjs.org/@v1.1.3/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
import type { DFC } from "https://servestjs.org/@v1.1.3/mod.ts";
import Layout from "./shared/layout.tsx";

const Basics: DFC = () => {
  return (
    <Layout title="Podpisy">
      <h3>Dystrybucja klucza publicznego</h3>
      <img src="https://cdn.glitch.com/90713e5e-413f-4a96-8bde-586609e14788%2FAsymmetric_cryptography_-_step_1.svg.png?v=1600769891293" />
      <h3>Komunikacja</h3>
      <img src="https://cdn.glitch.com/90713e5e-413f-4a96-8bde-586609e14788%2FAsymmetric_cryptography_-_step_2.svg.png?v=1600769900423" />
    </Layout>
  );
};

// default export are used for Server Side Rendering.
export default Basics;
