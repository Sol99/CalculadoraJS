const display = document.querySelector("#display");
const buttons= document.querySelectorAll("button");


buttons.forEach((item)=>{
    item.onclick = () => {
        if(item.id=="clear"){
            display.innerText="";
        }else if(item.id=="backspace"){
            let string=display.innerText.toString();
            display.innerText=string.substr(0,string.length-1)

        }else if(display.innerText != "" && item.id=="equal"){
            display.innerText=eval(display.innerText);
        }else if(display.innerText == "" && item.id=="equal"){
            display.innerHTML = "Null";
            setTimeout(() => ( display.innerText= ""), 20000);
        }else{
            display.innerText+=item.id;
            //12312+241-342%324
        }
    };
});


//Document.querySelectorAll() 
//representa una lista de elementos del documento que coinciden con el grupo de selectores indicados.

//al evento de onclick no le estoy pasando ningun tipo de parametro
//los dos () se hacen porque no quiero que ocurra ningun evento interno
//le hago la funcion flecha para reconocer a quien le di click

//toString() convierte todo a una cadena de caracteres

//substr(0,string.length-1) 
//sirve para extraer caracteres de una cadena
// si tengo 45 4->0 5->1 1-1=0 entonces queda 4 solo 