
document.querySelectorAll(".next").forEach(btn => {
  btn.addEventListener("click", () => {
    const current = document.querySelector(".step.active");
    const next = current.nextElementSibling;
    if (next && next.classList.contains("step")) {
      current.classList.remove("active");
      next.classList.add("active");
    }
  });
});

document.querySelectorAll(".prev").forEach(btn => {
  btn.addEventListener("click", () => {
    const current = document.querySelector(".step.active");
    const prev = current.previousElementSibling;
    if (prev && prev.classList.contains("step")) {
      current.classList.remove("active");
      prev.classList.add("active");
    }
  });
});
