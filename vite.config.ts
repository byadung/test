import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/test/', // 이 부분을 추가해야 깃허브 페이지가 올바른 경로로 파일을 읽어옵니다!
})
