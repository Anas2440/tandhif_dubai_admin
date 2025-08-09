import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/tandhif_Dubai/',
  build: {
    chunkSizeWarningLimit: 1600, // default 500 KB
  }
})
  

