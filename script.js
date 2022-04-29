const navTwo = document.getElementsByClassName('nav_two')[0]

const slider = document.getElementsByClassName('hero__wrapper')[0]
let slides = [...document.getElementsByClassName('hero__slider')]
const left = document.getElementsByClassName('hero__left')[0]
const right = document.getElementsByClassName('hero__right')[0]
const services = document.getElementsByClassName('services')[0]
const heroCopy = [...document.getElementsByClassName('hero__copy')]
const heroContact = [...document.getElementsByClassName('hero__contact')]
slider.style.transition='0s'
const hamburger = document.getElementsByClassName('hamburger')[0]
const menu = document.getElementsByClassName('nav_two__menu')[0]
// console.log(menu);

hamburger.addEventListener('click',()=>{
   menu.classList.toggle('show_menu')
   document.body.classList.toggle('show_menu')
   hamburger.classList.toggle('cross')
})
// All animations -------------------------------------------------------------------------------

const heading = [...document.getElementsByClassName('hero__heading')]
const allHeadings = [...document.getElementsByClassName('underline')]
const allServices = [...document.getElementsByClassName('services__service')]
const allSpecial = [...document.getElementsByClassName('specials__image')]

const specials = []
const headings = []

headings.push(allHeadings[1])
headings.push(allHeadings[2])

specials.push(allSpecial[1])
specials.push(allSpecial[2])

const animation = [headings , allServices, specials]

animation.forEach((ele)=>{
    ele.forEach((e)=>{
        e.style.transform = 'translateX(300px)'
        e.style.opacity = '0'
        e.style.transition = '.3s linear'
    })
})

document.addEventListener('scroll',()=>{

    if(window.scrollY >= 100){
        navTwo.classList.add('fixed')
    }
    else{
        navTwo.classList.remove('fixed')

    }
    const window20 = (window.innerHeight*80) / 100 
    animation.forEach((ele)=>{
        ele.forEach((e)=>{

            const top = e.getBoundingClientRect().top
            
            if (top < window20) {
                e.style.transform = 'translateX(0)'
                e.style.transform = 'translateY(0)'
                e.style.opacity = '1'
                console.log('done');
            }else{
                e.style.transform = 'translateX(300px)'
                e.style.opacity = '0'
                
            }
        })

    })

})




// Showing loader ---------------------------------------------------------

// document.onreadystatechange = function() {
//     if (document.readyState !== "complete") {
//         document.querySelector("body").style.visibility = "hidden";
//         document.querySelector("#loader").style.visibility = "visible";
//         document.querySelector(".loader").style.visibility = "visible";
//     } else {
//         document.querySelector(".loader").style.display = "none";
//         document.querySelector("#loader").style.display = "none";
//         document.querySelector("body").style.visibility = "visible";
//     }
// };

// For slider ----------------------------------------------------------

left.addEventListener('click',leftSlide)
right.addEventListener('click',rightSlide)

const slideWidth = slides[0].clientWidth 
let id = 1

 const slideFirst = slides[0].cloneNode(true)
 const slideLast = slides[slides.length-1].cloneNode(true)

 slideFirst.id = 'first'
 slideLast.id = 'last'

 slider.append(slideFirst)
 slider.prepend(slideLast)


function leftSlide(){
    left.disabled = true
    slider.style.transition='.4s'
    id--
    transform()

    // For animation
    hide(heading)
    hide(heroCopy)
    setTimeout(() => {
        show(heading)
        show(heroCopy)
    }, 400);
}

function rightSlide() {
    console.log('right');
    right.disabled = true
    slider.style.transition='.4s'
    id++
    transform()

    // For animation
    hide(heading)
    hide(heroCopy)
    hide(heroContact)
    setTimeout(() => {
        show(heading)
        show(heroCopy)
        show(heroContact)
    }, 400);
}

slider.addEventListener('transitionend',(e)=>{
    left.disabled = false
    right.disabled = false

    slides = [...document.getElementsByClassName('hero__slider')]
    console.log(slides[id].id , id);
    if(slides[id].id === slideFirst.id){
        console.log('entered');
        slider.style.transition='none'
        id = 1
        transform()
    }

    if(slides[id].id === slideLast.id){
        console.log('entered');
        slider.style.transition='none'
        id = slides.length-2
        transform()
    }
})


  // To transform images
function transform() {
    slider.style.transform = `translateX(-${slideWidth*id}px)`
}
transform()

function hide(element) {
    element.forEach(e => {
        e.style.transition = 'none'
        element==heading?e.style.transform = 'translateY(70px)':e.style.transform = 'translateX(200px)'
        e.style.opacity = '0'
        if(element==heroContact){
            e.style.transform = 'translateX(-80px)'
        }
    });
}

function show(element) {
    element.forEach(e => {
        e.style.transition = '.7s'
        element==heading?e.style.transform = 'translateY(0)':e.style.transform = 'translateX(0)'
        opacity(e)
        if(element==heroContact){
            e.style.transform = 'translateX(0)'
        }
        
    });
}
show(heading)
show(heroCopy)
show(heroContact)

function opacity(element) {
    element.style.opacity = 1
}