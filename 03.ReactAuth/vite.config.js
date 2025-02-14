import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // añado el path para poder saber la ruta

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // configuramos alias para mis carpetas @
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, './src'),
    }
  }
})
