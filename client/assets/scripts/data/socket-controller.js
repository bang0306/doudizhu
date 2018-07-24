import defines from '../define'

const SocketController = function () {
    let that = {}
    let _socket = undefined
    that.init = function () {
        _socket = io(defines.serverUrl)
        _socket.on('Welcome', function (data) {
            cc.log('Data received: ' + data)
        })
    }
    that.login = function (uniqueId, nickName, avatarUrl, cb) {
        _socket.emit('login', {
            uniqueId,
            nickName,
            avatarUrl
        })
    }
    return that
}

export default SocketController