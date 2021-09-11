class setAnswer {
    constructor(TId, OwnerId, userId,_Date, Answers){
      this.TId     = TId,
      this.OwnerId = OwnerId,
      this.userId  = userId,
      this._Date   = _Date,
      this.Answers  = Answers
    }
}

const QuesionList = (TID) =>{
    let Quiz       = getStorage('Quiz');
    let group      = ById('list-group');
    let sno        = 0;
        Quiz       = (Quiz) ? Quiz : [];
    let empty      = false;

        group.innerHTML = '';
    Quiz.map((q,i)=>{
        if(q.TId == TID){
               sno++;
               QId   = q.id;
               Quest = q.Question;
               let list =
                // '<div class="row">'+
               '<a href="javascript:(0);" data-toggle="modal"'+
               'data-target="#AnswerModel" data-id="'+QId+'" data-teamId="'+TID+'"  data-quest="'+Quest+'" onclick="saveAnsPopup('+QId+', '+TID+',this)" class="btn" style="text-align:left">'+
               '<li class="list-group-item">'+
                'Q:'+sno+' | '+Quest+
               '</li></a>';
            //    +'</div>';
            //    console.log(q);
            empty = true;
               group.innerHTML += list;
            }
       });
       if(!empty){

           let list = '<li class="list-group-item">No Item in List</li>';
                group.innerHTML = list;
       }
       
}

const saveAnsPopup = (QId, TId, btn) =>{
  let Quest       = btn.getAttribute('data-quest');
//   let userId      =  getStorage('userId');
  let quiz        =  ById('quiz');
  let QIdV        =  ById('QId');
  let TIdV        =  ById('TId');
  // let _Date      =  ById('_Date');

   quiz.innerText = 'Q : '+Quest;
   QIdV.value     = QId;
   TIdV.value     = TId;
 //  _Date.value = getSysDate();
//    userIdV.value  = userId;
// console.log(_date);

// $('#_Date .input-group.date').datepicker({
//     format: 'dd/mm/yyyy',
//     todayBtn: 'linked',
//     todayHighlight: true,
//     autoclose: true,        
//   });

}
const saveAns = () =>{
//   let Quest       = btn.getAttribute('data-quest');
  let TId         =  Number(ById('TId').value);
  let userId      =  getStorage('userId');
  let answerv      =  ById('answer');
  let QIdV        = Number(ById('QId').value);
  let _Date       = getSysDate();
  let AnswerList  =  getStorage('AnswerList');
let _Answers = [];
// let AnswerList = [];
AnswerList = (AnswerList) ? AnswerList : [];
AnswerListlen = AnswerList.length;
let index = AnswerList.findIndex((obj => obj.TId == TId && obj.userId == userId && obj._Date == _Date));
index = (index > -1 ) ? index : AnswerListlen;

storageAns = ( AnswerList[index] !== undefined ) ? AnswerList[index].Answers : [];

let AnsIndex = storageAns.findIndex((obj => obj.QId == QIdV));
ansLen = storageAns.length; 
AnsIndex = (ansLen > 0 ) ? ((AnsIndex  > -1 ) ? AnsIndex  : ansLen ) : 0;
// console.log(storageAns.length, 'AnswerList');
// console.log(AnsIndex, 'AnsIndex');
  storageAns[AnsIndex] = {QId : QIdV, answer: answerv.value};

  ////  _answers = storageAns.push(Object.assign({}, _Answers[0], {QId : QIdV, answer: answerv.value}));
 Answerobj = new setAnswer(TId, 2, userId, _Date, storageAns );
 AnswerList[index] = Answerobj;

  setStorage('AnswerList', AnswerList);
  closeAnsModel();
  ById("buttonDismiss").click();
console.log(getStorage('AnswerList'));
console.log(AnswerList);


}

const closeAnsModel = () =>{
  // console.log('gg');
  let input        = ById('answer');
 
  input.value  = '';
}

