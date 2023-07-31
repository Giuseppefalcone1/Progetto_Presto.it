let navbarMain = document.querySelector("#navbarMain");

let links = document.querySelectorAll(".links");

let divimg1 = document.querySelector("#divImmagine1");

window.addEventListener(`scroll` , ()=>{

    let scrolled = window.scrollY;

    if(scrolled > 0){

        navbarMain.classList.add("navbarRed");
        links.forEach((link)=>{
            link.style.color = "var(--yellowCustom)";

        })

    }else{

        navbarMain.classList.remove("navbarRed");
        links.forEach((link)=>{
            link.style.color = "white";

        })

    };

});



let firstNumber = document.querySelector("#number1");

let secondNumber = document.querySelector("#number2");

let thirdNumber = document.querySelector("#number3");



function createloop (number, limit, timing){
    let counter = 0

    let interval = setInterval(()=>{

        if(counter < limit){

            counter++;

            number.innerHTML = counter ;

        }else{
            // per fermare realmente il loop
            clearInterval(interval);
        }

    },timing);

}

createloop (firstNumber, 200, 100);
createloop (secondNumber, 190, 200);
createloop (thirdNumber, 30, 600);


let confirm = false;

let IntersecObserver = new IntersectionObserver((internalArray)=>{ // qui esegue intrinsecamente uno spread operator, apre l'array che si trova dentro oggetto observer
    
    internalArray.forEach((arrayEl)=>{

        if (arrayEl.isIntersecting && confirm == false){

            createloop(firstNumber, 200, 100);
            createloop(secondNumber, 190, 200);
            createloop(thirdNumber,30,600);

            confirm = true
        }

    });

});

IntersecObserver.observe(firstNumber);



// SWIPER JS
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});








// function changeNav(nameNavbarClass, linkColorDefault, linkColorScroll){

//     let navbarMain = document.querySelector("#navbarMain");

//     let links = document.querySelectorAll(".links");

//     let scrolled = window.scrollY;
//     if(scrolled > 0){

//         navbarMain.classList.add("nameNavbarClass");
//         links.forEach((link)=>{
//             link.style.color = "linkColorScroll";

//         })

//     }else{

//         navbarMain.classList.remove("nameNavbarClass");
//         links.forEach((link)=>{
//             link.style.color = "linkColorDefault";

//         })

//     };

// }

// changeNav(navbarRed, var(--yellowCustom), white);




