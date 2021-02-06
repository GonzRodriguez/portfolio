// $(document).ready(function () {
//     $(".hamburguer").click(function () {
//         $(this).toggleClass("on");
//     });
// });

const hamburguer = document.querySelector(".hamburguer");
const drawerMenuBg = document.querySelector(".drawer__bg");
const drawerList = document.querySelector(".drawer__list");
const drawerMenu = document.querySelector(".drawer__menu");
const servicesOnScreen = document.querySelector(".services__greenBlock");
const myWorkItems = document.querySelectorAll(".myWork__item");


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
myWorkItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
        item.querySelector(".myWork__item__description").classList.add("open")
        item.querySelector(".divider").classList.remove("hidden")
    })
    item.addEventListener("mouseleave", () => {
        item.querySelector(".myWork__item__description").classList.remove("open")
        item.querySelector(".divider").classList.add("hidden")
    })
});



function inViewport(element) {

    const bb = element.getBoundingClientRect();
    return !(bb.top > innerHeight || bb.bottom < 0);    
}

document.addEventListener('scroll', event => {

    myWorkItems.forEach(item => {

        if (inViewport(item)) {
                item.classList.add("onViewport")

        } else {

            item.classList.remove("onViewport")
        
    }
    });

})