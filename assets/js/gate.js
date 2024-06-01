const dialog = document.getElementById("passwordDialog");
const openDialogBtn = document.getElementById("openDialogBtn");
const closeDialogBtn = document.getElementById("closeDialogBtn");
const password = document.getElementById("password");
const btnSend = document.getElementById("btnSend");
const notification = document.getElementById("notification");

let inputValue = "";
password.addEventListener("change", function () {
  inputValue = this.value;
});
btnSend.addEventListener("click", function () {
  let verification = encrypt_data(inputValue);
  if (verification==="1337143e2ec2") {
    location.href = "info1.html"
  }else{
    alert("Contraseña Incorrecta")
    notification.textContent = "Contraseña Incorrecta"
    
  }
});
openDialogBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeDialogBtn.addEventListener("click", () => {
  dialog.close();
  location.href = "index.html";
});

dialog.addEventListener("close", () => {
  if (dialog.returnValue === "") {
    console.log("El diálogo se cerró sin enviar el formulario");
  } else {
    console.log("El formulario fue enviado con éxito");
  }
});

function encrypt_data(string) {
    string = unescape(encodeURIComponent(string));
    var newString = '',
       char, nextChar, combinedCharCode;
    for (var i = 0; i < string.length; i += 2) {
    char = string.charCodeAt(i);

  if ((i + 1) < string.length) {


  nextChar = string.charCodeAt(i + 1) - 31;


  combinedCharCode = char + "" + nextChar.toLocaleString('en', {
   minimumIntegerDigits: 2
  });

  newString += String.fromCharCode(parseInt(combinedCharCode, 10));

  } else {


  newString += string.charAt(i);
  }
  }
  return newString.split("").reduce((hex,c)=>hex+=c.charCodeAt(0).toString(16).padStart(4,"0"),"");
  }