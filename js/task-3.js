const refs = {
    input:document.querySelector('.task-3 > .input'),
    output:document.querySelector('.task-3 > .output'),
}


refs.input.addEventListener('blur', function (e) {
    const arr = e.target.value.split(',');


    const sum = arr.reduce(
        (accumulator, e) => accumulator += Number(e),
        0
      );

      refs.output.textContent = sum;
});