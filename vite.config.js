import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/tandhif_Dubai/', // yeh tumhara live sub-path hai
})
  

