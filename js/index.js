let nombreUsuario

const solicitarNombre = () =>{
    do{nombreUsuario = prompt("Hola! Por favor, escribe tu nombre")
    }while(nombreUsuario == "" || nombreUsuario == " ")
}

solicitarNombre()

console.log("NOMBRE DE USUARIO: " + nombreUsuario)
alert("Gracias por responder " + nombreUsuario + ".\n" + "\nHaga click en ACEPTAR para proceder a comprar")


const operacion = (op) =>{
    if (op == "mult") {
        return (a, b) => a * b
    }
}

class golosinas{
    constructor(nombre,precio){
        this.nombre = nombre,
        this.precio = precio
    }
}

const carrito = []

const chicle = new golosinas("chicle", 10)
const chocolate = new golosinas("chocolate", 100)
const caramelo = new golosinas("caramelo", 5)
const pipas = new golosinas("pipas", 200)

let producto
let cantidad 

const comprar = () => {
    do{
        producto = parseInt(prompt("Que golosina desea comprar?" + "\n1) chicle $10" + "\n2) chocolate $100" + "\n3) caramelo $5" + "\n4) pipas $200" + "\nESCRIBA LA OPCIÓN NUMÉRICA"))
    }while(producto != 1 && producto != 2 && producto != 3 && producto != 4){
        switch(producto){
            case 1:
                do{cantidad = parseInt(prompt("¿Cuantas unidades desea? Escriba un número"))
                }while(isNaN(cantidad) || (cantidad <= 0)){
                    let total = operacion("mult")
                    alert("Ha agregado " + cantidad + " unidad/es al carrito")
                    console.log("El usuario agregó " + cantidad + " unidad/es de "+ chicle.nombre +" al carrito")
                    carrito.push(total(cantidad, chicle.precio))};
                    break;
            case 2:
                do{cantidad = parseInt(prompt("¿Cuantas unidades desea? Escriba un número"))
                }while(isNaN(cantidad) || (cantidad <= 0)){
                    let total = operacion("mult")
                    alert("Ha agregado " + cantidad + " unidad/es al carrito")
                    console.log("El usuario agregó " + cantidad + " unidad/es de "+ chocolate.nombre +" al carrito")
                    carrito.push(total(cantidad, chocolate.precio))};
                    break;
            case 3:
                do{cantidad = parseInt(prompt("¿Cuantas unidades desea? Escriba un número"))
                }while(isNaN(cantidad) || (cantidad <= 0)){
                    let total = operacion("mult")
                    alert("Ha agregado " + cantidad + " unidad/es al carrito")
                    console.log("El usuario agregó " + cantidad + " unidad/es de "+ caramelo.nombre +" al carrito")
                    carrito.push(total(cantidad, caramelo.precio))};
                    break;
            case 4:
                do{cantidad = parseInt(prompt("¿Cuantas unidades desea? Escriba un número"))
                }while(isNaN(cantidad) || (cantidad <= 0)){
                    let total = operacion("mult")
                    alert("Ha agregado " + cantidad + " unidad/es al carrito")
                    console.log("El usuario agregó " + cantidad + " unidad/es de "+ pipas.nombre +" al carrito")
                    carrito.push(total(cantidad, pipas.precio))};
                    break;   
        }
    }
}
    
comprar ()

let agregar 

const agregarProducto = () => {do{ agregar = parseInt(prompt("Desea agregar otra golosina?" + "\n1) SI" + "\n2) NO" + "\nESCRIBA LA OPCIÓN NUMÉRICA"))}while(agregar != 1 && agregar != 2){
    switch(agregar){
        case 1: comprar();
        case 2: break
        }
    }
}

agregarProducto()

while(agregar === 1){agregarProducto()
}

const total = carrito.reduce((acumulador, elemento) => acumulador + elemento, 0)

console.log("TOTAL A ABONAR: $" + total)
