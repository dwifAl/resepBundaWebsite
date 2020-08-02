function mobileNavbar() {
	let x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

function dropdownFunction() {
	document.getElementById('listDropdown').classList.toggle("show");
}

window.onclick = (e) => {
	if (!e.target.matches('.dropbtn')) {
		let listDropdown = document.getElementById("listDropdown");
		if (listDropdown.classList.constains('show')) {
			listDropdown.classList.remove('show');
		}
	}
}

function dropdownFunction2() {
	document.getElementById('logoutList').classList.toggle("show");
}

window.onclick = (e) => {
	if (!e.target.matches('.dropbtn')) {
		let listDropdown = document.getElementById("logoutList");
		if (listDropdown.classList.constains('show')) {
			listDropdown.classList.remove('show');
		}
	}
}

function login() {
	const usernameLogin = document.getElementById("username").value;
	const pwdLogin = document.getElementById("password").value;

	if (usernameLogin === "" || pwdLogin === "") {
		alert("Masukan password dan username anda");
	}
	else {
		window.open("index.html","_self");
	}

	historyLogin(usernameLogin);

}

const loginEvent = document.querySelector("#Login-button");

loginEvent.addEventListener("click", (event) => {
	login();
});

function logout() {
	sessionStorage.removeItem("username_login");
}
