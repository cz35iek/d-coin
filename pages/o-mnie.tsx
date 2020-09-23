// @deno-types="https://servestjs.org/@v1.1.3/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
import { DFC } from "https://servestjs.org/@v1.1.3/mod.ts";
import Layout from "./shared/layout.tsx";

const Basics: DFC = () => {
  return (
    <Layout>
      <h3>o mnie</h3>
      <div style={{ display: "flex" }}>
        <img style={{ height: "80vh", width: "30vw" }} src="https://cdn.glitch.com/90713e5e-413f-4a96-8bde-586609e14788%2Fmyface.png?v=1600769942656"></img>
        <ul>
          <li>
            maniak komputerowy od podstawówki
          </li>
          <li>
            początki kariery zawodowej to polski e-commerce
          </li>
          <li>
            doświadczenie 13 lat na stanowiskach programista / architekt / lider
          </li>
          <li>
            ostatnio głównie międzynarodowe projekty branże finansowa /
            entertainment / AI (crowdsourcing)
          </li>
          <li>
            @cz35iek {`->`} twitter | github | mastodon
          </li>
        </ul>
      </div>
    </Layout>
  );
};

// default export are used for Server Side Rendering.
export default Basics;
