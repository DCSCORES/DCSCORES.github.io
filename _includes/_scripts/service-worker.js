if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Successfully registered the Service Worker
      //console.log('Service Worker registration successful with scope: ', registration.scope);
    }).catch(function(err) {
      // Failed to register the Service Worker
      // console.log('Service Worker registration failed: ', err);
    });
  });
}
