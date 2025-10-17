import citys from "./data/citys.js";
function currentHour() {
    const today = new Date();
    const formatedHour = today.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: '2-digit',
        second: '2-digit' 
    })
    const clock = document.querySelector("#hour");
    clock.textContent = formatedHour;
}

async function getFuso(city) {
    const baseAPI = `http://worldtimeapi.org/api/timezone/${city}`;

    try {
        const response = await fetch(baseAPI);

        if(!response.ok) {
            throw new Error(`Error HTTP! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Dados recebidos com sucesso!");
        console.log(data);
        return data;
    }catch(error) {
        console.error("Falha ao buscar os dados: ", error);
        return null;
    }
}

// carrega a lista no select ao carregar a pag.
document.addEventListener("DOMContentLoaded", () => {
        
        const selectCitys = document.querySelector("#citys");
        const outCity = document.querySelector("#outCity");
        const outTime = document.querySelector("#outTime");

        currentHour();
        setInterval(currentHour,1000)

        //itera no array com nome das cidades e carrega como um option no select do html.
        citys.forEach(item => {
        const newOption = document.createElement("option");

        newOption.value = item.toLocaleLowerCase();
        newOption.textContent = item;

        selectCitys.appendChild(newOption);
        });

        //Pega a mudança no select tag
        selectCitys.addEventListener("change", () => {
            const optionValue = selectCitys.value;
            console.log(optionValue);
            const fuso = getFuso(optionValue);
//TODO: FORMATAR A SAIDA DA HORA NO HTML
            outCity.textContent = optionValue;
            outTime.textContent = fuso.datetime;
            console.log(fuso.datetime)
        })
        
})



