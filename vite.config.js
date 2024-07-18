import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/online_mcq_web/',
  plugins: [react()],
});
