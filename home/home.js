var welcomeText = document.getElementById("welcomeText");
var logoutBtn = document.getElementById("logoutBtn");

var sessionUsername = localStorage.getItem("sessionUsername") || "User";

if (welcomeText) {
	welcomeText.textContent = "Welcome " + sessionUsername;
}

if (logoutBtn) {
	logoutBtn.addEventListener("click", function () {
		localStorage.removeItem("sessionUsername");
		location.href = "../index.html";
	});
}
