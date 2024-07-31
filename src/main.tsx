import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.tsx'
import { registerServiceWorker } from './utils/notification/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

registerServiceWorker();
Notification.requestPermission().then((permission) => {
  if (permission !== "granted") {
    // 푸시 거부됐을 때 처리할 내용
  } else {
    // 푸시 승인됐을 때 처리할 내용
  }
});
