import type { ShikiSetupReturn } from "@slidev/types";
import { defineShikiSetup } from "@slidev/types";
import { transformerTwoslash } from "@shikijs/twoslash";

export default defineShikiSetup((): ShikiSetupReturn => {
  return {
    themes: {
      dark: "material-theme-ocean",
      light: "light-plus",
    },
    transformers: [
      transformerTwoslash({
        explicitTrigger: true,
      }),
    ]
  };
});
