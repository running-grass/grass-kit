import { defineConfig } from 'vite';
import path from 'path'

import react from '@vitejs/plugin-react'


export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      name: 'XStyleReact',
      // the proper extensions will be added
      fileName: 'x-style-react'
    },
  },
  plugins: [
    react(),
  ]
});