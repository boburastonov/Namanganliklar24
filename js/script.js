const modalWIndow = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");

window.onclick = function (e) {
  if (e.target == modalWIndow) {
    modalWIndow.style.display = "none";
  }
};

closeBtn.addEventListener("click", () => {
  modalWIndow.style.display = "none";
});

const modalOpener = setTimeout(() => {
  modalWIndow.style.display = "block";
}, 120000);
