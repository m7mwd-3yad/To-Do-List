let add = document.querySelectorAll('input');
let hide = document.querySelector('.hide')
let btn = document.querySelectorAll('button');

let text = () => {
    add[2].value = add[0].value;
    hide.style.display = 'contents';
}
console.log(hide);
add[1].addEventListener('click', text);

let afterr = () => {


    if (btn[0].classList.contains('edt')){
        btn[0].classList.remove("edt")
        btn[0].classList.add('save')
        btn[0].innerHTML='Save';
    }else{
        btn[0].classList.remove('save')
        btn[0].classList.add("edt")
        btn[0].innerHTML='Edit';
        
    }
} 

let detete = () => {
    hide.style.display = 'none';
}
btn[0].addEventListener('click', afterr);
btn[1].addEventListener('click', detete);