window.onload = function() {
	// 显示隐藏导航菜单函数开始
	var menu = document.getElementById("menu");
	var main_menu = document.getElementById("main_menu");
	menu.onclick = function() {
		if(main_menu.style.display == "inline") {
			main_menu.style.display = "none";
		}else {
			main_menu.style.display = "inline";
		}
	}
	// 显示隐藏导航菜单函数结束
}