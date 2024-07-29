async function getDeviceToken() {
  const token = await getToken(messaging, {
    vapidKey: import.meta.env.VITE_APP_VAPID_KEY,
  });

  setDeviceToken({
    token: token,
  });
}