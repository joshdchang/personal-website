# personal-website

[TanStack Start](https://tanstack.com/start/latest) + Tailwind, prerendered and
deployed to Cloudflare Workers.

```bash
bun install
bun run dev      # http://localhost:5173
bun run build    # prerender into dist/
bun run preview  # serve the build in workerd
bun run deploy   # build, then wrangler deploy
```

```
src/
  router.tsx         # router instance
  routeTree.gen.ts   # generated from src/routes, committed
  routes/
    __root.tsx       # document shell + head
    index.tsx        # /
  styles/app.css     # tailwind
public/              # favicon set + webmanifest
```

Adding `src/routes/about.tsx` creates `/about` and regenerates the route tree
while `dev` or `build` runs. Hostnames the Worker answers on live in
`wrangler.jsonc`.
