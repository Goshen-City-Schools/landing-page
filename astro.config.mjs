import { defineConfig } from "astro/config";
// import react from "@astrojs/react";
// import remarkToc from "remark-toc";
// import remarkCollapse from "remark-collapse";
// import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [tailwind({
    applyBaseStyles: false
  }), icon({
    include: {
      mdi: ["*"] // (Default) Loads entire Material Design Icon set
    }
  }), react(), sitemap(), mdx({ optimize: true,})]
  // react(),
  // sitemap(),
  ,
  

  markdown: {
    // remarkPlugins: [
    //   remarkToc,
    //   [
    //     remarkCollapse,
    //     {
    //       test: "Table of contents",
    //     },
    //   ],
    // ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true
    }
  },
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    speedInsights: {
      enabled: true
    }
  }),
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  },
  scopedStyleStrategy: "where",
  output: "server",
  adapter: vercel()
});