let chose = document.getElementById("chose");
let full = document.getElementById("full-name");
let email = document.getElementById("email");
let number = document.getElementById("number");
let c = document.getElementById("c-code");
let message = document.getElementById("message");
let send = document.getElementById("send");
let form = document.getElementById("form");

function change(){
    unnknowen();
    knowen();
}
function unnknowen(){
chose.onclick = function(){
full.style.opacity = "1";
email.style.opacity = "1";
c.style.opacity = "1";
number.style.opacity = "1";
message.style.marginTop= "0px";
send.style.marginTop= "0px"
chose.value="Unknowen message";
full.style.marginLeft = "0px";
email.style.marginLeft = "0px";
c.style.marginLeft = "0px";
number.style.marginLeft = "0px";
full.style.width = "80%";
email.style.width = "80%";
c.style.width = "10%";
number.style.width = "70%";
full.style.height = "40px";
email.style.height = "40px";
c.style.height = "40px";
number.style.height = "40px";
knowen()
};
}
function knowen(){
chose.onclick = function(){
full.style.opacity = "0";
email.style.opacity = "0";
c.style.opacity = "0";
number.style.opacity = "0";
full.style.height = "0px";
email.style.height = "0px";
c.style.height = "0px";
number.style.height = "0px";
full.style.marginLeft = "900px";
email.style.marginLeft = "900px";
c.style.marginLeft = "900px";
number.style.marginLeft = "900px";
full.style.width = "0px";
email.style.width = "0px";
c.style.width = "0px";
number.style.width = "0px";
message.style.marginTop= "-100px";
send.style.marginTop= "10px"
chose.value="Known message";
unnknowen()
}; 
}


// function knowen(){
//     chose.onclick = function(){
//         full.style.opacity = "1";
//         chose.value="Unknown message";
//     }
// }