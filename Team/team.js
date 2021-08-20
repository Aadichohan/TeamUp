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
        this.members   = memberId;
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
  //  console.log('catConst ', catConst);
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
  let id = 1;
  let TeamList    = JSON.parse(localStorage.getItem('TeamList'))
  let owner       = JSON.parse(localStorage.getItem('userId'))
  let Tname       = document.getElementById('Tname').value;
  let setCat      = document.getElementById('setCat').value;
  let mIdArray    = document.getElementById('addMember').selectedOptions;
  let mIds        = Array.from(mIdArray).map(({ value }) =>Number( value));
  console.log('setCat ',mIds.length);
  if(Tname !='' && setCat != '' && mIds.length > 0){
  TeamList = (TeamList) ? TeamList : [];
  
  TeamList.map((team,i)=>{
    id = team.id + 1 ;
    TeamStorage.push(team);
  });
  const teamSet    = new TeamSet(id,owner, Tname, setCat, mIds);
//  console.log(teamSet);
 TeamStorage.push(teamSet);
 console.log('TeamStorage ',TeamStorage);
 localStorage.setItem('TeamList', JSON.stringify(TeamStorage));
   
  }
}

const setTeamTbl = () =>{
  
  let TeamList = JSON.parse(localStorage.getItem('TeamList'));
  let tbl      = document.getElementById('tblTeam');
  if(TeamList){
  TeamList.map((obj, i)=>{
  //  console.log(obj);

      let btn = document.createElement("BUTTON");
      let t   = document.createTextNode("CLICK ME");
                btn.setAttribute("style","color:red;font-size:23px");
                btn.setAttribute("data-id",obj.id);
                btn.appendChild(t);
    let tbody = document.createElement("TBODY");
    let tr = document.createElement("TR");
    let td1 = document.createElement("TD");
    let td2 = document.createElement("TD");
    let td3 = document.createElement("TD");
        td1.innerHTML = i+1;
        tr.appendChild(td1);
        td2.innerHTML = obj.TName;
        tr.appendChild(td2);
        td3.appendChild(btn);
        tr.appendChild(td3);
       tbody.appendChild(tr);
       tbl.appendChild(tbody);
           
   });
  }
}
{
  setTeamTbl();
    setCategory();
    addMember();
}