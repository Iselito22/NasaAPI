const apiKey = 'pf8tFiHzCDstCONHBOInUlANAdl74nsuwMsMauK9';
const sol = 1000; // El número de sol que deseas consultar

// URL del API de la NASA
const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=${apiKey}`;

// Realizar una solicitud GET utilizando Fetch API
async function obtenerResultados() {
    const resultados = await fetch(apiUrl);
    let json = resultados.json();
    console.log(json);
    return await json;
}


async function mostrarImagenes() {
    const datos = await obtenerResultados();
    const container = document.getElementById("container");
    container.innerHTML = ""
    for (let index = 0; index < 25; index++) {
        const item = document.createElement("div");
        item.setAttribute("class", "elemento");
        item.innerHTML = `<h2 class="pic-title">${datos.photos[index].camera.name}</h2>
        <img class="img-api" src="${datos.photos[index].img_src}"></img>
        <div class="description">
            <div class="desc">Camera: ${datos.photos[index].camera.full_name}<div><br>
            <div class="desc">Launching date: ${datos.photos[index].rover.launch_date}<div><br>
            <div class="desc">Landing date: ${datos.photos[index].rover.landing_date}<div><br>
        </div>
        `
        container.appendChild(item)
    }

    console.log(datos)
}

mostrarImagenes()