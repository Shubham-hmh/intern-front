

console.log('Service Worker Loaded...');
self.addEventListener('push', event => {
  const data = event.data.json();
  console.log('Push Received:', data);

 const options = {
    body: data.body || 'Notified by MoreTasks',
    icon: data.icon || 'https://moretasks.com/images/morelogo.png',
    data: {
      url: data.url || 'https://moretasks.com/',
      timestamp: data.timestamp || Date.now(),
      id: data.id || 'default-id'
    }
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  const urlToOpen = event.notification.data.url ||  "https://moretasks.com/"

  event.waitUntil(
    clients.openWindow(urlToOpen)
  );
});
