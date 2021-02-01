// $(document).ready(function () {
//     $(".hamburguer").click(function () {
//         $(this).toggleClass("on");
//     });
// });

const hamburguer = document.querySelector(".hamburguer");
const drawerMenuBg = document.querySelector(".drawer__bg");
const drawerList = document.querySelector(".drawer__list");
const drawerMenu = document.querySelector(".drawer__menu");


function hamburguerToggle(){
    hamburguer.classList.toggle("on");
    drawerList.classList.toggle("open");
    drawerMenuBg.classList.toggle("open");
    drawerMenu.classList.toggle("open")
    console.log(hamburguer.classList.value.includes("on"));
    handleOnScrollClass();

}
hamburguer.addEventListener("click", () => {
    hamburguerToggle()

})

function handleOnScrollClass() {
    if (hamburguer.classList.value.includes("on")) {
        hamburguer.classList.remove("onScroll")
    }

    if (window.scrollY > 0 ) {
        if ( !hamburguer.classList.value.includes("on")) {
        hamburguer.classList.add("onScroll")
        }
    }
    if (window.scrollY == 0) {
        hamburguer.classList.remove("onScroll")
    }
    }


window.addEventListener("scroll", () => {
    handleOnScrollClass();
})