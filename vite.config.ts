import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import checker from 'vite-plugin-checker'

const path = require("path");
const forgeResolver = require('@3squared/forge-ui/utilities').forgeResolver
// import { createVuePlugin as vue } from 'vite-plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    Components({ /* options */
      resolvers: [forgeResolver()]
    }),
    Pages(),
    checker({ vueTsc: true }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: /~(.+)/,
        replacement: path.join(process.cwd(), 'node_modules/$1'),
      },
    ],
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
})
