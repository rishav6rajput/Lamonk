const patterns={
    name: /^[a-zA-Z\s]{2,24}$/,
    email:/^[a-z0-9\.]+@[a-z]+\.[a-z]{3,8}$/i,
    contact:/^[0-9]{10}$/
};
const validationForm=(name,field)=>{
    console.log(field,name,field.value);
    if(field.value){
        if(patterns[name].test(field.value)){
            console.log(patterns[name].test(field.value));
            field.classList.add("success");
            field.classList.remove("failure");
        }
        else{
            field.classList.add("failure");
            field.classList.remove("success");
        }
    }
    else{
        field.classList.remove("failure");
        field.classList.remove("success");

    }
}
const inputs= document.querySelectorAll('.wrapper input[type="text"]')
for(let i=0;i<inputs.length;i++){
    inputs[i].addEventListener('keyup',(e)=>{
        if(e.target.name!='captcha'){
            validationForm(e.target.name,e.target);
        }
    })
}
let generatedCaptcha='';

function createCaptcha(){
    let chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$";
    for(let i=0;i<5;i++){
        let num=Math.round(Math.random()* chars.length-1);
        generatedCaptcha+=chars[num];
    }
    document.querySelector(".captcha-text").innerText=generatedCaptcha;
}
document
.querySelector(".captcha-reload-icon")
.addEventListener("click",createCaptcha);
createCaptcha();

document.querySelector('.wrapper form').addEventListener("submit",(e)=>{
    e.preventDefault();
    const userCaptcha=document.querySelector('input[name="captcha"]').value
    if(userCaptcha == generatedCaptcha){
        alert("Form Submitted Successfully");
        window.navigator.geolocation.getCurrentPosition((pos)=>{
            console.log(pos.coords.latitude,pos.coords.longitude);
        },
        ()=>{
            alert("Location Blocked");

        });
    }
    else{
        alert("Invalid Captcha");
    }
})