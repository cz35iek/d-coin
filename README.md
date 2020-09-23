# Deno remixable

This application uses [Deno](https://deno.land) instead of node.js. the entry point lives at index.ts

### Problems

while deno does load modules directly over http(s), deno does cache those modules. This might fill up your 200 mb container. To solve this, just remove the cache in your container with `rm -rf /app/.cache/deno && refresh`
