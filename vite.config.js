import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default {
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'src/css/*', 
          dest: 'assets',
        },
        {
          src: 'src/images/*',
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
}