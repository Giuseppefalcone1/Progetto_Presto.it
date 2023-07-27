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

let number1 = querySelector("#number1")

let number2 = querySelector("#number2")

let number3 = querySelector("#number3")

let counter = 0

let interval = setInterval(()=>{
    
    if(counter < 100){

        counter++

        number1.innerHTML = counter ;

    }

}100);


















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




