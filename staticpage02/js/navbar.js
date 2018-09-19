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
} 