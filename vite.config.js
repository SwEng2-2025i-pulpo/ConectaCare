import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/create-patient': {
        target: 'http://127.0.0.1:3002',
        changeOrigin: true
      },
      '/auth': {
        target: 'http://localhost:3003',
        changeOrigin: true
      }
    }
  }
})
