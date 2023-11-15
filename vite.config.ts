import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import viteSvgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(), // take care of aliases from tsconfig.json
    viteSvgr(), // import svg as components import {logo as Logo} from "./logo.svg"
  ],
  assetsInclude: ['**/*.md'],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly', // доступ к свойствам css только через styles.fooBar
      // localsConvention: 'camelCase', //  доступ к свойствам css через styles.fooBar и styles['foo-bar']
      // generateScopedName: "[name]_[local]_[hash:base64:5]",
      // generateScopedName: (
      //   localName: string,
      //   resourcePath: string
      // ) => {
      //   const componentName = resourcePath.split('/').slice(-2, -1);
      //   return componentName + '_' + localName;
      // },
    },
  },
  // build: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks: (id) => {
  //         if (id.includes('node_modules')) return 'vendor'
  //       },
  //     },
  //   },
  // }
});
