import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteSvgr from 'vite-plugin-svgr';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteSvgr()],
  server: {
    port: 3000,
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
