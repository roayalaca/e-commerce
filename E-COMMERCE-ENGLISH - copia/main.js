//PRODUCTOS DE LA TIENDA

const productos = [
    {
        id: "poder-ahora",
        titulo: "EL PODER DEL AHORA",
        imagen: "./assets/image/el-poder.png",
        categoria: {
            nombre: "Librería",
            id: "libreria"
        },
        precio: 229.50
    },
    {
        id: "silencio",
        titulo: "EL SILENCIO HABLA",
        imagen: "./assets/image/silencio.png",
        categoria: {
            nombre: "Librería",
            id: "libreria"
        },
        precio: 229.50
    },
    {
        id: "deja",
        titulo: "DEJA DE SER TÚ",
        imagen: "./assets/image/deja.png",
        categoria: {
            nombre: "Librería",
            id: "libreria"
        },
        precio: 229.50
    },
    {
        id: "kybalion",
        titulo: "EL KYBALION",
        imagen: "./assets/image/kybalion.png",
        categoria: {
            nombre: "Librería",
            id: "libreria"
        },
        precio: 229.50
    },
    {
        id: "cuatro-acuerdos",
        titulo: "LOS CUATRO ACUERDOS",
        imagen: "./assets/image/cuatro-acuerdos.png",
        categoria: {
            nombre: "Librería",
            id: "libreria"
        },
        precio: 229.50
    },
    {
        id: "muchas-vidas",
        titulo: "MUCHAS VIDAS, MUCHOS MAESTROS",
        imagen: "./assets/image/muchas-vidad.png",
        categoria: {
            nombre: "Librería",
            id: "libreria"
        },
        precio: 229.50
    },
    {
        id: "bosque-interior",
        titulo: "EN MI BOSQUE INTERIOR",
        imagen: "./assets/image/bosque.png",
        categoria: {
            nombre: "Librería",
            id: "libreria"
        },
        precio: 229.50
    },
    {
        id: "lenguaje-alma",
        titulo: "EL LENGUAJE DEL ALMA",
        imagen: "./assets/image/lenguaje-alma.png",
        categoria: {
            nombre: "Librería",
            id: "libreria"
        },
        precio: 229.50
    },
    {
        id: "siete-leyes",
        titulo: "LAS SIETE LEYES ESPIRITUALES",
        imagen: "./assets/image/siete-leyes.png",
        categoria: {
            nombre: "Librería",
            id: "libreria"
        },
        precio: 229.50
    },
    {
        id: "chakras",
        titulo: "CHAKRAS, LAS RUEDAS DE LA VIDA",
        imagen: "./assets/image/chakras.png",
        categoria: {
            nombre: "Librería",
            id: "libreria"
        },
        precio: 229.50
    },
    {
        id: "hoponopono",
        titulo: "HO'OPONOPONO",
        imagen: "./assets/image/hoponopono.png",
        categoria: {
            nombre: "Librería",
            id: "libreria"
        },
        precio: 229.50
    },
    {
        id: "dolor",
        titulo: "ESTE DOLOR NO ES MÍO",
        imagen: "./assets/image/dolor.png",
        categoria: {
            nombre: "Librería",
            id: "libreria"
        },
        precio: 229.50
    },
    {
        id: "cianita",
        titulo: "CIANITA",
        imagen: "./assets/image/CIANITA.jpg",
        categoria: {
            nombre: "Cuarzos",
            id: "cuarzos"
        },
        precio: 229.50
    },
    {
        id: "ambar",
        titulo: "AMBAR",
        imagen: "./assets/image/ambar.jpg",
        categoria: {
            nombre: "Cuarzos",
            id: "cuarzos"
        },
        precio: 229.50
    },
    {
        id: "amatista",
        titulo: "AMATISTA",
        imagen: "./assets/image/amatista.jpg",
        categoria: {
            nombre: "Cuarzos",
            id: "cuarzos"
        },
        precio: 229.50
    },
    {
        id: "aquamarina",
        titulo: "AQUAMARINA",
        imagen: "./assets/image/aquamarina.jpg",
        categoria: {
            nombre: "Cuarzos",
            id: "cuarzos"
        },
        precio: 229.50
    },
    {
        id: "lapislazuli",
        titulo: "LAPISLÁZULI",
        imagen: "./assets/image/lapislazuli.jpg",
        categoria: {
            nombre: "Cuarzos",
            id: "cuarzos"
        },
        precio: 229.50
    },
    {
        id: "rosa",
        titulo: "CUARZO-ROSA",
        imagen: "./assets/image/rosa.jpg",
        categoria: {
            nombre: "Cuarzos",
            id: "cuarzos"
        },
        precio: 229.50
    },
    {
        id: "jade",
        titulo: "JADE",
        imagen: "./assets/image/jade.jpg",
        categoria: {
            nombre: "Cuarzos",
            id: "cuarzos"
        },
        precio: 229.50
    },
    {
        id: "obsidiana",
        titulo: "OBSIDIANA",
        imagen: "./assets/image/obsidiana.jpg",
        categoria: {
            nombre: "Cuarzos",
            id: "cuarzos"
        },
        precio: 229.50
    },
    {
        id: "ojo",
        titulo: "OJO DE TIGRE",
        imagen: "./assets/image/ojo.jpg",
        categoria: {
            nombre: "Cuarzos",
            id: "cuarzos"
        },
        precio: 229.50
    },
    {
        id: "agata",
        titulo: "ÁGATA",
        imagen: "./assets/image/agata.jpg",
        categoria: {
            nombre: "Cuarzos",
            id: "cuarzos"
        },
        precio: 229.50
    },
    {
        id: "aragonito",
        titulo: "ARAGONITO",
        imagen: "./assets/image/aragonito.jpg",
        categoria: {
            nombre: "Cuarzos",
            id: "cuarzos"
        },
        precio: 229.50
    },
    {
        id: "azul",
        titulo: "CUARZO AZUL",
        imagen: "./assets/image/azul.jpg",
        categoria: {
            nombre: "Cuarzos",
            id: "cuarzos"
        },
        precio: 229.50
    },
    {
        id: "pintura-chakra",
        titulo: "Sanación Chakral",
        imagen: "./assets/image/chakra.jpg",
        categoria: {
            nombre: "Pinturas",
            id: "pinturas"
        },
        precio: 27.50
    },
    {
        id: "pintura-intuition",
        titulo: "Intuition",
        imagen: "./assets/image/conciencia.jpg",
        categoria: {
            nombre: "Pinturas",
            id: "pinturas"
        },
        precio: 27.50
    },
    {
        id: "pintura-trascendencia",
        titulo: "Trascendencia",
        imagen: "./assets/image/disolucion.jpg",
        categoria: {
            nombre: "Pinturas",
            id: "pinturas"
        },
        precio: 27.50
    },
    {
        id: "pintura-sabina",
        titulo: "María Sabina",
        imagen: "./assets/image/maria-sabina.jpg",
        categoria: {
            nombre: "Pinturas",
            id: "pinturas"
        },
        precio: 27.50
    },
    {
        id: "pintura-ojo",
        titulo: "Ojo",
        imagen: "./assets/image/ojo-turco.jpg",
        categoria: {
            nombre: "Pinturas",
            id: "pinturas"
        },
        precio: 27.50
    },
    {
        id: "pintura-buda",
        titulo: "Buda Gautama",
        imagen: "./assets/image/buda.jpg",
        categoria: {
            nombre: "Pinturas",
            id: "pinturas"
        },
        precio: 27.50
    },
    {
        id: "pintura-luna",
        titulo: "Madre Luna",
        imagen: "./assets/image/luna.jpg",
        categoria: {
            nombre: "Pinturas",
            id: "pinturas"
        },
        precio: 27.50
    },
    {
        id: "pintura-hongo",
        titulo: "Psilocibina",
        imagen: "./assets/image/psilocibina.jpg",
        categoria: {
            nombre: "Pinturas",
            id: "pinturas"
        },
        precio: 27.50
    },
    {
        id: "pintura-expansion",
        titulo: "Expansión",
        imagen: "./assets/image/expansion.jpg",
        categoria: {
            nombre: "Pinturas",
            id: "pinturas"
        },
        precio: 27.50
    },
    {
        id: "pintura-gatos",
        titulo: "Dioses",
        imagen: "./assets/image/gatos.jpg",
        categoria: {
            nombre: "Pinturas",
            id: "pinturas"
        },
        precio: 27.50
    },
    {
        id: "pintura-flor",
        titulo: "Florece",
        imagen: "./assets/image/florecer.jpg",
        categoria: {
            nombre: "Pinturas",
            id: "pinturas"
        },
        precio: 27.50
    },
    {
        id: "pintura-omni",
        titulo: "Omnipresencia",
        imagen: "./assets/image/omni.jpg",
        categoria: {
            nombre: "Pinturas",
            id: "pinturas"
        },
        precio: 27.50
    },
    {
        id: "sudadera-01",
        titulo: "Sudadera reflectante",
        imagen: "./assets/image/suadera01.jpg",
        categoria: {
            nombre: "Sudaderas",
            id: "sudaderas"
        },
        precio: 27.50
    },

    {
        id: "sudadera-02",
        titulo: "Sudadera - Universo",
        imagen: "./assets/image/suadera02.jpg",
        categoria: {
            nombre: "Sudaderas",
            id: "sudaderas"
        },
        precio: 27.50
    },

    {
        id: "sudadera-03",
        titulo: "Sudadera -  03",
        imagen: "./assets/image/sudadera03.jpg",
        categoria: {
            nombre: "Sudaderas",
            id: "sudaderas"
        },
        precio: 27.50
    },

    {
        id: "sudadera-04",
        titulo: "Sudadera - Universo",
        imagen: "./assets/image/sudadera04.jpg",
        categoria: {
            nombre: "Sudaderas",
            id: "sudaderas"
        },
        precio: 27.50
    },

    {
        id: "sudadera-05",
        titulo: "Sudadera - Universo",
        imagen: "./assets/image/sudadera05.jpg",
        categoria: {
            nombre: "Sudaderas",
            id: "sudaderas"
        },
        precio: 27.50
    },

    
    {
        id: "sudadera-06",
        titulo: "Sudadera - Universo",
        imagen: "./assets/image/sudadera06.jpg",
        categoria: {
            nombre: "Sudaderas",
            id: "sudaderas"
        },
        precio: 27.50
    },

    
    {
        id: "sudadera-07",
        titulo: "Sudadera - Universo",
        imagen: "./assets/image/sudadera07.jpg",
        categoria: {
            nombre: "Sudaderas",
            id: "sudaderas"
        },
        precio: 27.50
    },

    
    {
        id: "sudadera-08",
        titulo: "Sudadera - Universo",
        imagen: "./assets/image/sudadera08.jpg",
        categoria: {
            nombre: "Sudaderas",
            id: "sudaderas"
        },
        precio: 27.50
    },

    
    {
        id: "sudadera-09",
        titulo: "Sudadera - Universo",
        imagen: "./assets/image/sudadera09.jpg",
        categoria: {
            nombre: "Sudaderas",
            id: "sudaderas"
        },
        precio: 27.50
    },

    
    {
        id: "sudadera-10",
        titulo: "Sudadera - Universo",
        imagen: "./assets/image/sudadera10.jpg",
        categoria: {
            nombre: "Sudaderas",
            id: "sudaderas"
        },
        precio: 27.50
    },

    
    {
        id: "sudadera-11",
        titulo: "Sudadera - Universo",
        imagen: "./assets/image/sudadera11.jpg",
        categoria: {
            nombre: "Sudaderas",
            id: "sudaderas"
        },
        precio: 27.50
    },

    
    {
        id: "sudadera-12",
        titulo: "Sudadera - Universo",
        imagen: "./assets/image/sudadera12.jpg",
        categoria: {
            nombre: "Sudaderas",
            id: "sudaderas"
        },
        precio: 27.50
    },

    {
        id: "mochila-01",
        titulo: "Mochila - 01",
        imagen: "./assets/image/mochila01.jpg",
        categoria: {
            nombre: "Mochilas",
            id: "mochilas"
        },
        precio: 27.50
    },

    
    {
        id: "mochila-02",
        titulo: "Mochila - 01",
        imagen: "./assets/image/mochila02.jpg",
        categoria: {
            nombre: "Mochilas",
            id: "mochilas"
        },
        precio: 27.50
    },

    
    {
        id: "mochila-03",
        titulo: "Mochila - 01",
        imagen: "./assets/image/mochila03.jpg",
        categoria: {
            nombre: "Mochilas",
            id: "mochilas"
        },
        precio: 27.50
    },

    
    {
        id: "mochila-04",
        titulo: "Mochila - 04",
        imagen: "./assets/image/mochila04.jpg",
        categoria: {
            nombre: "Mochilas",
            id: "mochilas"
        },
        precio: 27.50
    },

    
    {
        id: "mochila-05",
        titulo: "Mochila - 01",
        imagen: "./assets/image/mochila05.jpg",
        categoria: {
            nombre: "Mochilas",
            id: "mochilas"
        },
        precio: 27.50
    },

    
    {
        id: "mochila-06",
        titulo: "Mochila - 01",
        imagen: "./assets/image/mochila06.jpg",
        categoria: {
            nombre: "Mochilas",
            id: "mochilas"
        },
        precio: 27.50
    },

    
    {
        id: "mochila-07",
        titulo: "Mochila - 01",
        imagen: "./assets/image/mochila07.jpg",
        categoria: {
            nombre: "Mochilas",
            id: "mochilas"
        },
        precio: 27.50
    },

    
    {
        id: "mochila-08",
        titulo: "Mochila - 01",
        imagen: "./assets/image/mochila08.jpg",
        categoria: {
            nombre: "Mochilas",
            id: "mochilas"
        },
        precio: 27.50
    },

    
    {
        id: "mochila-09",
        titulo: "Mochila - 01",
        imagen: "./assets/image/mochila09.jpg",
        categoria: {
            nombre: "Mochilas",
            id: "mochilas"
        },
        precio: 27.50
    },

    
    {
        id: "mochila-10",
        titulo: "Mochila - 01",
        imagen: "./assets/image/mochila10.jpg",
        categoria: {
            nombre: "Mochilas",
            id: "mochilas"
        },
        precio: 27.50
    },

    
    {
        id: "mochila-11",
        titulo: "Mochila - 01",
        imagen: "./assets/image/mochila11.jpg",
        categoria: {
            nombre: "Mochilas",
            id: "mochilas"
        },
        precio: 27.50
    },

    
    {
        id: "mochila-12",
        titulo: "Mochila - 01",
        imagen: "./assets/image/mochila12.jpg",
        categoria: {
            nombre: "Mochilas",
            id: "mochilas"
        },
        precio: 27.50
    },

    
]

