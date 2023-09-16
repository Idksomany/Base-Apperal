let inputTxt=document.querySelector('#email-input');
const submitBtn = document.querySelector('#submit-btn');

const error_logo = document.querySelector('#error-logo');
const error_txt = document.querySelector("#error-txt");

const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

inputTxt.value = "";



function removeClass(f, s){
    f.classList.remove('disable');
    s.classList.remove('disable');
}


function addClass(f, s){
    f.classList.add('disable');
    s.classList.add('disable');
}

submitBtn.addEventListener('click', (event) =>{
    event.preventDefault();
   addClass(error_logo, error_txt);
    if(inputTxt.value.trim() === ""){
        removeClass(error_logo, error_txt);
        console.log(true);
    }
    else if(regexEmail.test(inputTxt.value) !== true){
        removeClass(error_logo, error_txt);
    }
    else{
        addClass(error_logo, error_txt);
        
        // inputTxt.value = "Thank you!";
    inputTxt.value = "";

    }
    // removeClass(error_logo, error_txt);
    console.log(inputTxt.value);
});
