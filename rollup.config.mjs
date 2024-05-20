import typescript from "@rollup/plugin-typescript";

/**
 * @type {import("rollup").RollupOptions}
 */
export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.es.js",
      format: "es",
      sourcemap: true,
    },
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true,
    },
  ],
  plugins: [typescript()],
};
