window.onload = function() {
	var urlString = new String(window.location.href);
	var selectedTab = document.getElementsByClassName("selected");
	
	if (selectedTab.length <= 0) {
		if (urlString.match("blog")) {
			document.getElementById('blog-tab').className = "selected";
		} else {
			document.getElementById('home-tab').className = "selected";
		}
	}
};