const productContainer = document.querySelector("#product-container");
const categoryButton = document.querySelectorAll(".categoryButton");
const mainHeader = document.querySelector("#mainTitle");
let addButtons = document.querySelectorAll(".producto-agregar");
const num = document.querySelector("#numbr");

function uploadingProducts(productsChosen) {
    productsChosen.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="image-product" src=${producto.imagen} alt="${producto.titulo}">
            <div class="details-product">
                <h3 class="title-product">${producto.titulo}</h3>
                <p class="price-product">${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        productContainer.append(div);
    });

    addandUpdateButtons();
    console.log(addButtons)
}

uploadingProducts(productos);

categoryButton.forEach(boton => {
    boton.addEventListener("click", (e) => {

        productContainer.innerHTML = "";

        categoryButton.forEach(boton => boton.classList.remove("active"));

        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "general") {
            const categoryProduct = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            mainHeader.innerText = categoryProduct.categoria.nombre;
            const buttonProducts = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            uploadingProducts(buttonProducts);
        } else{
            mainHeader.innerText = "Todos los productos";
            uploadingProducts(productos);
        }
       

            
    })
});

function addandUpdateButtons() {
    addButtons = document.querySelectorAll(".producto-agregar");

    
    addButtons.forEach(boton => {
        boton.addEventListener("click", addingCar);
    });
}

let chosenProducts;

let chosenProductsNext = localStorage.getItem("productos-en-carrito");

if(chosenProductsNext) {
    chosenProducts = JSON.parse(chosenProductsNext);
    updatingNumber();
} else {
    chosenProducts = [];
}

function addingCar(e) {

    const buttonId = e.currentTarget.id;
    const addProduct = productos.find(producto => producto.id === buttonId);

    if(chosenProducts.some(producto => producto.id === buttonId)) {
        const index = chosenProducts.findIndex(producto => producto.id === buttonId);
        chosenProducts[index].cantidad++;
    } else {
        addProduct.cantidad = 1;
        chosenProducts.push(addProduct);
    }

    updatingNumber ()

    localStorage.setItem("productos-en-carrito", JSON.stringify(chosenProducts));
}

function updatingNumber() {
    let newNumber = chosenProducts.reduce((acc, producto) => acc + producto.cantidad, 0);
    num.innerText = newNumber;
}








