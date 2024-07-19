import { defineConfig } from "astro/config";
import lottie from "astro-integration-lottie";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [lottie(), mdx(), sitemap()],
  trailingSlash: "always",
  site: "https://www.garywintle.com",
  integrations: [
    mdx(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
