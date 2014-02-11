window.onload = function() {
	var selectedTab = document.getElementsByClassName("selected");
	
	if (selectedTab.length <= 0) {
		var urlString = new String(window.location.href);
		if (urlString.match(/darshanprasad\.com\/[a-zA-Z]+/)) {
			document.getElementById('blog-tab').className = "selected";
		} else {
			document.getElementById('home-tab').className = "selected";
		}
	}
};