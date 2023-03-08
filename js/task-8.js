const refs = {
    input:document.querySelector('.task-8 > .input'),
    output:document.querySelector('.task-8 > .output'),
}


refs.input.addEventListener('blur', function (e) {
    const currentYear = new Date().getFullYear();
    const years = currentYear - Number(e.target.value);

    refs.output.textContent = years;

});



