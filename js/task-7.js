const refs = {
    input:document.querySelector('.task-7 > .input'),
    output:document.querySelector('.task-7 > .output'),
}

refs.input.addEventListener('blur', function (e) {
    const arr = e.target.value.split('.').reverse();
    const reversedDate = arr.join('-');

    refs.output.textContent = reversedDate;
});