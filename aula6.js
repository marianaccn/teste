function nome(numero1, numero2, numero3){
    if(numero1>numero2){
        if(numero1>numero3){
            return numero1
        } else{
            return numero3
        }
    } else{
        if(numero2>numero3){
            return numero2
        } else{
            return numero3
        }
    } 
}


var numero1= prompt();
var numero2= prompt();
var numero3= prompt();
var resposta= nome(numero1, numero2, numero3);

alert(resposta);
