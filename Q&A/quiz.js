class Question {
  constructor(id, TId, Question, OwnerId){
    this.id       = id,
    this.TId      = TId,
    this.OwnerId  = OwnerId,
    this.Question = Question
  }
}
const addQestion = () =>{
    $('#questionModel').modal({
        backdrop: 'static',
        keyboard: false
    });
    let noQ      = ById('noQ');
    let noQV     = noQ.value;
    let inputBox = ById('inputBox');
    for(let i = 1; i <= noQV; i++){
        let input = '<div class="form-group"><input type="text" class="form-control ques" id="que" placeholder="Questions '+i+'"></div>';
     inputBox.innerHTML += input;
    }
    
}

const closeQuestionModel = () =>{
    // console.log('gg');
    let inputBox        = ById('inputBox');
    inputBox.innerHTML  = '';
}

const saveQuestion = (btn, cls) =>{
  let TId        = btn.getAttribute('data-id');
  let userId     = getStorage('userId');
  let Quiz       = getStorage('Quiz');
  let inputs     = ByClass(cls);
  let id         = 1;
  let arr        = [];
  let questions;
  Quiz = (Quiz) ? Quiz : [];
    for(i = 0; i < inputs.length; i++){
        questions        = inputs[i].value;
        Quiz.map((q,i)=>{
        id  = q.id + 1;      
       });
    QuesSet          = new Question(id, TId,questions,userId);
    Quiz.push(QuesSet);
    setStorage('Quiz', Quiz);
}
ById("buttonDismiss").click();
// console.log(getStorage('Quiz')); 
setQuesionList(TId);
}
const setQuesionList = (TID) =>{
    let Quiz       = getStorage('Quiz');
    let group      = ById('list-group');
    let sno        = 0;
        Quiz       = (Quiz) ? Quiz : [];
    let empty      = false;
        // group.innerHTML = '';
        // if(!Quiz){
        //     let list = '<li class="list-group-item">No Item in List</li>';
        //     group.innerHTML = list;
        // }
        group.innerHTML = '';
    Quiz.map((q,i)=>{
        if(q.TId == TID){
               sno++;
               let list = '<li class="list-group-item">Q:'+sno+'  '+q.Question+'</li>';
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