import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

// INDIVIDUAL
// const COMPONENTS = [
//   "button",
//   "circular-progress",
//   "checkbox",
//   "circular-progress-four-color",
//   "drawer",
//   "top-app-bar",
//   "icon-button",
//   "fab",
//   "formfield",
//   "linear-progress",
//   "icon",
//   "radio",
//   "switch",
//   "top-app-bar-fixed",
//   "dialog",
//   "list",
//   "list/mwc-list-item",
//   "list/mwc-check-list-item",
//   "list/mwc-radio-list-item",
//   "icon-button-toggle",
//   "slider",
//   "tab",
//   "tab-bar",
//   "snackbar",
//   "textfield",
//   "textarea",
//   "select",
//   "menu",
// ];

// export default COMPONENTS.map((component) => ({
//   input: `@material/mwc-${component}`,
//   plugins: [nodeResolve(), terser({ format: { comments: false } })],
//   output: {
//     file: `build/${component}.js`,
//   },
// }));

// BUNDLES
// const BUNDLES = ["form", "icon", "layout", "list", "progress"];

// export default BUNDLES.map((bundle) => ({
//   input: `bundles/${bundle}.js`,
//   plugins: [nodeResolve(), terser({ format: { comments: false } })],
//   output: {
//     file: `build/${bundle}.js`,
//     inlineDynamicImports: true,
//   },
// }));

// SINGLE
// export default {
//   input: `main.js`,
//   plugins: [nodeResolve(), terser({ format: { comments: false } })],
//   output: {
//     file: `build/single.js`,
//     inlineDynamicImports: true,
//   },
// };

// INDIVIDUAL
const COMPONENTS = [
  "button",
  "circular-progress",
  "checkbox",
  "circular-progress-four-color",
  "drawer",
  "top-app-bar",
  "icon-button",
  "fab",
  "formfield",
  "linear-progress",
  "icon",
  "radio",
  "switch",
  "top-app-bar-fixed",
  "dialog",
  "list",
  "list/mwc-list-item",
  "list/mwc-check-list-item",
  "list/mwc-radio-list-item",
  "icon-button-toggle",
  "slider",
  "tab",
  "tab-bar",
  "snackbar",
  "textfield",
  "textarea",
  "select",
  "menu",
];

export default {
  input: COMPONENTS.map((component) => `@material/mwc-${component}`),
  plugins: [nodeResolve(), terser({ format: { comments: false } })],
  output: {
    dir: `build`,
    chunkFileNames: "[name].js",
    manualChunks: (id, { getModuleInfo }) => {
      const info = getModuleInfo(id);
      if (info.importers.length <= 1) {
        // This will be inlined anyway
        return;
      }

      return "core";
    },
  },
};
