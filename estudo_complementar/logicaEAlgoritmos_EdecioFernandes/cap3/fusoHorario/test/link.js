

async function getCityList() {
    const baseAPIUrl = "http://worldtimeapi.org/api/timezone/";

    try {
        const response = await fetch(baseAPIUrl);

        if(!response.ok) {
            throw new Error(`Error HTTP Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Dados recebidos com sucesso!");
        console.log(data);
        return data;
    } catch (e) {
        console.log("Falha ao buscar os dados: ", e);
        return null;
    }
}

async function getFuso() {
    //const baseAPI = `http://worldtimeapi.org/api/timezone/${city}`;
    const baseAPI =  "http://worldtimeapi.org/api/timezone/"
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
console.log(getCityList());