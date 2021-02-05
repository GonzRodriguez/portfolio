// $(document).ready(function () {
//     $(".hamburguer").click(function () {
//         $(this).toggleClass("on");
//     });
// });

const hamburguer = document.querySelector(".hamburguer");
const drawerMenuBg = document.querySelector(".drawer__bg");
const drawerList = document.querySelector(".drawer__list");
const drawerMenu = document.querySelector(".drawer__menu");
const myWorkCollapseIcon = document.querySelectorAll(".collapse");
const servicesOnScreen = document.querySelector(".services__greenBlock");

console.log(myWorkCollapseIcon);


function hamburguerToggle(){
    hamburguer.classList.toggle("on");
    drawerList.classList.toggle("open");
    drawerMenuBg.classList.toggle("open");
    drawerMenu.classList.toggle("open")
    handleFloatMenuClass();

}
hamburguer.addEventListener("click", () => {
    hamburguerToggle()

})

function handleFloatMenuClass() {
    if (hamburguer.classList.value.includes("on")) {
        hamburguer.classList.remove("floatMenu")
    }

    if (window.scrollY > 0 ) {
        if ( !hamburguer.classList.value.includes("on")) {
        hamburguer.classList.add("floatMenu")
        }
    }
    if (window.scrollY == 0) {
        hamburguer.classList.remove("floatMenu")
    }
    }


window.addEventListener("scroll", () => {
    handleFloatMenuClass();
    handleGreenBoxAnimation()

})

function handleGreenBoxAnimation() {

    
    if (window.pageYOffset >= 550) {
        servicesOnScreen.classList.add("onScreen");
    }
    if (window.pageYOffset <= 550) {
        servicesOnScreen.classList.remove("onScreen");
    }

}

myWorkCollapseIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        icon.parentElement.parentElement.querySelector(".myWork__item__description").classList.toggle("open")
    })
});