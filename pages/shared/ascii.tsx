// @deno-types="https://servestjs.org/@v1.1.3/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
import { DFC } from "https://servestjs.org/@v1.1.3/mod.ts";

const Ascii: DFC<{ art: string }> = ({ art }) => {
  return (
    <p style={{ whiteSpace: "pre" }}>{art}</p>
  );
};

// default export are used for Server Side Rendering.
export default Ascii;
