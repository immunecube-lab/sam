import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        brand: resolve(__dirname, 'brand/index.html'),
        sincerity: resolve(__dirname, 'sincerity/index.html'),
        meister: resolve(__dirname, 'meister/index.html'),
        science: resolve(__dirname, 'science/index.html'),
        profile: resolve(__dirname, 'profile/index.html'),
        products: resolve(__dirname, 'products/index.html'),
        hongsanyusu: resolve(__dirname, 'products/hongsanyusu.html')
      }
    }
  }
});
