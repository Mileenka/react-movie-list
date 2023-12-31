import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/react-movie-list",
  build: {
    chunkSizeWarningLimit: 1600
  }
})
