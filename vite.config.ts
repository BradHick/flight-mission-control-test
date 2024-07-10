import react from '@vitejs/plugin-react'
import Unfonts from 'unplugin-fonts/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Unfonts({
      google: {
        families: [
          {
            name: 'Open Sans',
            styles: 'ital,wght@0,300..800;1,300..800'
          },
          {
            name: 'Inter',
            styles: 'wght@100..900'
          },
          {
            name: 'Lato',
            styles:
              'ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900'
          }
        ]
      }
    }),
    react()
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
