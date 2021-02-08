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
const openDescriptionButtons = document.querySelectorAll(".myWork__item__description__open-button");
const closeDescriptionButtons = document.querySelectorAll(".myWork__item__description__close-button");


function hamburguerToggle(){
    hamburguer.classList.toggle("on");
    drawerList.classList.toggle("open");
    drawerMenuBg.classList.toggle("open");
    drawerMenu.classList.toggle("open")
    hamburguer.classList.toggle("floatMenu")
    if (hamburguer.classList.value.includes("on")) {
        hamburguer.classList.remove("floatMenu")
    }
    window.scrollY == 0 && hamburguer.classList.remove("floatMenu") 
    
    // handleFloatMenuClass();
}
hamburguer.addEventListener("click", () => {
    hamburguerToggle()

})

// function addCloseButton(item, button) {
//     const crossStripe1 = document.createElement("div");
//     const crossStripe2 = document.createElement("div");
//     crossStripe1.style = " transform: rotate( 45deg )";
//     crossStripe2.style = " transform: rotate( 135deg )";
//     item.appendChild(crossStripe1)
//     item.appendChild(crossStripe2)

//     crossStripe1.addEventListener("click", () => {
//         button.classList.toggle("hidden");
//         item.classList.toggle("open");
//     })
//     crossStripe2.addEventListener("click", () => {
//         button.classList.toggle("hidden");
//         item.classList.toggle("open");
//     })

// }

openDescriptionButtons.forEach(button => {
    const item = button.parentElement.parentElement
    const crossStripe1 = document.createElement("div");
    const crossStripe2 = document.createElement("div");
    crossStripe1.style = " transform: rotate( 45deg )";
    crossStripe2.style = " transform: rotate( 135deg )";
 

    button.addEventListener("click", () => {
        button.classList.toggle("hidden");
        item.classList.toggle("open");
        item.querySelector("ul").classList.toggle("hidden");

        crossStripe1.classList.add("myWork__item__close-button");
        crossStripe2.classList.add("myWork__item__close-button");

        item.appendChild(crossStripe1)
        item.appendChild(crossStripe2)



        setTimeout(() => {
            item.scrollIntoView();
            
        }, 100);

    })
    crossStripe1.addEventListener("click", () => {
        button.classList.toggle("hidden");
        item.classList.toggle("open");
        item.querySelector("ul").classList.toggle("hidden");
        crossStripe1.classList.remove("myWork__item__close-button");
        crossStripe2.classList.remove("myWork__item__close-button");

    })
    crossStripe2.addEventListener("click", () => {
        button.classList.toggle("hidden");
        item.classList.toggle("open");
        item.querySelector("ul").classList.toggle("hidden");
        crossStripe1.classList.remove("myWork__item__close-button");
        crossStripe2.classList.remove("myWork__item__close-button");
    })
});


function inViewport(element) {

    const el = element.getBoundingClientRect();
    return !(el.top > innerHeight || el.bottom < 0);
}
function delayAddClass(itemIndex, item, newClass) {
    const delay = (itemIndex + 1) * 50
    setTimeout(() => {
         item.classList.add(newClass)
    }, delay);
}


document.addEventListener('scroll', () => {

    window.scrollY > 0 && !hamburguer.classList.value.includes("on")
    ? hamburguer.classList.add("floatMenu") : hamburguer.classList.remove("floatMenu");

    
    myWorkItems.forEach(item => {
        
        // console.log(item);
        if (inViewport(item)) {
            delayAddClass(Array.from(myWorkItems).indexOf(item), item, "onViewport")

        }
    });

})

