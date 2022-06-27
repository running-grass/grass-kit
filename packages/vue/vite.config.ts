import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
        entry: path.resolve(__dirname, './src/main.ts'),
        name: 'XStyleVue',
        // the proper extensions will be added
        fileName: 'grass-kit-vue'
    }
  },
  plugins: [vue()]
})
