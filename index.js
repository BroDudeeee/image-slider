// const initSlider = () => {
// const slideBtns = document.querySelectorAll(".scrollBtn");
// const imgsList = document.querySelector(".imgsList");
// slideBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const direction = btn.id === "prev" ? -1 : 1;
//     const scrollAmount = imgsList.clientWidth * direction;
//     imgsList.scrollBy({ left: scrollAmount, behavior: "smooth" });
//   });
// });
// const handleSlideBtns = () => {
//   slideBtns[0].style.display = imgsList.scrollLeft <= 0 ? "none" : "block";
//   slideBtns[1].style.display =
//     imgsList.scrollLeft >= imgsList.scrollWidth - imgsList.clientWidth
//       ? "none"
//       : "block";
// };
// imgsList.addEventListener("scroll", () => {
//   handleSlideBtns();
// });
// };

// window.addEventListener("load", initSlider);

const slideBtns = document.querySelectorAll(".scrollBtn");
const imgsList = document.querySelector(".imgsList");

slideBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const direction = btn.id === "prev" ? -1 : 1;
    const scrollAmount = imgsList.clientWidth * direction;
    imgsList.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  imgsList.addEventListener("scroll", () => {
    slideBtns[0].style.display = imgsList.scrollLeft <= 0 ? "none" : "block";
    slideBtns[1].style.display =
      imgsList.scrollLeft >= imgsList.scrollWidth - imgsList.clientWidth
        ? "none"
        : "block";
  });
});
