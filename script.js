document.querySelector(".calendar__days").addEventListener("click", (e) => {
  for (let day of document.querySelectorAll(".calendar__day")) {
    day.classList.remove("calendar__day--selected");
  }
  e.target
    .closest(".calendar__day")
    ?.classList.toggle("calendar__day--selected");
});
