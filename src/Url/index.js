
/**
 * 获取url中所有参数
 * @return {Object} [{参数1:参数值,参数2:参数值…}]
 */
export function getParamAll(search) {
    let reg = /([^?&=]+)=([^?&=]+)/g, obj = {}
    search.replace(reg, function () {
        obj[arguments[1]] = arguments[2]
    })
    return obj
}
/**
 * 获取某个参数的参数值
 * @param  {string} name [参数名]
 * @return {string}      [参数值]
 */
export function queryParam(search, name) {
    let reg = new RegExp('[?&]' + name + '=([^&]*)(&|$)', 'i')
    let r = search.match(reg)
    if (r != null) return unescape(r[1]); return null
}
/**
 * 参数筛选，去掉undefined|null
 * @param  {object} name [参数]
 * @return {object}      [参数]
 */
export function filterParams(params) {
    if (params && Object.prototype.toString.call(params) === '[object Object]') {
        Object.keys(params).map((k) => {
            (typeof (params[k]) === 'undefined' || params[k] === '') &&
            delete params[k]
            return k
        })
    }
    return params
}
/**
 * 格式化get参数
 * @param  {object} params [对象]
 * @return {string}        [get参数]
 */
export function formatGetParam(params) {
    if (params && Object.prototype.toString.call(params) === '[object Object]') {
        return Object.keys(params)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
            .join('&')
    }
    return ''
}
/**
 * 格式化formData参数
 * @param  {object} params [对象]
 * @return {Object}        []
 */
export function formatFormData(params) {
    let form = new FormData()
    if (params && Object.prototype.toString.call(params) === '[object Object]') {
        Object.keys(params)
            .map(k => form.append(k, params[k]))
    }
    return form
}

/**
 * 对字符串进行解码，如果解码出错就使用unescape
 * @param {String} str 尝试解码的字符串
 */
function tryDecodeUri(str) {
    if (!str) {
        return str
    }
    let res = str
    try {
        res = decodeURI(str)
    } catch (e) {
        let unescapeStr = unescape && unescape(str) // unescape 已被标记为弃用，使用前判断是否存在
        res = unescapeStr || str // unescape 不存在时会返回unescapeStr为undefined，将res重置为输入
        /*eslint-disable*/
        console.error(`${str} decodeURI 失败`,e);
        /*eslint-enable*/
    }
    return res
}

/**
 * 对字符串进行解码，如果解码出错就使用unescape
 * @param {String} str 尝试解码的字符串
 */
function tryDecodeUriComponent(str) {
    if (!str) {
        return str
    }
    let res = str
    try {
        res = decodeURIComponent(str)
    } catch (e) {
        let unescapeStr = unescape && unescape(str) // unescape 已被标记为弃用，使用前判断是否存在
        res = unescapeStr || str // unescape 不存在时会返回unescapeStr为undefined，将res重置为输入
        /*eslint-disable*/
        console.error(`${str} decodeURIComponent 失败`,e);
        /*eslint-enable*/
    }
    return res
}

/**
 * 对字符串进行分串解码，最大化的尝试解码
 * catch到解码错误时打印错误，而不阻断程序的运行
 * @param {String} url 需要解码的字符串
 */
export function decodeOrUnescapeURIComponent(url) {
    if (!url) {
        return url
    }
    let segs = url.split('&')
    segs.forEach(function (seg, key) {
        segs[key] = tryDecodeUriComponent(seg)
    })
    return segs.join('&')
}

/**
 * 对字符串进行分串解码，最大化的尝试解码
 * catch到解码错误时打印错误，而不阻断程序的运行
 * @param {String} url 需要解码的字符串
 */
export function decodeOrUnescapeURI(url) {
    if (!url) {
        return url
    }
    let segs = url.split('&')
    segs.forEach(function (seg, key) {
        segs[key] = tryDecodeUri(seg)
    })
    return segs.join('&')
}


/**
 * 获取url中所有参数(先对URL进行decodeURI)
 * @return {Object} [{参数1:参数值,参数2:参数值…}]
 */
export function getParamAllWithDecodeUri(search) {
    search = decodeOrUnescapeURI(search)
    return getParamAll(search)
}

/**
 * 获取url中所有参数(先对URL进行decodeURIComponent)
 * @return {Object} [{参数1:参数值,参数2:参数值…}]
 */
export function getParamAllWithDecodeUriComponent(search) {
    search = decodeOrUnescapeURIComponent(search)
    return getParamAll(search)
}

// export const Url = {
//     getParamAll,
//     queryParam,
//     filterParams,
//     formatGetParam,
//     formatFormData
// }
