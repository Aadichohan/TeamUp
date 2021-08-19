 class scripts {
    constructor(){
   console.log('script constructor');
    }
    getLoginItem = (isLogin) =>{
        let login =  localStorage.getItem('login');
        login = JSON.parse(login);
        objIndex = login.findIndex((obj => obj.isLogin == isLogin));
        return [objIndex, login];
    }
     chechNotLogin = () =>{
        let _return = getLoginItem(true);
        const [objIndex] = _return;
        if(objIndex < 0 ){
            window.location.replace('index.html');
        }
    }
}

