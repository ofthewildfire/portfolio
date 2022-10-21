const flipcard1 = document.getElementById("flipcard1");
const flipcard2 = document.getElementById("flipcard2");
const flipcard3 = document.getElementById("flipcard3");

const projects = document.querySelectorAll(".project-article");

flipcard1.addEventListener("mouseover", function () {
 projects.style.display = "none";
});
