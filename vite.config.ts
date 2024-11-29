import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components'),
      examples: path.resolve(__dirname, './src/examples'),
      layouts: path.resolve(__dirname, './src/layouts'),
      routes: path.resolve(__dirname, 'src/routes.jsx'),
      footerRoutes: path.resolve(__dirname, 'src/footer.routes.jsx'),
      'footer.routes': path.resolve(__dirname, 'src/footer.routes.jsx'),
      pages: path.resolve(__dirname, './src/pages'),
      "*": path.resolve(__dirname, './src'),
      "@": path.resolve(__dirname, './src'),
    },
  },

})
