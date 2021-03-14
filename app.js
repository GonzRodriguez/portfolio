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
const myWorkGroup = document.querySelector(".myWork__group");
const openDescriptionButtons = document.querySelectorAll(".more");
const closeDescriptionButtons = document.querySelectorAll(".myWork__item__description__close-button");
const copyright = document.querySelector(".copyright");


function closeButton(){

    const cross = document.createElement("div");
    const crossStripe1 = document.createElement("div");
    const crossStripe2 = document.createElement("div");

    crossStripe1.style = " transform: rotate( 45deg )";
    crossStripe2.style = " transform: rotate( 135deg )";

    cross.classList.add("close__button__Element");
    crossStripe1.classList.add("close__button__stripe");
    crossStripe2.classList.add("close__button__stripe");

    cross.appendChild(crossStripe1)
    cross.appendChild(crossStripe2)
    return cross
}


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
    
}
hamburguer.addEventListener("click", () => {
    hamburguerToggle()
})
// handle each "show more" button in my work section 
openDescriptionButtons.forEach(button => {
    const item = button.parentElement.parentElement.parentElement
    const workItem__cover = item.querySelector(".myWork__item__cover")
    const cross = closeButton()
    
    button.addEventListener("click", async () => {
        if (item.id === "right-column"){
            item.classList.add("right-column");
        }
        button.classList.toggle("hidden");
        cross.classList.remove("hidden");
        item.classList.toggle("open");
        workItem__cover.classList.toggle("open");
        item.querySelector(".myWork__item__more-info__group").classList.toggle("hidden");
        item.appendChild(cross)
    })

    cross.addEventListener("click", () => {
        button.classList.toggle("hidden");
        item.classList.toggle("open");
        item.classList.remove("right-column");
        workItem__cover.classList.toggle("open");
        item.querySelector(".myWork__item__more-info__group").classList.toggle("hidden");
        cross.classList.add("hidden");
        cross.classList.remove(".close__button__Element");

    })


});

// handles the navbar hamburger on scroll
document.addEventListener('scroll', () => {
    window.scrollY > 0 && !hamburguer.classList.value.includes("on")
    ? hamburguer.classList.add("floatMenu") : hamburguer.classList.remove("floatMenu");
})


// handling zooming images on "myWork" section 
myWorkItems.forEach(item => {

    const zoomedImg = document.createElement("div");
    const cross = closeButton()
    let clnImg = ""
    // get all the pictures and add "onclick" functionality
    const myWorkListImg = item.querySelectorAll(".myWork__item__more-info__item")

    myWorkListImg.forEach(image => {
        image.onclick = e => {
            clnImg = e.target.cloneNode(true);
            if(clnImg.tagName === "IMG"){
                zoomedImg.appendChild(clnImg)
                zoomedImg.appendChild(cross)
                zoomedImg.classList.add("zoomedImg")
                // add the div before the body
                document.body.prepend(zoomedImg)
                console.log(zoomedImg);
            }
        }

        cross.addEventListener("click", () => {
            zoomedImg.removeChild(zoomedImg.firstChild)
            zoomedImg.classList.remove("zoomedImg")
            })
    })

})

function addYearToCopy() {
    const year = new Date().getFullYear();
    const span = document.createElement("span")
    span.innerText = year
    copyright.appendChild(span)
}

addYearToCopy()
