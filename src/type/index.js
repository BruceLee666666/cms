
/**
 * 判断是否是字符串
 * @return {Boolean} [true|false]
 */
export function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]'
}
/**
 * 判断是否数组
 * @return {Boolean} [true|false]
 */
export function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]'
}
/**
 * 判断是否对象
 * @return {Boolean} [true|false]
 */
export function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
}
/**
 * 判断是否函数
 * @return {Boolean} [true|false]
 */
export function isFunction(obj) {
    return typeof obj === 'function'
}
/**
 * 判断是否是数字
 * @return {Boolean} [true|false]
 */
export function isNumber(obj) {
    return Object.prototype.toString.call(obj) === '[object Number]'
}
/**
 * 判断是否是布尔值
 * @return {Boolean} [true|false]
 */
export function isBoolean(obj) {
    return Object.prototype.toString.call(obj) === '[object Boolean]'
}
/**
 * 判断是否是null
 * @return {Boolean} [true|false]
 */
export function isNull(obj) {
    return obj === null
}
