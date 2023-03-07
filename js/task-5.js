const refs = {
    input:document.querySelector('.task-5 > .input'),
    output:document.querySelector('.task-5 > .output'),
}

refs.input.addEventListener('blur', function (e) {
    const arr = e.target.value.split(' ');

    const newArr = arr.filter(e =>{
        return e !== '';
    });

   refs.output.textContent = newArr.length;

});

