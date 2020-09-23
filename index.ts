import {
  createApp,
  serveJsx,
  serveStatic,
} from "https://servestjs.org/@v1.1.3/mod.ts";

const app = createApp();

app.ws("/ws", async (sock) => {
  for await (const msg of sock) {
    if (typeof msg === "string") {
      const command = unescape(atob(decodeURIComponent(msg)));
      console.log(command);

      const createSandbox = `
await Deno.permissions.revoke({ name: "run" });
await Deno.permissions.revoke({ name: "read" });
await Deno.permissions.revoke({ name: "write" });
await Deno.permissions.revoke({ name: "net" });
await Deno.permissions.revoke({ name: "env" });
await Deno.permissions.revoke({ name: "plugin" });
await Deno.permissions.revoke({ name: "hrtime" });
`;      
      
      const process = Deno.run({
        cmd: [
          "deno",
          "eval",
          "--ts",
          "--unstable",
          createSandbox + command,
        ],
        stdout: "piped",
        stderr: "piped",
      });

      let buff = new Uint8Array(100);
      let n: number | null = 1;

      while (n) {
        n = <number> await process.stdout.read(buff);
        const message = new TextDecoder("utf8").decode(buff.subarray(0, n));

        if (message) {
          await sock.send(message);
          console.log(message);
        }
      }

      const { code } = await process.status();

      if (code !== 0) {
        const rawError = await process.stderrOutput();
        sock.send(new TextDecoder().decode(rawError));
      }
      sock.send("$$finished$$");
    }
  }
});

// .jsx/.tsx files in ./pages directory will be dynamically imported
// and rendered component served as html
app.use(serveJsx("./pages", (f) => {
  console.log("onImport", f);
  return import("./" + f);
}));

app.use(serveStatic("./public", {
  cacheControl: {
    public: true,
    maxAge: 3600,
  },
}));

app.listen({ port: 8000 });
