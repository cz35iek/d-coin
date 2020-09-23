window.editors = window.editors || {};
window.terminals = window.terminals || {};

require.config({
  paths: {
    vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min/vs"
  }
});

require(["vs/editor/editor.main"], function() {
  // monaco.languages.setLanguageConfiguration("typescript", {
  //   comments: { lineComment: "@@", blockComment: ["/*", "*/"] },
  // });
  monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
    noSemanticValidation: true,
    noSyntaxValidation: true
  });
  monaco.editor.defineTheme("DOS", {
    base: "vs-dark",
    inherit: true,
    rules: [{ background: "00a8ac" }],
    colors: {
      foreground: "#ffffff",
      focusBorder: "#596f99",
      "input.background": "#00a8ac",
      "inputOption.activeBorder": "#1d4a87",
      "inputValidation.infoBackground": "#051336",
      "inputValidation.infoBorder": "#384078",
      "inputValidation.warningBackground": "#5b7e7a",
      "inputValidation.warningBorder": "#5b7e7a",
      "inputValidation.errorBackground": "#a22d44",
      "inputValidation.errorBorder": "#ab395b",
      "dropdown.background": "#181f2f",
      "list.focusBackground": "#08286b",
      "list.activeSelectionBackground": "#00a8ac",
      "list.inactiveSelectionBackground": "#bbbbbb",
      "list.inactiveSelectionForeground": "#000000",
      "list.hoverBackground": "#061940",
      "list.dropBackground": "#041d52",
      "list.highlightForeground": "#0063a5",
      "pickerGroup.foreground": "#596f99",
      "pickerGroup.border": "#596f99",
      "button.foreground": "#ffffff",
      "button.background": "#1ba026",
      "button.hoverBackground": "#00a8ac",
      "badge.background": "#00a8ac",
      "badge.foreground": "#ffffff",
      "scrollbar.shadow": "#515e91aa",
      "scrollbarSlider.background": "#bbbbbb",
      "scrollbarSlider.hoverBackground": "#3b3f5188",
      "scrollbarSlider.activeBackground": "#3b3f5188",
      "progressBar.background": "#0063a5",
      "editor.background": "#000084",
      "editorWidget.background": "#262641",
      "editor.selectionBackground": "#00a8ac",
      "editor.findMatchHighlightBackground": "#eeeeee44",
      "editorHoverWidget.background": "#000c38",
      "editorHoverWidget.border": "#004c18",
      "editorLink.activeForeground": "#0063a5",
      "diffEditor.insertedTextBackground": "#31958a55",
      "diffEditor.removedTextBackground": "#892f4688",
      "editor.lineHighlightBackground": "#082050",
      "editorCursor.foreground": "#ffff00",
      "editorWhitespace.foreground": "#103050",
      "editorIndentGuide.background": "#002952",
      "editorLineNumber.foreground": "#406385",
      "editorMarkerNavigationError.background": "#ab395b",
      "editorMarkerNavigationWarning.background": "#5b7e7a",
      "editorMarkerNavigation.background": "#060621",
      "peekViewTitle.background": "#10192c",
      "peekView.border": "#2b2b4a",
      "peekViewResult.background": "#060621",
      "peekViewEditor.background": "#10192c",
      "peekViewResult.matchHighlightBackground": "#eeeeee44",
      "peekViewEditor.matchHighlightBackground": "#eeeeee33",
      "tab.activeBackground": "#000084",
      "tab.inactiveBackground": "#bbbbbb",
      "tab.border": "#2b2b4a",
      "tab.inactiveForeground": "#000000",
      "editorGroup.background": "#1c1c2a",
      "editorGroupHeader.tabsBackground": "#1c1c2a",
      "editorGroup.border": "#2b2b4a",
      "editorGroup.dropBackground": "#25375daa",
      "panel.background": "#000084",
      "panel.border": "#bbbbbb",
      "panel.dropBackground": "#000000",
      "panelTitle.activeBorder": "#bbbbbb",
      "statusBar.background": "#ff0000",
      "statusBar.noFolderBackground": "#000084",
      "statusBar.border": "#ffffff",
      "statusBarItem.activeBackground": "#ff0000",
      "statusBarItem.prominentBackground": "#0063a5",
      "statusBarItem.prominentHoverBackground": "#0063a5dd",
      "activityBar.background": "#000084",
      "activityBar.foreground": "#bbbbbb",
      "activityBar.border": "#bbbbbb",
      "activityBar.dropBackground": "#000000",
      "activityBarBadge.background": "#00a8ac",
      "activityBarBadge.foreground": "#ffffff",
      "sideBar.background": "#000084",
      "sideBar.border": "#bbbbbb",
      "sideBarSectionHeader.background": "#000084",
      "sideBarSectionHeader.foreground": "#ffffff",
      "titleBar.activeBackground": "#000084",
      "titleBar.activeForeground": "#ffffff",
      "notification.background": "#182543",
      "statusBar.debuggingBackground": "#10192c",
      "debugToolBar.background": "#051336",
      "debugExceptionWidget.border": "#ab395b",
      "debugExceptionWidget.background": "#051336",
      "extensionButton.prominentBackground": "#5f8b3b",
      "extensionButton.prominentHoverBackground": "#5f8b3bbb",
      "terminal.ansiBlack": "#111111",
      "terminal.ansiRed": "#ff9da4",
      "terminal.ansiGreen": "#d1f1a9",
      "terminal.ansiYellow": "#ffeead",
      "terminal.ansiBlue": "#bbdaff",
      "terminal.ansiMagenta": "#ebbbff",
      "terminal.ansiCyan": "#99ffff",
      "terminal.ansiWhite": "#cccccc",
      "terminal.ansiBrightBlack": "#333333",
      "terminal.ansiBrightRed": "#ff7882",
      "terminal.ansiBrightGreen": "#b8f171",
      "terminal.ansiBrightYellow": "#ffe580",
      "terminal.ansiBrightBlue": "#80baff",
      "terminal.ansiBrightMagenta": "#d778ff",
      "terminal.ansiBrightCyan": "#78ffff",
      "terminal.ansiBrightWhite": "#ffffff"
    }
  });
  monaco.editor.setTheme("DOS");

  for (let editor of document.getElementsByClassName("editor")) {
    const id = editor.dataset.id;
    const code = document.querySelector(`div.code[data-id=${id}]`).innerText;

    editors[id] =
      editors[id] ||
      monaco.editor.create(editor, {
        automaticLayout: true,
        language: "typescript",
        minimap: { enabled: false },
        fontLigatures: true,
        scrollBeyondLastLine: false,
        scrollbar: {
          // alwaysConsumeMouseWheel: false,
          // handleMouseWheel: false,
          useShadows: false,
          verticalHasArrows: true,
          horizontalHasArrows: true,
          vertical: "hidden",
          horizontal: "hidden",
          verticalScrollbarSize: 0,
          horizontalScrollbarSize: 0,
          arrowSize: 0
        },
        // theme: "vs-dark",
        fontFamily: "Fira Code",
        fontSize: 14,
        value: code,
        compilerOptions: {
          allowJs: true,
          baseUrl: ".",
          esModuleInterop: true,
          lib: ["esnext"],
          module: "esnext",
          moduleResolution: "node",
          noEmit: true,
          paths: {
            "http://*": ["../../Library/Caches/deno/deps/http/*"],
            "https://*": ["../../Library/Caches/deno/deps/https/*"]
          },
          pretty: true,
          resolveJsonModule: true,
          target: "esnext"
        },
        include: ["./**/*.ts"]
      });

    const isFolded = editor.dataset.folded;
    if (isFolded) {
      editors[id].trigger("fold", "editor.foldAllMarkerRegions");
    }

    const updateHeight = id => {
      const contentHeight = editors[id].getContentHeight();
      editor.style.height = `${contentHeight}px`;
    };
    editors[id].onDidContentSizeChange(() => updateHeight(id));
  }
});

