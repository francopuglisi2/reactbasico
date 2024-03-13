import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
    base: "https://francopuglisi2.github.io/reactbasico2",
  })
