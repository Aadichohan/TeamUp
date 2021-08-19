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
        this.members  = this.Teams(memberId);
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
       var option = document.createElement("option");
       option.text = cat.catName;
       option.value = cat.id;
       console.log('option ',option);
     let setCat =  document.getElementById('setCat');
       if(setCat){setCat.appendChild(option)};
  });
 }
}
const TeamSetup = () =>{
  let owner = JSON.parse(localStorage.getItem('userId'))
  let Tname = document.getElementById('Tname').value;
  let setCat = document.getElementById('setCat').value;
  let mId = document.getElementById('addMember').value;
  const teamSet = new TeamSet(1,owner, Tname, setCat, mId);
  localStorage.setItem('TeamList', JSON.stringify(teamSet));
  console.log(teamSet);
}
{
    setCategory();
    addMember();
}