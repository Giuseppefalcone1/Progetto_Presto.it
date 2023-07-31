

let categoriesWrapper = document.querySelector("#categoriesWrapper")


fetch(`./annunci.json`).then((response)=>response.json()).then((data)=>{
    
    
    
    function setCategory(){



        let categories = data.map((annuncio)=> annuncio.category);
        // entra all'interno di annuncio e va a prendere la proprietà con chiave "category"
        
        let definitiveCtgs = [];

        categories.forEach((element)=>{

            if (    !definitiveCtgs.includes(element)   ) {

                definitiveCtgs.push(element);

            };
            
            
        });
        
        // console.log(definitiveCtgs);
        // riassumendo i passaggi: 
        // 1.estrapolare tutte le categorie
        // 2.creare array dove inserire tutti i nomi di categorie
        // 3.ovviamente saranno presenti doppioni, creare un secondo array dove verrano scartati i doppioni
        // 4.per farlo usare condizione con il metodo-verifica .include  


        definitiveCtgs.forEach((element)=>{

            let categoryDiv = document.createElement("div");

            categoryDiv.classList.add("form-check");
            
            categoryDiv.innerHTML = `

            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label txt-black" for="flexRadioDefault1">
              ${element}
            </label>
            
            `

            categoriesWrapper.appendChild(categoryDiv);
        });

        


    };


    setCategory();

    
    
    })
