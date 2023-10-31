import { defineConfig } from "windicss/helpers";

export default defineConfig({
  extract: {
    include: ["**/*.{vue,html,js,ts}", "../apps/**/*.{vue,html,js,ts}"],
  },
});
