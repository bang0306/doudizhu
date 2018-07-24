import global from '../global'

cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        global.socket.init()

    },


    buttonClick (event, customData) {
        cc.log('custom data = ' + customData)
        cc.log(customData === 'wxLogin')
        switch (customData) {
            case 'wxLogin':
                global.socket.login(
                    global.tianba.playerData.uniqueId,
                    global.tianba.playerData.nickName,
                    global.tianba.playerData.avatarUrl,
                    function (err, data) {
                        if (err) {
                            cc.log('login err: ' + err)
                        } else {
                            cc.log('login data: ' + JSON.stringify(data))
                        }
                    }
                )
                break
            default:
                break
        }
    },
    // update (dt) {},
});
