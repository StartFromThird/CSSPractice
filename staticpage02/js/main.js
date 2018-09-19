window.onload = function () {
	//navbar
	var navbaropen = document.getElementById("navbaropen");
	var navbartab = document.getElementById('navbartab');
	var tabtime=0;
	navbaropen.onclick = nabaropen;
	function nabaropen(){
		tabtime++;
		if(tabtime%2==1){
        	navbartab.style.display="block";
        }
        else{
        	navbartab.style.display="none";	
        }
    }
    //carousel
    var carouselbox = document.getElementById('carouselbox');
    var list = document.getElementById('list');
    var indicators = document.getElementById('indicators').getElementsByTagName('span');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var index = 1;
    var len = 3;
    var animated = false;
    var interval = 4000;
    var timer;
    function animate (offset) {
        if (offset == 0) {
            return;
        }
        animated = true;
        var time = 300;
        var inteval = 10;
        var speed = offset/(time/inteval);
        var left = parseInt(list.style.left) + offset;
        var go = function (){
            if ( (speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) { 
                list.style.left = parseInt(list.style.left) + speed + '%';
                setTimeout(go, inteval);
            }
            else {
                list.style.left = left + '%';
                if(left>-50){
                    list.style.left = -100 * len + '%';
                }
                if(left<(-100 * len)) {
                    list.style.left = '-100' + '%';
                }
                animated = false;
            }
        }
        go();
    }
    function showButton() {
        for (var i = 0; i < indicators.length ; i++) {
            if( indicators[i].className == 'on'){
                indicators[i].className = '';
                break;
            }
        }
        indicators[index - 1].className = 'on';
    }
    function play() {
        timer=setInterval(function(){next.onclick();},interval)
        //timer = setTimeout(function () {
        //    next.onclick();
        //    play();
        //}, interval);
    }
    function stop() {
        clearInterval(timer);
        //clearTimeout(timer);
    }
    next.onclick = function () {
        if (animated) {
            return;
        }
        if (index == 3) {
            index = 1;
        }
        else {
            index += 1;
        }
        animate(-100);
        showButton();
    }
    prev.onclick = function () {
        if (animated) {
            return;
        }
        if (index == 1) {
            index = 3;
        }
        else {
            index -= 1;
        }
        animate(100);
        showButton();
    }
    for (var i = 0; i < indicators.length; i++) {
        indicators[i].onclick = function () {
            if (animated) {
                return;
            }
            if(this.className == 'on') {
                return;
            }
            var myIndex = parseInt(this.getAttribute('index'));
            var offset = -100 * (myIndex - index);
            animate(offset);
            index = myIndex;
            showButton();
        }
    }
    carouselbox.onmouseover = stop;
    carouselbox.onmouseout = play;
    play();

}	