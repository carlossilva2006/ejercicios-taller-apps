
const boton=window.document.querySelector('boton');
boton.addEventListener('Click' , mostrardato);
const email=document.getElementById("email").value;
const psw=document.getElementById("psw").value; 

function mostrardato(){
     
    if(email==='ejemplo@gmail.com' && psw==='123456'){
        alert("Bienvenido a zafary");
    }else{
         alert("Email y/o contraseña incorrectos");
        return false;
        }

} 
