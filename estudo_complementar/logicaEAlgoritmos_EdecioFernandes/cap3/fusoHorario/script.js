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
async function getFuso() {
    const baseAPI = "http://worldtimeapi.org/api/timezone";

    try {
        const response = await fetch(baseAPI);

        if(!response.ok) {
            throw new Error(`Error HTTP! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Dados recebidos com sucesso!");
        return data;
    }catch(error) {
        console.error("Falha ao buscar os dados: ", error);
        return null;
    }
 
}

document.addEventListener("DOMContentLoaded", () => {
        
        const selectCitys = document.querySelector("#citys");

        currentHour();
        setInterval(currentHour,1000)

        citys.forEach(item => {
        const newOption = document.createElement("option");

        newOption.value = item.toLocaleLowerCase();
        newOption.textContent = item;

        selectCitys.appendChild(newOption);
        });
    selectCitys.addEventListener("change", () => {
    
    })
})



