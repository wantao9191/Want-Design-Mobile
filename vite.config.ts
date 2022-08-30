import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from "path";
function _resolve(dir: string) {
  return resolve(__dirname, dir)
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx({
    transformOn: true,
    mergeProps: true
  })],
  base: './',
  resolve: {
    alias: { '@': _resolve('src') }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: '@import "@/assets/css/var.scss";'
      }
    }
  },
  server: {
    host: '0.0.0.0'
  }
})
