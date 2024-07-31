// install event
self.addEventListener("install", (e) => {
  console.log("[Service Worker] installed");
});

// activate event
self.addEventListener("activate", (e) => {
  alert("[Service Worker] actived", e);
});

// fetch event
self.addEventListener("fetch", (e) => {
  console.log("[Service Worker] fetched resource " + e.request.url);
});

self.addEventListener('push', function(event) {
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: 'path-to-your-icon',
    badge: 'path-to-your-badge-icon'
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js', { scope: '/' })
  })
}