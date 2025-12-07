
//definimos y especificamos valores para las masas
const masas = {
    pizza: {
        nombre: "Pizza Napolitana",
        descripcion: "La auténtica pizza napolitana se compone de ingredientes sencillos pero de alta calidad.</br> Extiende una fina capa de tomate triturado sobre la masa.</br> Coloca trozos de mozzarella fresca y hojas de albahaca.</br> Si lo deseas, puedes añadir un chorrito de aceite de oliva virgen.",
        porcentajeAgua: 0.65,
        porcentajeSal: 0.025,
        porcentajeLevadura: 0.015
    },
    focaccia: {
        nombre: "Focaccia",
        descripcion: "Se trata de un plato tradicional de la cocina italiana muy relacionado con la popular pizza.</br> La receta básica de este preparado se cree que procede de los antiguos etruscos o los antiguos griegos,</br> no obstante es considerado como una delicia de la gastronomía de Liguria, denominada fugàssa en ligur.",
        porcentajeAgua: 0.70,
        porcentajeSal: 0.02,
        porcentajeLevadura: 0.012
    },
    baguette: {
        nombre: "Baguette",
        descripcion: "La baguette o baguete es una variedad de pan originaria de Francia que se caracteriza por una forma alargada. </br> Es uno de los formatos de pan más conocidos, producidos y consumidos a nivel internacional.",
        porcentajeAgua: 0.55,
        porcentajeSal: 0.015,
        porcentajeLevadura: 0.014
    }
};

//funcion para mostrar la calculadora
function mostrarCalculadora(tipo) {
    const masa = masas[tipo];
    //esqueleto html para dif recetas
    let calculadora = `
        <div class="container fondoAlternativo d-flex justify-content-center align-items-center">
            <div>
                <h2 class="text-center">${masa.nombre}</h2>
                <p>${masa.descripcion}</p>
                <h4>Introduce la cantidad de harina para recibir la receta</h4>
                <div class="">
                    <div class="row col-md-12">
                        <label for="${tipo}Harina" class="form-label">Cantidad de Harina (g)</label>
                        <input type="number" class="form-control col-md-8" id="${tipo}Harina"  min="50" step="10" onchange="calculoIngre('${tipo}')">
                    </div>
                </div>
            </div>
        </div>
        <div id="${tipo}Ingredientes" class="container fondoAlternativo d-flex justify-content-center align-items-center"></div>
    `;
    // Mostrar la calculadora en la página
    document.getElementById('calculadora').innerHTML = calculadora;
}

// Función de cálculo de ingredientes
function calculoIngre(tipo) {
    const cantidadHarina = parseFloat(document.getElementById(tipo + 'Harina').value);
    const masa = masas[tipo];
    const porcentajeAgua = masa.porcentajeAgua;
    const porcentajeSal = masa.porcentajeSal;
    const porcentajeLevadura = masa.porcentajeLevadura;

    const cantidadAgua = cantidadHarina * porcentajeAgua;
    const cantidadSal = cantidadHarina * porcentajeSal;
    const cantidadLevadura = cantidadHarina * porcentajeLevadura;

    // Mostrar los ingredientes en la página para cada receta
    document.getElementById(tipo + 'Ingredientes').innerHTML = `
        <div class="row text-center">
            <div class="col-md-3 mb-3">
                <label for="${tipo}Agua" class="form-label">Agua (ml)</label>
                <input type="number" class="form-control" id="${tipo}Agua" value="${cantidadAgua.toFixed(0)}" readonly>
            </div>
            <div class="col-md-3 mb-3">
                <label for="${tipo}Sal" class="form-label">Sal (g)</label>
                <input type="number" class="form-control" id="${tipo}Sal" value="${cantidadSal.toFixed(0)}" readonly>
            </div>
            <div class="col-md-3 mb-3">
                <label for="${tipo}Levadura" class="form-label">Levadura (g)</label>
                <input type="number" class="form-control" id="${tipo}Levadura" value="${cantidadLevadura.toFixed(0)}" readonly>
            </div>
        </div>
    `;
}

