class TeamCat{
    constructor(id, catName){
        this.id        = id,
        this.catName   = catName,
        this.isEnable  = 1 
    }
  }
  let member = [];
class TeamSet{
    constructor( id, ownerId, TName, catId,memberId){
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
class TeamGet{
    constructor(TId, TName, ownerName, memberName){
        this.TId         = TId,
        this.TName       = TName,
        this.ownerName   = ownerName,
        this.memberName  = memberName;
    }
  }
  const CatSetup = () => {
    
    let CatStorage = [];
    let id = 1;
    var CatName = document.getElementById('catName');
    var CatNameVal = CatName.value;
    let CatList = localStorage.getItem('CatList');
    CatList = (CatList) ? JSON.parse(CatList) : [];
    let Exsist = false;

    CatList.map((Cat,i)=>{
      id = Cat.id + 1 ;
        if(Cat.catName.toLowerCase() == CatNameVal.toLowerCase() ){Exsist = true;}  
  });
  if(!Exsist && CatNameVal!==''){
    const catConst = new TeamCat(id, CatNameVal);
    CatList.push(catConst);
    setStorage('CatList',CatList);
    CatName.value = '';
  }   

  }
  

const setMember =(getLogin, userId, set = true) =>{
  getLogin.map((login,i)=>{
    if(set && (login.roleId === 1 || login.id === userId)){
      return false;
    }
    var option = document.createElement("option");
    option.text = login.email;
    option.value = login.id;
    // console.log('option ',option);
    let addMember =  document.getElementById('addMember');
    // console.log('getLogin ',addMember);
    if(addMember){addMember.appendChild(option)};
  });
}
  const addMember = () => {
    $('#TeamModal').modal({backdrop: 'static',keyboard: false});
    ById('save').setAttribute('onclick','TeamSetup();');
  setCategory();
  let getLogin =   JSON.parse(localStorage.getItem('login'));
  let userId   =   JSON.parse(localStorage.getItem('userId'));
  if(getLogin !== null){
    setMember(getLogin, userId);
    }
    $('.select2-single').select2();
    $('.select2-multiple').select2();
}
const setCategory = () => {
    let getCat =   JSON.parse(localStorage.getItem('CatList'));
        // console.log(getCat);
    if(getCat !== null){
        getCat.map((cat,i)=>{
       let option = document.createElement("option");
       option.text = cat.catName;
       option.value = cat.id;
      //  console.log('option ',option);
     let setCat =  document.getElementById('setCat');
       if(setCat){setCat.appendChild(option)};
  });
 }
}
const TeamSetup = (thiss) =>{
  let TeamStorage = [];
  let id = 1;
  let TeamList    = JSON.parse(localStorage.getItem('TeamList'))
  let owner       = JSON.parse(localStorage.getItem('userId'))
  let Tname       = document.getElementById('Tname');
  let setCat      = document.getElementById('setCat');
  let member      = document.getElementById('addMember');
  let mIdArray    = member.selectedOptions;
  let mIds        = Array.from(mIdArray).map(({ value }) =>Number( value));
  let Tnamev      = Tname.value;
  let setCatv     = setCat.value;
  let Exsist = false;
  if(Tnamev !='' && setCatv != '' && mIds.length > 0){
    // console.log('setCat ',mIds.length);
  TeamList = (TeamList) ? TeamList : [];
  
  TeamList.map((team,i)=>{
    id = team.id + 1 ;
    if(team.TName.toLowerCase() == Tnamev.toLowerCase() ){Exsist = true;}  
  });
  if(!Exsist){
  const teamSet    = new TeamSet(id,owner, Tnamev, setCatv, mIds);
    TeamList.push(teamSet);
    setStorage('TeamList', TeamList);
  }
}
document.getElementById("buttonDismiss").click();
Tname.value   ='';
closeModal();
myTeam();
}
const EditTeamSetup = (TId) =>{
  TeamList = getStorage('TeamList');
  var index = TeamList.findIndex((obj => obj.id == TId));
  // console.log('id ',TeamList[index]);
     let Tname       = document.getElementById('Tname').value;
     let setCat      = document.getElementById('setCat').value;
     let member      = document.getElementById('addMember');
     let mIdArray    = member.selectedOptions;
     let mIds        = Array.from(mIdArray).map(({ value }) =>Number( value));

  TeamList[index] = Object.assign({}, TeamList[index], { members: mIds});
  // console.log('TeamList ',TeamList);
  if(Tname !='' && setCat != '' && mIds.length > 0){
    setStorage('TeamList',TeamList);
   
}
document.getElementById("buttonDismiss").click();
Tname.value   ='';
closeModal();
myTeam();
}

const setTeamTbl = () =>{
  
  let TeamList = JSON.parse(localStorage.getItem('TeamList'));
  let login    = JSON.parse(localStorage.getItem('login'));
  let userId   = getStorage('userId');
  let tbl      = document.getElementById('tblTeam');
  let ownerName = '';
  let tRs = [];
  if(TeamList){
    TeamList.map((obj, i)=>{
      let memberName = [];
      var exsist = (obj.ownerId == userId) ? true : false;
      if(exsist){
        if(exsist){
          let ownerindex = login.findIndex((obj2 => obj2.id == obj.ownerId));
          ownerName = login[ownerindex].uname;
          obj.members.map((mem,i)=>{
            let mindex = login.findIndex((obj3 => obj3.id == mem));
            if(!memberName.includes(login[mindex].uname)){
              if(i<2){
                
                memberName.push(login[mindex].uname)
              }
              else{
                memberName.push('...')
              }
            };
          });
          // console.log('<br> mem ',mems);
            tRs.push(new TeamGet(obj.id,obj.TName, ownerName,  memberName.join(",")));
           }
        // console.log('Row ',obj);
      }
    });

    for (tr of tRs) {
      // console.log('tr ',tr);
      let row = '<td>'+tr.TName+'</td><td>'+tr.ownerName+'</td><td>'+tr.memberName+
      '</td>';
      let row_action = '<td><a href="javascript:(0);" class="btn-danger"  data-id="'
      +tr.TId+'" onclick="teamDetail(this);" data-backdrop="static" data-keyboard="false"><i class="far fa-edit"></i></a>'+
      '&nbsp;&nbsp;<a href="javascript:(0);" class="btn-info"  data-id="'
      +tr.TId+'"  data-tname="'+tr.TName+'" onclick="viewQuestion(this);" ><i class="far fa-question-circle"></i></a>'+
      '&nbsp;&nbsp;<a href="javascript:(0);" class="btn-info"  data-id="'
      +tr.TId+'"  data-tname="'+tr.TName+'" onclick="viewAdminReport(this);" ><i class="fa fa-history"></i></a>'+
      '</td>';
      let tbody = document.getElementById('tbody');
      let data = tbody.insertRow(-1).innerHTML = row+row_action;
    }
    // tbl.append(data);
    // $('#tblTeam').DataTable();
  }
}


const teamDetail = (btn)=>{

  $('#TeamModal').modal({
    backdrop: 'static',
    keyboard: false
})
   setCategory();
  // console.log(btn);
  TId      = btn.getAttribute('data-id');
  TeamList = getStorage('TeamList');
  login    = getStorage('login');
  userId    = getStorage('userId');
  var index = TeamList.findIndex((obj => obj.id == TId));
  ById('Tname').value = TeamList[index].TName;
  let setCat  = ById('setCat');
  setCat.value = TeamList[index].catId;
  $("#Title").text('Team Details');
  $('#TeamModal').modal('show');
  $('.select2-multiple').select2();
  setMember(login, userId);
  $('#addMember').val(TeamList[index].members).trigger('change');  
  ById('save').setAttribute('onclick','EditTeamSetup(TId);');
  ById('save').setAttribute('data-id',TId);
}


const closeModal = ()=>{
  ById('setCat').innerHTML ='<option></option>';
  ById('addMember').innerHTML ='<option></option>';
}

const setGroupTbl = () =>{
  
  let TeamList = getStorage('TeamList');
  let login    = getStorage('login');
  let userId    = getStorage('userId');
  let tbl      = document.getElementById('tblGroup');
  let ownerName = '';
  let tRs = [];
  let group = [];
  // if(TeamList){
    TeamList.map((obj, i)=>{
      let memberName = [];
      // var index = obj.members.findIndex((obj2 => console.log('obj', obj2)));
      var exsist = obj.members.includes(userId);
      if(exsist){
        let ownerindex = login.findIndex((obj2 => obj2.id == obj.ownerId));
        ownerName = login[ownerindex].uname;
        obj.members.map((mem,i)=>{
          let mindex = login.findIndex((obj3 => obj3.id == mem));
          if(!memberName.includes(login[mindex].uname)){
            if(i<2){
                
              memberName.push(login[mindex].uname)
            }
            else{
              memberName.push('...')
            }
          };
        });
        // console.log('<br> mem ',mems);
          tRs.push(new TeamGet(obj.id,obj.TName, ownerName,  memberName.join(",")));
         }
    });
  // console.log('mem ',tRs);

    for (tr of tRs) {
      // console.log('tr ',tr);
      let row = '<td>'+tr.TName+'</td><td>'+tr.ownerName+'</td><td>'+tr.memberName+'</td>';
      let row_action = '<td><a href="javascript:(0);" class="btn-warning"  data-id="'
      +tr.TId+'" onclick="GroupDetail(this);" data-backdrop="static" data-keyboard="false"><i class="fa fa-search"></i></a>&nbsp;&nbsp;<a href="javascript:(0);" class="btn-info"  data-id="'
      +tr.TId+'"  data-tname="'+tr.TName+'" onclick="viewAnswer(this);" ><i class="fa fa-reply"></i></a>'+
      '&nbsp;&nbsp;<a href="javascript:(0);" class="btn-info"  data-id="'
      +tr.TId+'"  data-tname="'+tr.TName+'" onclick="viewGAnswerReport(this);" ><i class="fa fa-history"></i></a>'+
      '</td>';
      // '</td><td><a href="javascript:(0);" class="btn btn-info"  data-id="'
      // +tr.TId+'" onclick="GroupDetail(this);" data-backdrop="static" data-keyboard="false">Details</a></td>';
      let tbody = document.getElementById('grupeTbody');
       tbody.insertRow(-1).innerHTML = row+row_action;
    }
    // tbl.append(data);
    $('#tblGroup').DataTable();
  
}
const GroupDetail = (btn)=>{
  $('#GroupModal').modal({
    backdrop: 'static',
    keyboard: false
})
   setCategory();
  // console.log(btn);
  TId      = btn.getAttribute('data-id');
  TeamList = getStorage('TeamList');
  login    = getStorage('login');
  userId    = getStorage('userId');
  var index = TeamList.findIndex((obj => obj.id == TId));
  ById('Tname').value = TeamList[index].TName;
  let setCat  = ById('setCat');
  setCat.value = TeamList[index].catId;
  $("#Title").text('Team Details');
  $('#GroupModal').modal('show');
  $('.select2-multiple').select2();
  setMember(login, userId, false);
  $('#addMember').val(TeamList[index].members).trigger('change');

}

{
  // setTeamTbl();
    setCategory();
    // addMember();
}