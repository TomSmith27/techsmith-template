import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
const forgeResolver = require('@3squared/forge-ui/utilities').forgeResolver
// import { createVuePlugin as vue } from 'vite-plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
    Components({ /* options */
    resolvers : [forgeResolver()]}),
      Pages()
  ],
})
