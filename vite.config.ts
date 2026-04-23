import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vite sometimes ignores uppercase asset extensions during import analysis.
  // Treat `loading.MP4` (and any other MP4) as a static asset.
  assetsInclude: ['**/*.MP4', '**/*.mp4'],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
