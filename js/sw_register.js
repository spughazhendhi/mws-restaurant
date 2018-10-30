/* Register Service Worker */
if(navigator.serviceWorker){
  navigator.serviceWorker.register('./sw.js').then(function(){
    console.log('Service Worker Registration Worked');
  }).catch(function(){
    console.log('Service Worker Registration Failed');
  });
}
