import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import svg from 'rollup-plugin-svg';

export default defineConfig({
  plugins: [
    react(),
    svg(),
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