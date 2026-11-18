import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
const root = resolve(__dirname, 'admin');
export default defineConfig({ root, publicDir: false, plugins: [react()], base: '/admin/', build: { outDir: resolve(__dirname, 'dist/admin'), emptyOutDir: false } });
