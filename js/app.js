function scrollToTop(o){var e;0<o?(o-=10,window.scrollTo(0,o),e=setTimeout(function(){scrollToTop(o-=10)},5)):clearTimeout(e)}window.onscroll=function(){var o=document.body.scrollTop||document.documentElement.scrollTop;document.getElementById("myTop").style.display=20<o?"block":"none"},document.getElementById("myTop").addEventListener("click",function(o){o.preventDefault(),scrollToTop(document.documentElement.scrollTop)});