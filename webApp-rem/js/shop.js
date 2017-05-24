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
}