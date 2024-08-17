const form = document.querySelector("form");
const ratingCardBackEl = document.querySelector(".rating-card__back");
const ratingCardFrontEl = document.querySelector(".rating-card__front");
const ratingDisplayEl = document.querySelector(".selected-rating");
const wrapper = document.querySelector(".rating-card__front");

function ratingFormSubmit(event) {
  event.preventDefault();
  const rating = new FormData(event.target).get("rating");
  if (rating) {
    wrapper.style.height = wrapper.offsetHeight + "px";
    ratingDisplayEl.textContent = rating;
    ratingCardFrontEl.classList.add("rating-card--disabled");
    ratingCardBackEl.classList.remove("rating-card--disabled");
    console.log(event.target);
  }
}

form.addEventListener("submit", ratingFormSubmit);
