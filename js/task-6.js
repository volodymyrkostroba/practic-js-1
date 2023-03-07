const refs = {
    input:document.querySelector('.task-6 > .input'),
    output:document.querySelector('.task-6 > .output'),
}

refs.input.addEventListener('blur', function (e) {
       const arr = e.target.value.split(' ');
       let longestWord = arr[0];


       for (let index = 0; index < arr.length; index++) {

      if(arr[index].length > longestWord.length){
        longestWord = arr[index];
      }
    }

    refs.output.textContent = longestWord.length;
        
    }
)

