if(Notification.permission !== 'granted') {
    if (confirm('Accepter les notifications ?')){
        Notification.requestPermission().then( permission => {
            console.log(permission)
            if (permission === "granted") {
                console.log("Notifications possible")
            }
        })
    }
}