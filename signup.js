class signUpClass{
  constructor(id, uname, email, password, role_id){
      this.id        = id,
      this.uname     = uname,
      this.email     = email,
      this.password  = password,
      this.roleId    = role_id,
      this.isLogin   = false ,
      this.isEnable  = 1 
  }
}

class role{
  constructor(id,name){
      this.id    = id,
      this.name  = name
  }
}

const SignUpSetup = () => {
    let SignUpStorage = [];
    let id = 1;
    var uname = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var rollId = document.getElementById('role').value;

   let login = localStorage.getItem('login');

      login = (login) ? JSON.parse(login) : [];

       login.map((SignUp,i)=>{
           id = SignUp.id + 1 ;
           SignUpStorage.push(SignUp);
        });
        
    const signUpConst = new signUpClass(id, uname, email, password, rollId);
     SignUpStorage.push(signUpConst);
     localStorage.setItem('login',JSON.stringify(SignUpStorage));
}

const roleSetup = () => {
  let getLogin =  localStorage.getItem('login');
   console.log(getLogin);
    if(getLogin === null){
       localStorage.setItem('login', []);
    }
  let roleList = ['Admin','TeamLead','Employee'];
  let roleStorage = [];
  roleList.map((roles,i)=>{
 
      i = i + 1;
   const roleConst = new role(i,roles);
       roleStorage.push(roleConst);
       if(roles ==='Admin'){
        return false;
       }
       console.log(roleStorage);
       var option = document.createElement("option");
       option.text = roles;
       option.value = i;
       document.getElementById('role').appendChild(option);
  });
  localStorage.setItem('roles',JSON.stringify(roleStorage)); 
  console.log(localStorage.getItem('roles'));
}


{
    //Setup Roles
    roleSetup();
    
  
}