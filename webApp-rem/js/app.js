window.onload = function() {


	// 显示隐藏导航菜单函数开始
	var menu = document.getElementById("menu");
	menu.onclick = function() {
		var nav = document.getElementById("nav");
		if(nav.style.display == "inline") {
			nav.style.display = "none";
		}else {
			nav.style.display = "inline";
		}
	}
	// 显示隐藏导航菜单函数结束
	
	var bannerDom = document.getElementsByClassName("_banner");
	var liWidth = document.body.clientWidth;
	for(var i = 0; i < bannerDom.length; i++) {
		bannerDom[i].style.width = liWidth + "px";
	}
	
	// 图片轮播
	var bannerDots = document.getElementsByClassName("bannerDot")[0].getElementsByTagName("span")
	var n = 0;
	function autoPlay() {
		if(n == 3) {
			n = 0;
		}else {
			n++
		}
	}
	function carousel() {
		switch(n) {
			case 0 : 
				bannerDots[0].className = "";
				bannerDots[1].className = "current";
				break;
			case 1 : 
				bannerDots[1].className = "";
				bannerDots[2].className = "current";
				break;
			case 2 : 
				bannerDots[2].className = "";
				bannerDots[0].className = "current";
				break;

		}
	}
	setInterval(carousel, 20);
	setInterval(autoPlay, 1600);
	// 图片轮播

}