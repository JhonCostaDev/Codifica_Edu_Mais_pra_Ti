function cleanApp() {
    document.querySelector("#name").value = "";

    document.querySelector("#height").value = "";

    document.querySelector("#results").innerHTML = "";
   
    
}

function idealWeight() {
    const name = document.querySelector("#name").value;

    const height = Number(document.querySelector("#height").value);
    const gender = document.querySelector('input[name="gender"]:checked');
    const showResult = document.querySelector(".results");
    
    let targetWeight = 21 * height ** 2;

    //22 * altura ** 2 - man
    //21 * altura ** 2 - woman
    if(gender.value == 'male') {
        targetWeight = 22 * height ** 2;
   
    } 
    console.log(targetWeight)


    showResult.innerHTML = `<p>${name}: Seu peso ideal é de: ${targetWeight.toFixed(2)} Kg</p>`;
}