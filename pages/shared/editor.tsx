// @deno-types="https://servestjs.org/@v1.1.3/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
import { DFC } from "https://servestjs.org/@v1.1.3/mod.ts";

const Editor: DFC<
  {
    id: string;
    code: string;
    isFolded?: boolean;
    editorHeight?: string;
    terminalHeight?: string;
  }
> = ({ id, code, isFolded, editorHeight, terminalHeight }) => {
  return (
    <>
      <div>
        <div className="code" data-id={id} style={{ display: "none" }}>
          {code}
        </div>
        <div
          className="editor"
          data-id={id}
          data-folded={isFolded}
          style={{
            height: editorHeight || "80vh",
            width: "60vw",
            marginLeft: "20vw",
          }}
        >
        </div>
        <button
          className="run"
          data-id={id}
        />
      </div>
      <div>
        <div
          className="xtermjs"
          data-id={id}
          style={{ height: terminalHeight || "100%", overflowY: "hidden" }}
        >
        </div>
      </div>
      <script src="/runtime.js" />
    </>
  );
};

// default export are used for Server Side Rendering.
export default Editor;
