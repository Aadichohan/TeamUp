class LoginClass{
  constructor(isLogin){
      this.isLogin  = isLogin 
  }
}

const LoginSetup = () => {
    let SignUpStorage = [];
    let id = 1;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

   let login = localStorage.getItem('login');

      login = (login) ? JSON.parse(login) : [];

      objIndex = login.findIndex((obj => obj.email == email && obj.password == password && obj.isEnable == 1));
     // console.log(objIndex,' objIndex');
    //  console.log("Before update: ", login[objIndex])

//Update object's name property.
login[objIndex].isLogin = true;

//Log object to console again.
console.log("After update: ", login[objIndex])


    // const signUpConst = new LoginClass(true);
    //  SignUpStorage.push(signUpConst);
    //  localStorage.setItem('login',JSON.stringify(SignUpStorage)); 
    // console.log('SignUpStorage ', SignUpStorage);

}


{
    //Setup Roles
   // roleSetup();
    
  
}

