let usernameDB = 'parrot';
let passwordDB = 'kali';
let ms1 = () => alert("Bilgiler doğrulandı!");
let ms2 = () => alert("Kullanıcı adı ve şifre hatalı!");
let ms3 = () => alert("Kullanıcı adı hatalı!");
let ms4 = () => alert("Şifre hatalı!");

function security() {
  let inputUserName = document.getElementById("username").value;
  let inputPassword = document.getElementById("password").value;
  
  if(usernameDB === inputUserName && passwordDB === inputPassword) {
    ms1();
  }
  else if(usernameDB === inputUserName && passwordDB !== inputPassword) {
    ms4();
    }
  else if (usernameDB !== inputUserName && passwordDB === inputPassword) {
        ms3();
    }

    else {
        ms2();
    }
}
