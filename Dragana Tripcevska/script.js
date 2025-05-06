document.addEventListener("DOMContentLoaded", () => {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const leftBtn = document.querySelector(".left");
  const rightBtn = document.querySelector(".right");

  if (!sliderWrapper || !leftBtn || !rightBtn) {
    console.error("Некој од елементите не постои!");
    return;
  }

  const scrollAmount = 400;

  rightBtn.addEventListener("click", () => {
    sliderWrapper.scrollBy({ left: scrollAmount, behavior: "auto" });
  });

  leftBtn.addEventListener("click", () => {
    sliderWrapper.scrollBy({ left: -scrollAmount, behavior: "auto" });
  });
});
