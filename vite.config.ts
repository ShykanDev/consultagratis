import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Unimport from 'unimport/unplugin'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unimport.vite({
      addons: {
        vueTemplate: true,
      },
      imports: [{ name: 'push', from: 'notivue' }],
    }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  base: '/consultagratis',
})
