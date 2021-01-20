const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removAcriveClasses();
    panel.classList.add("active");
  });
});

function removAcriveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
