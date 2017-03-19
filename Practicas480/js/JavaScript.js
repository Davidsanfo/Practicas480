//PRACTICAS JAVASCRIPT
//1EventosYAccesoAControles
function sumarNumeros() {
    var caja1 = document.getElementById("num1");
    var caja2 = document.getElementById("num2");
    var num1 = parseInt(caja1.value);
    var num2 = parseInt(caja2.value);
    var resultado = document.getElementById("resultado");
    var suma = num1 + num2;
    resultado.innerText = suma;    
    alert("Numeros sumados");
}
//2Sentencias
function mostrarEstacion() {
    var caja = document.getElementById("caja");
    var resultado = document.getElementById("resultado");
    var num = parseInt(caja.value);
    switch (num) {
        case 1:
            resultado.innerText = "INVIERNO";
            break;
        case 2:
            resultado.innerText = "VERANO";
            break;
        case 3:
            resultado.innerText = "PRIMAVERA";
            break;
        case 4:
            resultado.innerText = "OTOÑO";
            break;
        default:
            resultado.innerText = "Resultado incorrecto";
    }
}
//3CalcularLetraDNi
function calcularLetra()
{
    var resultado = document.getElementById("resultado");
    var caja = document.getElementById("caja");
    var dni = parseInt(caja.value);
    var oper = (dni - (parseInt(dni / 23) * 23));
    var letra;
    7
    switch (oper) {
        case 0:
            letra = "T";
            break;
        case 1:
            letra = "R";
            break;
        case 2:
            letra = "W";
            break;
        case 3:
            letra = "A";
            break;
        case 4:
            letra = "G";
            break;
        case 5:
            letra = "M";
            break;
        case 6:
            letra = "Y";
            break;
        case 7:
            letra = "F";
            break;
        case 8:
            letra = "P";
            break;
        case 9:
            letra = "D";
            break;
        case 10:
            letra = "X";
            break;
        case 11:
            letra = "B";
            break;
        case 12:
            letra = "N";
            break;
        case 13:
            letra = "J";
            break;
        case 14:
            letra = "Z";
            break;
        case 15:
            letra = "S";
            break;
        case 16:
            letra = "Q";
            break;
        case 17:
            letra = "V";
            break;
        case 18:
            letra = "H";
            break;
        case 19:
            letra = "L";
            break;
        case 20:
            letra = "C";
            break;
        case 21:
            letra = "K";
            break;
        case 22:
            letra = "E";
            break;
        case 23:
            letra = "T";
            break;
        default:
            letra = "ERROR";
    }
    resultado.innerText = letra;
}
//4DiaNacimientoSemana
function calcularDia() {
    var cajadia = document.getElementById("cajadia");
    var cajames = document.getElementById("cajames");
    var cajaano = document.getElementById("cajaano");
    var dia = parseInt(cajadia.value);
    var mes = parseInt(cajames.value);
    var ano = parseInt(cajaano.value);
    if (mes == 1) {
        mes = 13;
        ano = ano - 1;
    }
    if (mes == 2) {
        mes = 14;
        ano = ano - 1;
    }    
    var oper = parseInt(((mes + 1) * 3) / 5);
    var oper2 = parseInt(ano / 4);
    console.log("operacion = " + oper2);
    var oper3 = parseInt(ano / 100);
    var oper4 = parseInt(ano / 400);
    var oper5 = parseInt(dia + (mes * 2) + ano + oper + oper2 - oper3 + oper4 + 2);
    var oper6 = parseInt(oper5 / 7);
    var oper7 = parseInt(oper5 - (oper6 * 7));
    var resultado = document.getElementById("resultado");
    var dia = "";
    switch (oper7) {
        case 0:
            dia = "Sabado";
            break;
        case 1:
            dia = "Domingo";
            break;
        case 2:
            dia = "Lunes";
            break;
        case 3:
            dia = "Martes";
            break;
        case 4:
            dia = "Miercoles";
            break;
        case 5:
            dia = "Jueves";
            break;
        case 6:
            dia = "Viernes";
            break;
        
    }
    resultado.innerText = "El dia de la semana es: " + dia;
}
//ConjeturaCollatz
function calcularCollatz() {
    var caja = document.getElementById("caja");
    var num = parseInt(caja.value);
    var secuencia = "<ul>";
    while (num != 1) {
        secuencia += "<li>";
        if (num % 2 == 0) {
            num = num / 2;
            
        } else {
            num = (num * 3) + 1;
        }
        secuencia += num  + "</li>";        
    }
    secuencia += "</ul>";
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = secuencia;
}
//TablaMultiplicar
function tablaMultiplicar() {
    var caja = document.getElementById("caja");
    var num = parseInt(caja.value);
    var secuencia = "</ul>";
    for (var i = 0; i <= 10; i++){
        var oper = num * i;
        secuencia += "<li>" + num + " x " + i + " = " + oper;
    }
    secuencia += "</ul>"
    var resultadao = document.getElementById("resultado");
    resultado.innerHTML = secuencia
}
//ValidacionISBN
function validarISBN() {
    var caja = document.getElementById("caja");
    var num = caja.value;
    var suma = 0;
    alert("entra")
    for (var i = 0; i < num.length; i++) {
        var char = num.charAt(i);
        var oper = char * (i + 1);
        suma += oper;
    }
    var resultado = document.getElementById("resultado");
    if (suma % 11 == 0) {
        resultado.innerText = "correcto";

    } else {
        resultado.innerText = "incorrecto";
    }
}
//ValidarCodigoEAN
function validarEAN()
{
    var caja = document.getElementById("caja");
    var num = caja.value;
    if (num.length == 8 || num.length == 13) {
        alert("numero correcto");
        var par = 0;
        var impar = 0;
        for (var i = 0; i < num.length - 1; i++) {
            impar += parseInt(num.charAt(i));
            i++;
        }
        for (var i = 1; i < num.length - 1; i++) {            
            par += parseInt(num.charAt(i));
            i++;
        }        
        if (num.length == 8) {
            impar = impar * 3;
        } else {
            par = par * 3;
        }
        var suma = impar + par;
        suma = suma % 10;
        var digito = 10 - suma;
        if (digito == num.charAt(num.length - 1)) {
            alert("el isbn es correcto");
        } else {
            alert("El ISBN no es correcto");
        }
    } else {
        alert("numero incorrecto");
    }
}
//validarEmail()
function validarEmail() {
    var caja = document.getElementById("txtemail");
    var email = caja.value;    
    var resultado = document.getElementById("resultado");
    if (email.indexOf("@") == -1) {
        resultado.innerText = "No existe @";
    } else if (email.indexOf("@") == 0 || email.indexOf("@") == email.length - 1) {
        resultado.innerText = "@ al principio o al final";
    } else if (email.indexOf("@") != email.lastIndexOf("@")) {
        resultado.innerText = "Solo puede haber una @";
    } else if (email.indexOf("@") > email.indexOf(".")) {
        resultado.innerText = "No se encuentra un punto despues de @"
    } else {
        var punto = email.indexOf(".");
        var dominio = email.substr(punto + 1)
        if (dominio.length >= 2 && dominio.length >= 4) {
            resultado.innerText = "CORRECTO"
        } else {
            resultado.innerText = "Dominio incorrecto";
        }
    }
}
//AnalizarCadenaNumeros
function analizarNumeros() {
    //RECUPERAMOS LA CAJA   
    var caja = document.getElementById("txtnumeros");
    var numeros = caja.value;
    var suma = 0;
    //RECORREMOS TODAS LAS LETRAS DEL TEXTO   
    for (var i = 0; i < numeros.length; i++) {
        //CAPTURAR CADA LETRA   
        //Y CONVERTIR A INT   
        var letra = numeros.charAt(i);
        var num = parseInt(letra);
        //SUMAMOS CADA NUMERO    
        suma = suma + num;
    }
    //OBJETO MATH  
    //REALIZAR LA MEDIA DE LA SUMA   
    //ENTRE TODAS LAS LETRAS   
    var media = suma / numeros.length;
    //media = Math.floor(media);    
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Suma: " + suma + "<br/>";
    resultado.innerHTML += "Media: " + media;
}
//Enlazar eventos dinamicamente
var contador = 1;
function enlazarEvento()   
{   
    var boton2 =  document.getElementById("boton2");   
    //ENLAZAR LA ACCION CLICK DEL BOTON2 PARA QUE LEA LA FUNCION MOSTRAR MENSAJE   
    //boton2.onclick = mostrarMensaje;   
    //boton2.onclick = mostrarMensaje2;   
   
    //ENLAZAR EVENTO ONCLICK CON FUNCION ANONIMA   
    //boton2.onclick = function() {   
    //    //CODIGO PARA LA ACCION DEL ONCLICK l  
    //    alert("Mensaje desde función anonima ONCLICK");   
    //} 

    //REALIZAR LA LLAMADA CON ADDEVENTLISTENER QUE TIENE PILA DE EVENTOS  
    //REALIZA LAS ACCIONES CONSECUTIVAS EN EL ORDEN EN EL QUE HEMOS ENLAZADO DINAMICAMENTE   
    //boton2.addEventListener("click", mostrarMensaje);   
    //boton2.addEventListener("click", mostrarMensaje2); 

    //ENLAZAR CON FUNCION ANONIMA MEDIANTE ADDEVENTLISTENER   
    //UNA FUNCION ANONIMA EN EVENTLISTENER PERMITE PONER EL CODIGO DE LA MISMA FUNCION EN LA PILA DE LLAMADAS      
    ////THIS SIEMPRE SERA BOTON2   
    boton2.addEventListener("click", function() {  
        alert("Enlace función desde Pila eventos");   
        alert("Objeto llamada: " + this);   
    });    
    //THIS SIEMPRE SERA TITULO   
    var titulo = document.getElementById("titulo");   
    titulo.addEventListener("click", function() {   
        alert("Objeto THIS: " + this);   
    });    
    var datos = document.getElementById("datos");   
    datos.innerText = "Evento Click enlazado: " + contador;   
    contador++;   
}    
function mostrarMensaje()   
{   
    alert("He sido llamado!!!");   
}     
function mostrarMensaje2() {   
    alert("He sido llamado 222!!!");   
}   
















        
//PRACTICAS JQUERY
//Checkbox
    $(document).ready(function () {
        $("#botonsumar").click(function () {
            var suma = 0;
            $("input[name = 'numeros']:checked").each(function () {
                var chk = $(this);
                chk = parseInt(chk.val());
                suma += chk;            
            });
            $("#suma").text("La suma es: " + suma);
        });
    });