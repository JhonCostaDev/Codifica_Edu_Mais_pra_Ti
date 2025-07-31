function showHello(){
            let name = document.getElementById('name').value;
            let response = document.getElementById('response');
            response.textContent = `Welcome ${name}`   
        }

let show = document.getElementById('show');
show.addEventListener('click', showHello);