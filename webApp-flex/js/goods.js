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

	// 收藏/取消
	var collect = document.getElementById("collect");
	var collected = document.getElementById("collected");
	var cancle = document.getElementById("cancle");
	collect.onclick = function() {
		if(collected.style.display == "inline"){
			collected.style.display = "none";
			cancle.style.display = "inline";
		}else {
			collected.style.display = "inline";
			cancle.style.display = "none";
		}		
	}

	// 弹窗显示商品详情
}