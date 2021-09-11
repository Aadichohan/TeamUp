const getLoginItem = (isLogin) =>{
    let login =  localStorage.getItem('login');
    
    if(login){
      login = JSON.parse(login);
      objIndex = login.findIndex((obj => obj.isLogin == isLogin));
      return [objIndex, login];
    }
    else{
      return [null, null];
    }
}
const Logout = () => {
     let _return = getLoginItem(true);
     const [objIndex,login] = _return;

     console.log(objIndex);
    if(objIndex >= 0 ){
        login[objIndex].isLogin = false;
        setStorage('login',login);
        RStorage('userId');
        // localStorage.setItem('login',JSON.stringify(login)); 
        window.location.replace('index.html');
    }
}
const setContent = () =>{
    let _return = getLoginItem(true);
   // console.log('_return ',_return);
    const [objIndex,login] = _return;
    let welcome =   document.getElementById('welcome');
   if(welcome){
    welcome.innerHTML = 'Let`s TeamUp <br>Welcome to! '+login[objIndex].uname;
   }
}
const chechNotLogin = () =>{
    let _return = getLoginItem(true);
    const [objIndex] = _return;
      console.log('chechNotLogin ', _return);
    if(objIndex == null || objIndex < 0 ){
        window.location.replace('index.html');
    }
}
const setSidebar = () =>{
      const root = document.getElementById('nav')
fetch("./Template/sidebar.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    root.innerHTML = data;
  });

}
const setHeader = () =>{
      const root = document.getElementById('header')
fetch("./Template/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
   let userId =  getStorage('userId');
   let login  =  getStorage('login');
   var index = login.findIndex((obj => obj.id == userId));
   
   root.innerHTML = data;
   ById('Utitle').innerText= login[index].uname;
  });

}
const setFooter = () =>{
      const root = document.getElementById('footer')
fetch("./Template/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    root.innerHTML = data;
  });

}

const setHome = () =>{
  const root = document.getElementById('app')
fetch("./home/home.html")
.then(response => {
return response.text()
})
.then(data => {
root.innerHTML = data;
});

}
const myTeam = () =>{
  const root = document.getElementById('app')
fetch("./Team/teamIndex.html")
.then(response => {
return response.text()
})
.then(data => {
root.innerHTML = data;
setTeamTbl();
$('#tblTeam').DataTable();
});

}
const Group = () =>{
  const root = document.getElementById('app')
fetch("./Team/group.html")
.then(response => {
return response.text()
})
.then(data => {
root.innerHTML = data;
setGroupTbl();
$('#tblGroup').DataTable();

});

}

const createTeamCat = () =>{
  const root = document.getElementById('app')
fetch("./Team/teamCat.html")
.then(response => {
return response.text()
})
.then(data => {
root.innerHTML = data;
});
}

const viewQuestion = (btn)=>{
   TId        = btn.getAttribute('data-id');
   TName      = btn.getAttribute('data-tname');
  //  console.log(TName);
  const root = document.getElementById('app')
  fetch("./Q&A/quiz.html")
  .then(response => {
  return response.text()
  })
  .then(data => {
  root.innerHTML = data;
  setQuesionList(TId);
   root.querySelector('#teamId').setAttribute('data-id',TId);
  root.querySelector('#heading').innerText = 'Question List for Team ( '+TName+' )';
  })
}
const viewAnswer = (btn)=>{
   TId        = btn.getAttribute('data-id');
   TName      = btn.getAttribute('data-tname');
  //  console.log(TName);
  const root = document.getElementById('app')
  fetch("./Q&A/answer.html")
  .then(response => {
  return response.text()
  })
  .then(data => {
  root.innerHTML = data;
  QuesionList(TId);
   root.querySelector('#saveAnsBtn').setAttribute('data-id',TId);
  root.querySelector('#heading').innerText = 'Answer List for Team ( '+TName+' )';
  })
}
const viewGAnswerReport = (btn)=>{
   TId        = btn.getAttribute('data-id');
   TName      = btn.getAttribute('data-tname');
   
  //  console.log(TName);
  const root = document.getElementById('app')
  fetch("./Reports/GroupAnsReport.html")
  .then(response => {
  return response.text()
  })
  .then(data => {
  root.innerHTML = data;

  ById('_Date').value = getSysDate();
  ById('_Date').setAttribute('data-id',TId);
  GAnsReportsList(TId);
  //  root.querySelector('#saveAnsBtn');
  root.querySelector('#heading').innerText = 'Group Report for Team ( '+TName+' )';

  $( "#_Date" ).datepicker({
    dateFormat: 'dd-mm-yyyy',
    changeMonth: true,
    changeYear: true,
    autoclose: true,
  });
  
  })
}

const viewAdminReport = (btn)=>{
   TId        = btn.getAttribute('data-id');
   TName      = btn.getAttribute('data-tname');
   
  //  console.log(TName);
  const root = document.getElementById('app')
  fetch("./Reports/AdminReport.html")
  .then(response => {
  return response.text()
  })
  .then(data => {
  root.innerHTML = data;

  ById('_Date').value = getSysDate();
  ById('find').setAttribute('data-id',TId);
  AdminReports(TId);
  //  root.querySelector('#saveAnsBtn');
  root.querySelector('#heading').innerText = 'Group Report for Team ( '+TName+' )';

  $( "#_Date" ).datepicker({
    dateFormat: 'dd-mm-yyyy',
    changeMonth: true,
    changeYear: true,
    autoclose: true,
  });
  
  })
}


{
  //check  & redirect if not login
   chechNotLogin();
   setSidebar();
   setHeader();
   setFooter();
   setContent();
   setHome();
}