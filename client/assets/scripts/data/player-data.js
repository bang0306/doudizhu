let playerData = function () {
    let that = {}
    that.uid = undefined
    that.uniqueId = 1000
    that.nickName = '小明' + Math.floor(Math.random() * 10)
    that.avatarUrl = 'http://www.qqzhi.com/uploadpic/2015-01-11/072917257.jpg'
    that.houseCardCount = 0
    for (let i = 0; i < 7; i ++) {
        that.uniqueId += Math.floor(Math.random() * 10)
    }
    that.wxLoginSuccess = function (data) {
        that.uniqueId = data.uniqueId
        that.nickName = data.nickName
        that.avatarUrl = data.avatarUrl
    }
    that.loginSuccess = function (data) {
        cc.log('data = ' + JSON.stringify(data))
    }
    return that
}

export default playerData