const getLoginItem = (isLogin) =>{
    let login =  localStorage.getItem('login');
    login = JSON.parse(login);
    objIndex = login.findIndex((obj => obj.isLogin == isLogin));
    return [objIndex, login];
}
const Logout = () => {
     let _return = getLoginItem(true);
     const [objIndex,login] = _return;

     console.log(objIndex);
    if(objIndex >= 0 ){
        login[objIndex].isLogin = false;
        localStorage.setItem('login',JSON.stringify(login)); 
        window.location.replace('index.html');
    }
}
const setContent = () =>{
    let _return = getLoginItem(true);
     const [objIndex,login] = _return;
  document.getElementById('welcome').innerHTML = 'Let`s TeamUp <br>Welcome to! '+login[objIndex].uname;
}
const chechNotLogin = () =>{
    let _return = getLoginItem(true);
    const [objIndex] = _return;
    //  console.log('chechNotLogin ', _return);
    if(objIndex < 0 ){
        window.location.replace('index.html');
    }
}


{
  //check  & redirect if not login
  chechNotLogin();
   setContent();
}