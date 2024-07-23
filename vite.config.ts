import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // VitePWA({ 
    //   registerType: 'autoUpdate',
    //   includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png', 'masked-icon.svg'],
    //   devOptions:{
    //     enabled: true
    //   },
    //   manifest:{
    //     name: 'Fur-fact',
    //     short_name : 'Fur-fact',
    //     description: 'Get interesting facts about animals',
    //     theme_color: '#40A5FD',
    //     background_color: '#ffffff',
    //     display: 'standalone',
    //     scope: '/',
    //     start_url: '/',
    //     icons: [
    //       {
    //         src: '/pwa-64x64.png',
    //         sizes: '64x64',
    //         type: 'image/png',
    //       },
    //       {
    //         src: '/pwa-192x192.png',
    //         sizes: '192x192',
    //         type: 'image/png',
    //       },
    //       {
    //         src: '/pwa-512x512.png',
    //         sizes: '512x512',
    //         type: 'image/png',
    //       },
    //       {
    //         src:'maskable-icon-512x512.png',
    //         sizes:'512x512',
    //         type:'image/png',
    //         purpose:'maskable'
    //       }
    //     ]
    //   }
    // })
  ],
  // server: {
  //   https: true, // HTTPS 사용
  //   host: '0.0.0.0', // 로컬 네트워크에서 접근 가능하게 설정
  //   port: 5173, // 원하는 포트 번호
  // }
})
