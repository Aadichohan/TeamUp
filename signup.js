class signUpClass{
  constructor(id, uname, email, password, roll_id){
      this.id        = id,
      this.uname     = uname,
      this.password  = password,
      this.rollId   = roll_id,
      this.isLogin  = false ,
      this.isEnable = 1 
  }
}

const SignUpSetup = () => {
    let SignUpStorage = [];
    let id = 1;
    var uname = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var rollId = document.getElementById('role').value;
    //const signUpConst = new signUpClass(id, uname, email, password, rollId);
    //SignUpStorage.push(signUpConst);
   let login = localStorage.getItem('login');
   //console.log('login ', login);
      login = (login) ? JSON.parse(login) : [];
      //  console.log('setLogin ', login);
       login.map((SignUp,i)=>{
           id = SignUp.id + 1 ;
           SignUpStorage.push(SignUp);
        });
        

   // console.log('map ', id);
    const signUpConst = new signUpClass(id, uname, email, password, rollId);
     SignUpStorage.push(signUpConst);
     localStorage.setItem('login',JSON.stringify(SignUpStorage)); 
    // console.log('SignUpStorage ', SignUpStorage);

}