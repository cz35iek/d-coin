// @deno-types="https://servestjs.org/@v1.1.3/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
import { DFC } from "https://servestjs.org/@v1.1.3/mod.ts";
import Layout from "./shared/layout.tsx";

const Agenda: DFC = () => {
  return (
    <Layout>
      <h3>Program</h3>
      <div style={{ display: "flex" }}>
        <img style={{ width: "30vw" }} src="https://cdn.glitch.com/90713e5e-413f-4a96-8bde-586609e14788%2Ftg.png?v=1600769918247"></img>
        <ul>
          <li>
            Wstęp
          </li>
          <li>
            Podstawy (blockchain-a)
          </li>
          <li>
            Proof of Work
          </li>
          <li>
            Transakcje (mining)
          </li>
          <li>
            Podpisy (kryptografia klucza publicznego)
          </li>
        </ul>
      </div>
    </Layout>
  );
};

// default export are used for Server Side Rendering.
export default Agenda;
