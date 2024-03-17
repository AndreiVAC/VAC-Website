import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://atc-2024-valve-anti-cheat-be-linux-web-app.azurewebsites.net/api',
        changeOrigin: true,
      },
    },
  },
})
