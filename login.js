class LoginClass{
  constructor(isLogin){
      this.isLogin  = isLogin 
  }
}

const LoginAuthSetup = () => {
    let SignUpStorage = [];
    let id = 1;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

   let login = localStorage.getItem('login');

      login = (login) ? JSON.parse(login) : [];

      objIndex = login.findIndex((obj => obj.email == email && obj.password == password && obj.isEnable == 1));
      if(objIndex >= 0 ){

          login[objIndex].isLogin = true;
          localStorage.setItem('userId',login[objIndex].id); 
          localStorage.setItem('login',JSON.stringify(login)); 
          window.location.replace('app');
      }

}

const adminLogin = () => {
    let getLogin =  localStorage.getItem('login');
     console.log(getLogin);
      if(getLogin === null){
          let admin = {id:1,uname:'admin',email:'admin@mail.com', password:'1234',roleId:1, isLogin:false, isEnable: 1}
         localStorage.setItem('login', JSON.stringify([admin]));
      }
      else{
          login = JSON.parse(getLogin);
        objIndex = login.findIndex((obj => obj.isEnable == true));
        console.log(objIndex);
       }
  }
  const chechLogin = () =>{
    let login =  localStorage.getItem('login');
    login = JSON.parse(login);
    objIndex = login.findIndex((obj => obj.isLogin == true));
    if(objIndex >= 0 ){
        window.location.replace('app');
    }
}

{
    //Setup Roles
    adminLogin();

    //check if user is Login then redirect
    chechLogin();
    
  
}

