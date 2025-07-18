// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://grendel-consulting.github.io",
  base: "/cloud-control-tower",
  integrations: [
    starlight({
      title: "Cloud Control Tower",
      favicon: "/images/favicon.svg",
      head: [
        // Add ICO favicon fallback for Safari.
        {
          tag: "link",
          attrs: {
            rel: "icon",
            href: "/images/favicon.ico",
            sizes: "32x32",
          },
        },
      ],
      logo: {
        src: "./src/assets/favicon.svg",
      },

      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/grendel-consulting/cloud-control-tower",
        },
      ],
      sidebar: [],
    }),
  ],
});
