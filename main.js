setInterval (() =>{
        var agora = new Date()
        var hora = agora.getHours()
        var minutos = agora.getMinutes()
        var segundos = agora.getSeconds()
        var dia= agora.getDate()
        var dia2 = document.getElementById("dia")
        var all= document.getElementById("all")
        var body=document.getElementById("body")
        if(hora > 12){
                hora = hora - 00;
        }
        if(hora >= 18){
                body.style.background="black"
                
        }
        if(segundos < 10){
                segundos = "0" + segundos;
                
        }
        if(minutos < 10 ){
                minutos = "0" + minutos;
        }
        if(hora < 10){
                hora = "0" + hora;
        }
all.textContent=hora+":"+minutos+":"+segundos
dia2.textContent="Hoje é dia "+dia
dia2.style.color="white"

});