for (let terminal of document.getElementsByClassName("xtermjs")) {
  const id = terminal.dataset.id;
  if (!window.terminals[id]) {
    const term = new Terminal({
      fontFamily: "Fira Code, monospace",
      fontSize: 14,
      convertEol: true,
      cursorBlink: true,
      cursorStyle: "underline",
      theme: {
        background: "#000084"
      }
    });

    term.open(terminal);
    terminals[id] = term;
  }
}

let btn;
function run(event) {
  const id = event.target.dataset.id;
  btn = event.target;
  btn.disabled = true;
  btn.classList.toggle("rotate");
  const command = encodeURIComponent(
    btoa(escape(editors[event.target.dataset.id].getValue()))
  );

  ws.send(command);
  terminals[id].clear();
}

for (let runButton of document.getElementsByClassName("run")) {
  runButton.onclick = run;
}

let ws;
window.addEventListener("DOMContentLoaded", () => {
  ws = new WebSocket(`ws://localhost:8000/ws`);
  // ws = new WebSocket(`wss://d-coin.glitch.me/ws`);
  ws.addEventListener("open", onConnectionOpen);
  ws.addEventListener("message", onMessageReceived);
});

function onConnectionOpen() {
  console.log("Connection Opened");
  // ws.send("I am sending a message from the client side");
}

function onMessageReceived(event) {
  if (event.data === "$$finished$$") {
    btn.disabled = false;
    btn.classList.toggle("rotate");
  } else {
    for (let id in terminals) {
      terminals[id].write(event.data);
    }
  }
  console.log("Message Received", event);
}
