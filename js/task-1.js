const refs = {
    numbers:document.querySelectorAll('.input'),
    output:document.querySelector('.output'),
    btn:document.querySelector('.btn'),
    
}


refs.btn.addEventListener('click', totalHandler);

function totalHandler(e){
    e.preventDefault();
    let total = 0;

    refs.numbers.forEach(element => {
        total += Number(element.value);
    });

    refs.output.textContent = total;

    
}

