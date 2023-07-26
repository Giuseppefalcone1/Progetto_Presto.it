let navbarMain = document.querySelector("#navbarMain");

let links = document.querySelectorAll(".links");

let divimg1 = document.querySelector("#divImmagine1");

// console.dir(window);

window.addEventListener(`scroll` , ()=>{

    // function changeNav(){}

    let scrolled = window.scrollY;

    if(scrolled > 0){

        navbarMain.classList.add("navbar-scroll");
        // links.forEach((link)=>{
        //     link.style.color = var(--yellowCustom);
        
        // })

    }else{

        navbarMain.classList.remove("navbar-scroll");

        // links.forEach((link)=>{
        //     link.style.color = var(--yellowCustom);
        // })
    };


    // if (scroll > 1){

    //     divimg1.classList.add("animate__animated, animate__fadeInRightBig")

    // }

});



