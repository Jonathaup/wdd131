const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navbar-temple");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});
