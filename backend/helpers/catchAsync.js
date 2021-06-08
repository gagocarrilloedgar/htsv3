/**
 * Wrapper that has a function fn as parameter an handles the error
 * @param {*} fn
 * @returns
 */

 module.exports = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch((err) => next(err))
    }
}