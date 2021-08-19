class TeamCat{
    constructor(id, catName){
        this.id        = id,
        this.catName   = catName,
        this.isEnable  = 1 
    }
  }
  let member = [];
class TeamSet{
    constructor(id, ownerId, TName, catId,memberId){
        this.id        = id,
        this.ownerId   = ownerId,
        this.TName     = TName,
        this.catId     = catId,
        this.isEnable  = 1 ,
        this.members  = memberId;
        //this.members  = this.Teams(memberId);
    }
    Teams(mId){
        member.push(Number(mId));
        return  member;
    }
  }
  const CatSetup = () => {
    
    let CatStorage = [];
    let id = 1;
    var CatName = document.getElementById('catName').value;
    let CatList = localStorage.getItem('CatList');
    CatList = (CatList) ? JSON.parse(CatList) : [];

    CatList.map((Cat,i)=>{
        id = Cat.id + 1 ;
        if(Cat.catName.toLowerCase() === CatName.toLowerCase()){return false;}
        // console.log('gg ',Cat);
        CatStorage.push(Cat);
     });
     
   const catConst = new TeamCat(id, CatName);
   CatStorage.push(catConst);
 localStorage.setItem('CatList',JSON.stringify(CatStorage));
  }
  

const addMember = () => {
    let getLogin =   JSON.parse(localStorage.getItem('login'));
        console.log(getLogin);
    if(getLogin !== null){
        getLogin.map((login,i)=>{
            if(login.roleId === 1){
                return false;
               }
       var option = document.createElement("option");
       option.text = login.email;
       option.value = login.id;
       console.log('option ',option);
     let addMember =  document.getElementById('addMember');
       if(addMember){addMember.appendChild(option)};
  });
 }
}
const setCategory = () => {
    let getCat =   JSON.parse(localStorage.getItem('CatList'));
        console.log(getCat);
    if(getCat !== null){
        getCat.map((cat,i)=>{
       let option = document.createElement("option");
       option.text = cat.catName;
       option.value = cat.id;
       console.log('option ',option);
     let setCat =  document.getElementById('setCat');
       if(setCat){setCat.appendChild(option)};
  });
 }
}
const TeamSetup = () =>{
  let TeamStorage = [];
  let owner = JSON.parse(localStorage.getItem('userId'))
  let Tname = document.getElementById('Tname').value;
  let setCat = document.getElementById('setCat').value;
  let mIdArray = document.getElementById('addMember').selectedOptions;
  let mIds = Array.from(mIdArray).map(({ value }) =>Number( value));
 const teamSet = new TeamSet(1,owner, Tname, setCat, mIds);
 TeamStorage.push(teamSet);
 localStorage.setItem('TeamList', JSON.stringify(TeamStorage));
}

const setTeamTbl = () =>{
  
  let TeamList = JSON.parse(localStorage.getItem('TeamList'));
  let tbl      = document.getElementById('tblTeam');
  TeamList.map((obj, i)=>{
  //  console.log(obj);

    let btn = document.createElement("button").innerText = 'd';
    let tbody = document.createElement("TBODY");
    let tr = document.createElement("TR");
    let td1 = document.createElement("TD");
    let td2 = document.createElement("TD");
    let td3 = document.createElement("TD");
        td1.innerHTML = i+1;
        tr.appendChild(td1);
        td2.innerHTML = obj.TName;
        tr.appendChild(td2);
        td3.innerHTML = btn;
        tr.appendChild(td3);
       tbody.appendChild(tr);
       tbl.appendChild(tbody);
           
   });
}
{
  setTeamTbl();
    setCategory();
    addMember();
}