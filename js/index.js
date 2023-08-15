// HEADER

let header = document.createElement("header")
header.style.backgroundColor = "#ef6c9a"
document.body.appendChild(header)


let logo = document.createElement("div")
logo.className = "logoynombre"
logo.innerHTML = `<img src="../assets/logo.PNG"></img>`
header.appendChild(logo)
let logoNombre = document.createElement("a")
logoNombre.className = "nombrepagina"
logoNombre.innerHTML = `<a>BABAU</a>`
logo.appendChild(logoNombre)

let navbar = document.createElement("navbar")
header.appendChild(navbar)
navbar.className = "navbar"
let ulnavbar = document.createElement("ul")
ulnavbar.className = "ulnavbar"
navbar.appendChild(ulnavbar)

let itemsNavbar = [{nombre:"INICIO"},
                    {nombre:"CONTACTO"},
                    {nombre:"ABOUT"}]


for(const item of itemsNavbar){
    let navbarItem = document.createElement("li")
    navbarItem.innerHTML = `<a href="../index.html">${item.nombre}</a>`
    ulnavbar.appendChild(navbarItem)
}

// MAIN

let main = document.createElement("main")
document.body.appendChild(main)
let cards = document.createElement("section")
cards.className = "cards"
main.appendChild(cards)

const productos = [{id: 1, nombre:"Chicle", precio: 10, img:"../assets/chicle.webp"},
                    {id: 2, nombre:"Chocolate", precio: 100, img:"../assets/chocolate.jpg"},
                    {id: 3, nombre:"Caramelo", precio: 15, img:"../assets/caramelo.jpg"},
                    {id: 4, nombre:"Pipas", precio: 200, img:"../assets/pipas.webp"}
]

productos.forEach((producto) => {
    let card = document.createElement("article")
    card.className = "card"
    card.innerHTML = `<img src="${producto.img}" class="card-img"></img>
                        <div class="card-body">
                            <h3 class="nombre-producto">${producto.nombre}</h3>
                            <h4 class="valor-card">VALOR: $${producto.precio}</h4>
                        </div>`;
                        // <button class="btn-agregar">AGREGAR</button>  
                        // <input type="text" class="input-cantidad" value=""></input>
    cards.appendChild(card)

    let agregar = document.createElement("button")
    agregar.classList = "btn-agregar"
    agregar.innerText = "AGREGAR"      
    card.appendChild(agregar)

    agregar.addEventListener("click", () =>{
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio
        })
        localStorage.setItem("carritoStorage", JSON.stringify(carrito))
    })   
})

const carrito = []

let totalsection = document.createElement("section")
totalsection.className = "total-section"
main.appendChild(totalsection)
let confirmarCompra = document.createElement("button")
confirmarCompra.className = "btn-confirmar"
confirmarCompra.innerText = "CONFIRMAR CARRITO"
totalsection.appendChild(confirmarCompra)
let totalproductos = document.createElement("div")
totalproductos.className = "total-productos"
totalsection.appendChild(totalproductos)

const carroconfirmado = 

confirmarCompra.addEventListener("click", confirmacion = () => {const carroconfirmado = JSON.parse(localStorage.getItem("carritoStorage"));
console.log(carroconfirmado)
const total = carroconfirmado.reduce((acc,el)=>acc + el.precio, 0)
console.log(total)
totalproductos.innerHTML = `TOTAL A PAGAR: $${total}`
})

// FOOTER

let iconsFooter = [{red: "wsp"},
                    {red: "inst"},
                    {red: "facebook"}
]

let footer = document.createElement("footer")
document.body.appendChild(footer)
let logosFooter = document.createElement("div")
logosFooter.className = "logos-footer"
footer.appendChild(logosFooter)

for(const icon of iconsFooter){
    let iconos = document.createElement("i")
    iconos.innerHTML = `${icon.red}`
    logosFooter.appendChild(iconos)
}
