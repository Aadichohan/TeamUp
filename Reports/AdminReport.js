const AdminReports = (TID) =>{
    let Quiz       = getStorage('Quiz');
    let TeamList   = getStorage('TeamList');
    let AnswerList = getStorage('AnswerList');
    let UserList   = getStorage('login');
    let userId     =  getStorage('userId');
    let group      = ById('list-group');
    let _Date      = ById('_Date').value;
    let UId        = ById('UList').value;
    let sno        = 0;
        Quiz       = (Quiz) ? Quiz : [];
    // Team member list
    $('.select2-single').select2();
        TeamList   = (TeamList) ? TeamList : [];
    let Teamindex  =  TeamList.findIndex((obj => obj.id == TID && obj.ownerId == userId));
    storageMem     = (TeamList[Teamindex] !== undefined) ? TeamList[Teamindex].members : [];
    UserList.map((u,i)=>{
        let option = CElement("option");
        option.text = u.uname;
        option.value = u.id;
        let UList =  ById('UList');
        let prev = UList.querySelector('[value="' + u.id + '"]');
        if(UList && storageMem.includes(u.id) && prev == null){UList.appendChild(option)};
    });
    // End Team member list
    //  Answer List
    AnswerList = (AnswerList) ? AnswerList : [];
    let index = AnswerList.findIndex((obj => obj.TId == TID && obj.userId == UId && obj._Date == _Date));
    storageAns = (AnswerList[index] !== undefined) ? AnswerList[index].Answers : [];
    let empty      = false;
    // console.log('AnswerList ',AnswerList);

        group.innerHTML = '';
    Quiz.map((q,i)=>{
        if(q.TId == TID){
               sno++;
               QId   = q.id;
               Quest = q.Question;
               let AnsIndex = storageAns.findIndex((obj => obj.QId == QId));
               Answer = (storageAns[AnsIndex] !== undefined) ? storageAns[AnsIndex].answer : 'No Answer Found' ;
               let list =

               '<li class="list-group-item">'+
                'Q:'+sno+' | '+Quest+
               '<ul class="list-group"><li class="list-group-item">Ans : '+Answer+'</li></ul>'+
               '</li>';

                empty = true;
               group.innerHTML += list;
            }
       });
       if(!empty){

           let list = '<li class="list-group-item">No Item in List</li>';
                group.innerHTML = list;
       }
     
    // End Answer List
}


const checkAdminAnswer = (btn) =>{
  let TId      = btn.getAttribute('data-id');

  AdminReports(TId);
}