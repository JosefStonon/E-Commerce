const notifyer = {
    async init() {
        const permission = await Notification.requestPermission()
        if(permission !== "granted") {
            throw new error('Permission negaded ')
        }
    },
    notify( title, body ) {
        new Notification('Quqlauer', {
            body:'dentro da caixa'
        })
    }
}
module.exports =  { notifyer }