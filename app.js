class role{
  constructor(id,name){
      this.id    = id,
      this.name  = name
  }
}



const roleSetup = () => {
  let getLogin =  localStorage.getItem('login');
   console.log(getLogin);
    if(getLogin === null){
       localStorage.setItem('login', []);
    }
  let roleList = ['TeamLead','Employee'];
  let roleStorage = [];
  roleList.map((roles,i)=>{
      i = i + 1;
   const roleConst = new role(i,roles);
       roleStorage.push(roleConst);
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

