const refs = {
    input:document.querySelector('.task-9 > .input'),
    output:document.querySelector('.task-9 > .output'),
}

refs.input.addEventListener('blur', function (e) {
    const word = e.target.value;
    const reversedWord = word.split('').reverse().join('');
    const result = word === reversedWord;

    refs.output.textContent = word === result;;
});

let str = 'bfsb3';

