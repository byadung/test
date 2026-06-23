import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // Stub out Figma Make virtual modules so standalone builds succeed
    {
      name: 'figma-stubs',
      resolveId(id) {
        if (id === 'figma:foundry-client-api') return id
        if (id.startsWith('figma:asset/')) return id
      },
      load(id) {
        if (id === 'figma:foundry-client-api') return 'export default {}'
        if (id.startsWith('figma:asset/')) return `export default ''`
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
