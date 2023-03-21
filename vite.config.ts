import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as dotenv from 'dotenv'
dotenv.config()

const SERVER_PORT: number = parseInt(process.env.SERVER_PORT!);
const PREVIEW_PORT: number = parseInt(process.env.PREVIEW_PORT!);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: SERVER_PORT
  },
  preview: {
    port: PREVIEW_PORT
  }
})
