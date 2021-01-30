// $(document).ready(function () {
//     $(".hamburguer").click(function () {
//         $(this).toggleClass("on");
//     });
// });

const hamburguer = document.querySelector(".hamburguer");
const navMenuBg = document.querySelector(".nav__bg");
const navList = document.querySelector(".nav__list");

function hamburguerToggle(){
    hamburguer.classList.toggle("on");
    navList.classList.toggle("open");
    navMenuBg.classList.toggle("open");
}
hamburguer.addEventListener("click", () => {
    hamburguerToggle()
})
