import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080/api',
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});

// https://vitejs.dev/config/
// export default ({ mode }) => {
//   process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
//   const config = {
//     plugins: [react()],
//     server: {
//       proxy: {
//         '/api': {
//           target: process.env.VITE_BASE_URL,
//           changeOrigin: true,
//           secure: false,
//           rewrite: (path) => path.replace(/^\/api/, ''),
//         },
//       },
//     },
//   };
//   return defineConfig(config);
// };
