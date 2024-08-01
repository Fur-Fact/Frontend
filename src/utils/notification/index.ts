export function registerServiceWorker() {
  navigator.serviceWorker
    .register("firebase-messaging-sw.js")
    .then(function (registration) {
      alert(registration);
    })
    .catch(function (error) {
      console.log("Service Worker 등록 실패:", error);
    });
}