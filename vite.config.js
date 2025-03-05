import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/css/*', 
          dest: 'assets',
        },
        {
          src: 'src/assets/*',
          dest: 'assets',
        },
      ],
    })
  ],
  build: {
    outDir: 'build',
  },
  server: {
    allowedHosts: [
      'localhost'
    ]
  }
})