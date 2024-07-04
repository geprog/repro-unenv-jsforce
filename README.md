# Repro for unenv / jsforce issue

Running `NITRO_PRESET=cloudflare-pages pnpm build` will fail with the following error:

```
ℹ Building Nuxt Nitro server (preset: cloudflare-pages)                                                                                                                nitro 7:03:20 PM
[plugin node-resolve] Could not resolve import "unenv/runtime/node/string_decoder/index/" in /projects/repro-unenv-jsforce/node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/_stream_readable.js using exports defined in /projects/repro-unenv-jsforce/node_modules/.pnpm/unenv@1.9.0/node_modules/unenv/package.json.

[nitro 7:03:23 PM]  ERROR  Error: Cannot resolve "unenv/runtime/node/string_decoder/index/" from "/projects/repro-unenv-jsforce/node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/_stream_readable.js" and externals are not allowed!


undefined


[7:03:23 PM]  ERROR  Cannot resolve "unenv/runtime/node/string_decoder/index/" from "/projects/repro-unenv-jsforce/node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/_stream_readable.js" and externals are not allowed!

  at Object.resolveId (node_modules/.pnpm/nitropack@2.9.7_@opentelemetry+api@1.9.0_magicast@0.3.4_xml2js@0.6.2/node_modules/nitropack/dist/nitro.mjs:1970:17)
  at async PluginDriver.hookFirstAndGetPlugin (node_modules/.pnpm/rollup@4.18.0/node_modules/rollup/dist/es/shared/node-entry.js:19674:28)
  at async resolveId (node_modules/.pnpm/rollup@4.18.0/node_modules/rollup/dist/es/shared/node-entry.js:18355:26)
  at async ModuleLoader.resolveId (node_modules/.pnpm/rollup@4.18.0/node_modules/rollup/dist/es/shared/node-entry.js:18758:15)
  at async PluginDriver.hookFirstAndGetPlugin (node_modules/.pnpm/rollup@4.18.0/node_modules/rollup/dist/es/shared/node-entry.js:19674:28)
  at async resolveId (node_modules/.pnpm/rollup@4.18.0/node_modules/rollup/dist/es/shared/node-entry.js:18355:26)
  at async ModuleLoader.resolveId (node_modules/.pnpm/rollup@4.18.0/node_modules/rollup/dist/es/shared/node-entry.js:18758:15)
  at async node_modules/.pnpm/@rollup+plugin-commonjs@25.0.8_rollup@4.18.0/node_modules/@rollup/plugin-commonjs/dist/es/index.js:785:16
  at async Promise.all (index 10)
  at async node_modules/.pnpm/@rollup+plugin-commonjs@25.0.8_rollup@4.18.0/node_modules/@rollup/plugin-commonjs/dist/es/index.js:777:32
  at async rewriteRequireExpressionsAndGetImportBlock (node_modules/.pnpm/@rollup+plugin-commonjs@25.0.8_rollup@4.18.0/node_modules/@rollup/plugin-commonjs/dist/es/index.js:1354:28)
  at async transformCommonjs (node_modules/.pnpm/@rollup+plugin-commonjs@25.0.8_rollup@4.18.0/node_modules/@rollup/plugin-commonjs/dist/es/index.js:1933:23)
  at async transform (node_modules/.pnpm/rollup@4.18.0/node_modules/rollup/dist/es/shared/node-entry.js:18676:16)
  at async ModuleLoader.addModuleSource (node_modules/.pnpm/rollup@4.18.0/node_modules/rollup/dist/es/shared/node-entry.js:18892:36)



[7:03:23 PM]  ERROR  Cannot resolve "unenv/runtime/node/string_decoder/index/" from "/projects/repro-unenv-jsforce/node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/_stream_readable.js" and externals are not allowed!

 ELIFECYCLE  Command failed with exit code 1.
```