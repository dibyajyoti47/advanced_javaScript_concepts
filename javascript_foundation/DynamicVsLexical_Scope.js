const a  = function () {
    console.log('a', (this === global));
    const b = function() {
        console.log('b', (this === global));
        const c = {
            hi: function () {
                console.log('c', this)
            }
        }
        c.hi();
    }
    b();
}
a();


// a, window
// b, window    -- b function was called inside function a, so technically window called b(), so this belongs to window
// c, {hi: f}