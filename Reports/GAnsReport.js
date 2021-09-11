const GAnsReportsList = (TID) =>{
    let Quiz       = getStorage('Quiz');
    let AnswerList = getStorage('AnswerList');
    let userId     =  getStorage('userId');
    let group      = ById('list-group');
    let _Date      = ById('_Date').value;
    let sno        = 0;
        Quiz       = (Quiz) ? Quiz : [];
        AnswerList = (AnswerList) ? AnswerList : [];
    let index = AnswerList.findIndex((obj => obj.TId == TID && obj.userId == userId && obj._Date == _Date));
    storageAns = (AnswerList[index] !== undefined) ? AnswerList[index].Answers : [];
    // console.log('AnswerList ',index);
    let empty      = false;

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
     
    
}


const checkDate = () =>{
  let TId      = ById('_Date').getAttribute('data-id');

  GAnsReportsList(TId);
}