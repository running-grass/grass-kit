import { defineConfig } from 'vite';
import path from 'path'
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/web-component/index.ts'),
      name: 'XStyleWC',
      // the proper extensions will be added
      fileName: 'x-style'
    },
  }
});