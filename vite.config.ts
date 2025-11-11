import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/CIS371-FinalProject/',
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
