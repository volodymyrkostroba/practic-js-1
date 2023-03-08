const refs = {
    input:document.querySelector('.task-10 > .input'),
    output:document.querySelector('.task-10 > .output'),
}

refs.input.addEventListener('blur', function (e) {
    const arr = e.target.value.split('');

    const hasNumber = arr.some(element => {
        return element == 3;
    });
    
    refs.output.textContent = hasNumber;
});
