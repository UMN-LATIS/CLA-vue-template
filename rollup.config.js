import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import vue from "rollup-plugin-vue";
import image from "@rollup/plugin-image";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: 'dist/index.js',
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      vue(),
      image(),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss({
        minimize: true,
        sourceMap: true,
        extensions: [".css"],
      }),
    ],
  },
];