const CACHE_KEY = "username_login";

function historyLogin(username) {
	if (typeof(Storage) !== "undefined") {
		sessionStorage.setItem(CACHE_KEY, username);
	}
	else {
		document.getElementById('showUsername').innerHTML = "invalid system";
	}
}

if (sessionStorage.getItem(CACHE_KEY) !== null) {
	document.getElementById('showUsername').innerHTML = "Selamat datang, "+sessionStorage.getItem(CACHE_KEY);
}

