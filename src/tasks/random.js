module.exports = function(define) {
    return function build(context) {
        return function exec(done) {
            done(null, Math.random().toString());
        }
    }
}