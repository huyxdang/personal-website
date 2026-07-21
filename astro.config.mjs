import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://www.huyxdang.com",
  trailingSlash: "ignore",
  integrations: [mdx()],
  redirects: {
    "/blog": "/writing",
  },
});
