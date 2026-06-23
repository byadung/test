import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/test/',
  build: {
    // CSS와 자바스크립트 빌드 파일들이 깨지지 않도록 자산 경로 구성을 최적화합니다.
    cssCodeSplit: false,
  }
})
