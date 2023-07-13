let nombreUsuario
function solicitarNombre(){
    do{nombreUsuario = prompt("Hola! Por favor, escribe tu nombre")
}
while(nombreUsuario == "" || nombreUsuario == " ")
}

solicitarNombre()

console.log("NOMBRE DE USUARIO: " + nombreUsuario)
alert("Gracias por responder " + nombreUsuario + ".\n" + "\nHaga click en ACEPTAR para proceder a comprar")

let cantidad
let producto 

do{producto = parseInt(prompt("Por favor, seleccione el producto que desea comprar. Cada uno incluirá el valor por unidad a su derecha" + "\n1)  Bolsa de chicles x100 unidades - $500" + "\n2)  Pipas Gigantes - $250 " + "\n3)  Bon o Bon - $150" + "\n4)  Chcocolate Blanco Cofler 200g - $400" + "\nPOR FAVOR, ESCRIBA EL NÚMERO INDICADO A LA IZQUIERDA DEL PRODUCTOR QUE DESEA ADQUIRIR"))
}
while(producto < 1 || producto > 4 || isNaN(producto)){
    console.log("Ha seleccionado la opción " + producto)
    switch (producto){
        case 1:
            do{cantidad = parseInt(prompt("Bolsa de chicles x100 unidades vale $500" + "\n¿Cuantas unidades desea?"))}
            while(isNaN(cantidad) || cantidad == 0);
            console.log("El total es: $" + (cantidad * 500))
            break
        case 2:
            do{cantidad = parseInt(prompt("Pipas Gigantes vale $250" + "\n¿Cuantas unidades desea?"))}
            while(isNaN(cantidad) || cantidad == 0);
            console.log("El total es: $" + (cantidad * 250))
            break
        case 3:
            do{cantidad = parseInt(prompt("Bon o Bon vale $150" +"\n¿Cuantas unidades desea?"))}
            while(isNaN(cantidad) || cantidad == 0);
            console.log("El total es: $" + (cantidad * 150))
            break
        case 4:
            do{cantidad = parseInt(prompt("Chocolate Blanco Cofler 200g vale $400" +"\n¿Cuantas unidades desea?"))}
            while(isNaN(cantidad) || cantidad == 0);
            console.log("El total es: $" + (cantidad * 400))
            break
        default:
            console.log("Vuelva a intentarlo")
            break
    }   
}