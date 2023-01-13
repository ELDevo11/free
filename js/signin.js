let mail = document.querySelector(".email");
let password = document.querySelector(".num");
let eye = document.querySelector(".eye");
let eyeSlash = document.querySelector(".eye-slash");
let form = document.forms[0]



form.addEventListener("submit" , (e)=> {
    let numbers = /["0-9"]/
    if( mail.value === "" || password.value === "") {
        e.preventDefault();
    }
    if (mail.value === "") {
        mail.style.border = "2px solid red";
    }else {
        mail.style.border = "none"
    }
    if (password.value === "") {
        password.style.border = "2px solid red";
    }else {
        password.style.border = "none"
    }
})

eyeSlash.addEventListener("click", ()=>{
    eyeSlash.style.display = "none"
    eye.style.display = "block"
    password.setAttribute("type","text");
})
eye.addEventListener("click", ()=>{
    eye.style.display = "none"
    eyeSlash.style.display = "block"
    password.setAttribute("type","password");

})