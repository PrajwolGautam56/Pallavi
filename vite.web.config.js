import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
export default defineConfig({
  root: resolve(__dirname, 'web'),
  publicDir: resolve(__dirname, 'public'),
  plugins: [react()],
  build: { outDir: resolve(__dirname, 'dist'), emptyOutDir: true },
  server: { proxy: { '/api': 'http://localhost:3002' } }
});
