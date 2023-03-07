const refs = {
    input:document.querySelector('.task-4 > .input'),
    name:document.querySelector('.task-4 > .name'),
    surname:document.querySelector('.task-4 > .surname'),
    fatherName:document.querySelector('.task-4 > .fathername'),

}




refs.input.addEventListener('blur', function (e) {
    refs.name.textContent = refs.name.textContent + '';
    refs.surname.textContent = refs.surname.textContent + '';
    refs.fatherName.textContent = refs.fatherName.textContent + '';

    const arr = e.target.value.split(' ');

    console.log(arr);

   refs.name.textContent = refs.name.textContent + arr[0];
   refs.surname.textContent = refs.surname.textContent + arr[1];
   refs.fatherName.textContent = refs.fatherName.textContent + arr[2];
});