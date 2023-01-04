const leftArrow = document.querySelector("#leftArrow");
const rightArrow = document.querySelector("#rightArrow");
const speech = document.querySelector("#speech");
const username = document.querySelector("#username");
const bigCircle = document.querySelector("#bigCircle");

rightArrow.addEventListener("click", (event) => {
  event.preventDefault();
  if ((bigCircle.classList = "bigCircle")) {
    speech.innerHTML =
      '"When she was 5-years-old, Hannah Taylor saw a homeless man eating out of a garbage can on a cold winter day. At age 8, Hannah founded The Ladybug Foundation"';
    username.innerHTML = "Hannah Taylor";
    bigCircle.classList.remove("bigCircle");
    bigCircle.classList.toggle("hannah");
  }
});

leftArrow.addEventListener("click", (e) => {
  if ((bigCircle.classList = "hannah")) {
    e.preventDefault();
    speech.innerHTML =
      '"Charity is the act of giving help to those in need of it. It is a humanitarian act. It involves giving money, goods or time and effort to those who need it. It is done without expecting something in return."';
    username.innerHTML = "Neville Griffin";
    bigCircle.classList.remove("hannah");
    bigCircle.classList.toggle("bigCircle");
  }
});
