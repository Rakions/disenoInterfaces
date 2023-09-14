let fa_heart = document.querySelectorAll(".fa-heart");

fa_heart.forEach(boton => {
    boton.addEventListener("click", () => {
        if (boton.classList.contains("fa-regular")) {
            boton.classList.remove("fa-regular");
            boton.classList.add("fa-solid")
        } else {
            boton.classList.remove("fa-solid")
            boton.classList.add("fa-regular")
        }
    })
});

fetch("productos.json")
    .then((response) => response.json())
    .then((json) => {
        for (let index = 0; index < json.length; index++) {
            document.querySelector(".products").innerHTML += `
            <div class="productsItem">
            <div class="productImage">
                <i class="fa-regular fa-heart"></i>
            </div>
            <div>
                <p>$json.nombre</p>
                <p>£32.00 / m²</p>
            </div>
            </div>`
        }
    })

