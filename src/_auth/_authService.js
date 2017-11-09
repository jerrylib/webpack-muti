/*
 * @Author: lichbin
 * @Date: 2017-11-09 20:05:12
 */

import Base64 from 'crypto-js/enc-base64'
import HmacSHA256 from 'crypto-js/hmac-sha256'

function _randomCode() {
    let code = ''
    let codeLength = 8 // 验证码的长度
    let chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd',
        'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
        'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] // 所有候选组成验证码的字符，当然也可以用中文的
    for (let i = 0; i < codeLength; i++) {
        let charIndex = Math.floor(Math.random() * 36)
        code += chars[charIndex]
    }
    return code
}

/**
 * 计算auth头
 * @param url 必填，请求地址
 * @param method 必填，http请求方法
 * @param accessToken 必填
 * @param mackey 必填
 * @param adjustTime  选填，服务器与本机的时间差值（毫秒），new Date(authInfo['server_time']).getTime() - new Date().getTime()
 * @returns {*}
 */
function getAuthHeader(url, method, accessToken, mackey, adjustTime = 0) {
    method = method.toUpperCase()
    if (!accessToken || !mackey) {
        return '';
    }

    let strAuth = 'MAC id="' + accessToken + '",nonce="'
    let nonce = (new Date().getTime() + adjustTime) + ':' + _randomCode()

    strAuth += nonce + '",mac="'

    let b = url.indexOf('//') + 2
    let e = url.indexOf('/', b)
    let host = url.substring(b, e)
    let path = url.substring(e)
    let requestContent = nonce + '\n' + method + '\n' + path + '\n' + host + '\n'
    let hash = HmacSHA256(requestContent, mackey)
    let mac = hash.toString(Base64)
    strAuth += mac + '"'
    return strAuth;
}

export {
    getAuthHeader
};