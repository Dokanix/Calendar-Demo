document.querySelector(".calendar__days").addEventListener("click", (e) => {
  for (let day of document.querySelectorAll(".day")) {
    day.classList.remove("day--selected");
  }
  e.target.closest(".day")?.classList.toggle("day--selected");
});

/*
document.querySelector(".events-list").addEventListener("click", (e) => {
  e.target.closest(".events-list__item").remove();
  if (document.querySelectorAll(".events-list__item").length == 0) {
    document.querySelector(
      ".events-list"
    ).innerHTML = `<li class="events-list__item events-list__item--project">
    <h3>Wytwarzanie Aplikacji Internetowych</h3>
    <div class="events-list__info">
      <div class="events-list__time">11:30 - 12:45</div>
      <div class="events-list__category">Projekt</div>
    </div>
  </li>
  <li
    class="events-list__item events-list__item--selected events-list__item--exam"
  >
    <h3>Języki Programowania</h3>
    <div class="events-list__info">
      <div class="events-list__time">14:00 - 15:20</div>
      <div class="events-list__category">Kolokwium</div>
    </div>
  </li>
  <li class="events-list__item events-list__item--lab">
    <h3>Fizyka Współczesna</h3>
    <div class="events-list__info">
      <div class="events-list__time">16:15 - 17:00</div>
      <div class="events-list__category">Laboratorium</div>
    </div>
  </li>
  <li class="events-list__item events-list__item--other">
    <h3>Grafika Komputerowa</h3>
    <div class="events-list__info">
      <div class="events-list__time">17:15 - 18:00</div>
      <div class="events-list__category">Inne</div>
    </div>
  </li>`;
  }
});
*/

document.querySelector(".button--settings").addEventListener("click", () => {
  const settings = document.querySelector(".calendar__settings");
  settings.style.display = settings.style.display === "none" ? "block" : "none";
});

document
  .querySelector(".calendar__setting-option--dark")
  .addEventListener("click", () => {
    document.body.setAttribute("data-theme", "dark");
  });

document
  .querySelector(".calendar__setting-option--light")
  .addEventListener("click", () => {
    document.body.setAttribute("data-theme", "light");
  });
