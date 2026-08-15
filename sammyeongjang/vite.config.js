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
        goryeoRedGinsengExtract: resolve(__dirname, 'products/goryeo-red-ginseng-extract.html'),
        redGinsengSlices: resolve(__dirname, 'products/red-ginseng-slices.html'),
        redGinsengLiquid: resolve(__dirname, 'products/red-ginseng-liquid.html'),
        redGinsengCandy: resolve(__dirname, 'products/red-ginseng-candy.html'),
        redGinsengCrackers: resolve(__dirname, 'products/red-ginseng-crackers.html'),
        redGinsengJelly: resolve(__dirname, 'products/red-ginseng-jelly.html'),
        premiumRedGinsengCheongGold: resolve(__dirname, 'products/premium-red-ginseng-cheong-gold.html')
      }
    }
  }
});
