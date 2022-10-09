const viewPopUp = document.querySelector(".view-pop-up__btn");
const nextBtn = document.querySelector(".pop-up__btn-next");
const nextBtn2 = document.querySelector(".pop-up__btn-next--left");
const closeBtn = document.querySelector(".pop-up__close");

const popUp = document.querySelector(".pop-up");
const popUpContent = document.querySelector(".pop-up__content");
const newPopup = document.querySelector(".pop-up-2__content");

/* viewPopUp.addEventListener("click", function () {
  popUp.style.display = "block";
  popUpContent.style.display = "block";
}); */

closeBtn.addEventListener("click", function () {
  popUp.classList.add("pop-up");
});

nextBtn.addEventListener("click", function () {
  newPopup.classList.add("pop-up-2__content-active");
});

nextBtn2.addEventListener("click", function () {
  newPopup.classList.remove("pop-up-2__content-active");
});
