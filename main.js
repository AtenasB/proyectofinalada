const contenedor = document.getElementById("contenedor-tarjetas")
console.log(contenedor)

fetch("https://rickandmortyapi.com/api/character")
.then(respuesta => respuesta.json())
.then(data => {
    const dataApi = data.results
    console.log(dataApi)

    let acc = ""
    for (let i = 0; i < dataApi.length; i++){
      acc = acc + `
            <div class="card">
                <div class="contenedor-img">
                    <img src=${dataApi[i].image} alt=${dataApi[i].name}>
                </div>
                <p>
                    ${dataApi[i].name}
                </p>
                <button type="button">Ver más</button>
            </div>
                
        ` 
    }
    contenedor.innerHTML = acc

})

