import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/payment-app",
  plugins: [react()],
  // base:"/screenshots-payment/"
  
})
