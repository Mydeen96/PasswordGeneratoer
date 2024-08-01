let generateButton = document.getElementById("btn") ;
let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");
let copyMessages = document.getElementById("copy-message");

const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let charaterPush = 0

generateButton.addEventListener('click' , PasswordGenerator);
password1.addEventListener('click' , copyClipboard1);
password2.addEventListener('click' , copyClipboard2);

function randomNumber(){
    return Math.floor(Math.random()*characters.length)
}

function PasswordGenerator(){
    password1.textContent = ""
    password2.textContent = ""
    for (let i = 0 ; i < 16 ;i++){
        let random = randomNumber();
        password1.textContent += characters[random] ;
        random = randomNumber()
        password2.textContent += characters[random] ;
    }
}

function copyClipboard1(){
    navigator.clipboard.writeText(password1.textContent)
    showCopyMessage()
}
function copyClipboard2(){
    navigator.clipboard.writeText(password1.textContent)
    showCopyMessage()
}

function showCopyMessage(){
    copyMessages.style.opacity = "1";
    setTimeout(() => {
        copyMessages.style.opacity = "0"
    },1500);    
}





