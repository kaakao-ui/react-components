import path from "path";
import jsx from "acorn-jsx";
import del from "rollup-plugin-delete";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { babel } from "@rollup/plugin-babel";
import { DEFAULT_EXTENSIONS } from "@babel/core";
import cleanup from "rollup-plugin-cleanup";
import { visualizer } from "rollup-plugin-visualizer";
import replace from "@rollup/plugin-replace";

const pkg = require(path.resolve("./package.json"));
const babelOptions = require(path.resolve("../../babel.config.js"));

const externalPackages = [
  "react",
  "styled-components",
  ...Object.keys(pkg.dependencies || {}),
];

export default [
  {
    input: pkg["kaakao:src"],
    external: (id) => externalPackages.includes(id),
    acornInjectPlugins: [jsx()],
    plugins: [
      del({ targets: "dist/*" }),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.build.json" }),
      babel({
        babelHelpers: "bundled",
        babelrc: false,
        exclude: "node_modules/**",
        ...babelOptions,
        extensions: [...DEFAULT_EXTENSIONS, ".ts", ".tsx"],
      }),
      replace({ PACKAGE_VERSION: `'${pkg.version}'`, preventAssignment: true }),
      cleanup({ extensions: ["ts", "tsx"] }),
      visualizer({
        json: true,
        gzipSize: true,
        brotliSize: true,
      }),
    ],
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" },
    ],
  },
];
