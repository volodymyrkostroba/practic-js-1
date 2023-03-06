const refs = {
    input:document.querySelector('.task-2 > .input'),
    output:document.querySelector('.task-2 > .output'),
}

refs.input.addEventListener('blur', sumHandler);

function sumHandler(e){
const arr = e.target.value.split('');

let sum = 0;

 arr.forEach(element => {
    sum += Number(element);
});

refs.output.textContent = sum;
}