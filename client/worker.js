self.addEventListener('push', ()=>{
    self.registration.showNotification('Hello World' ,{})
})