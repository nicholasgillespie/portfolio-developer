import postcssPresetEnv from "postcss-preset-env";

export default {
  plugins: [
    postcssPresetEnv({
      // Stage 0: Idea stage, features are just proposals.
      // Stage 1: Proposal stage, features are under consideration.
      // Stage 2: Draft stage, features have an initial specification.
      // Stage 3: Candidate recommendation stage, features await final review.
      // Stage 4: Final stage, features are official CSS features.
      // Features at stage level or higher will be polyfilled.
      stage: 3,
      features: {
        // Add or remove specific features here.
        // If feature is set to true ? polyfilled : not be polyfilled.
        // List of features & stages: https://preset-env.cssdb.org/features/
        "opacity-percentage": true,
        "text-decoration-shorthand": true,
        "logical-properties-and-values": false,
        "prefers-color-scheme-query": false,
        "gap-properties": false,
        "custom-properties": false,
        "place-properties": false,
        "not-pseudo-class": false,
        "focus-visible-pseudo-class": false,
        "focus-within-pseudo-class": false,
        "color-functional-notation": false,
      },
    }),
  ],
};
