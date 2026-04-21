import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Target modern browsers for smaller output
    target: 'es2020',
    // Minify with esbuild (faster)
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split react-router-dom into its own chunk
          if (id.includes('react-router-dom') || id.includes('@remix-run') || id.includes('react-router')) {
            return 'vendor-router';
          }
        },
      },
    },
  },
})
