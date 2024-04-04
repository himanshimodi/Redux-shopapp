import { defineConfig } from 'vite';
import reactPlugin from '@vitejs/plugin-react'; // Note the change here

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactPlugin()], // Use the imported plugin here
});

