// @deno-types="https://servestjs.org/@v1.1.3/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
import { DFC } from "https://servestjs.org/@v1.1.3/mod.ts";

const Layout: DFC<{ title?: string }> = (
  { title = "Blockchain DYI", children },
) => {
  return (
    <html>
      <head>
        <meta charSet={"UTF-8"} />
        <title>{title}</title>
        <link
          rel="stylesheet"
          data-name="vs/editor/editor.main"
          href="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min/vs/editor/editor.main.min.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/xterm@4.8.1/lib/xterm.min.js">
        </script>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/xterm@4.8.1/css/xterm.css"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min/vs/loader.min.js"
        >
        </script>
        <script
          src="/navbar.js"
        >
        </script>
        <link
          rel="stylesheet"
          href="/layout.css"
        />
      </head>
      <body>
        <h1>{title}</h1>
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
};

// default export are used for Server Side Rendering.
export default Layout;
