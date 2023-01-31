(function () {
    window.onresize = displayWindowSize;
    window.onload = displayWindowSize;

    function displayWindowSize() {
        let myWidth = window.innerWidth;
        let myHeight = window.innerHeight;
        // your size calculation code here
        document.getElementById("width-value").innerHTML = myWidth;
        document.getElementById("height-value").innerHTML = myHeight;
    };


})();

var dpr = window.devicePixelRatio;
document.getElementById("dpr-value").innerHTML = dpr;