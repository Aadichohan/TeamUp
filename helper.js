const setStorage = (key, value)=>{
    localStorage.setItem(key,JSON.stringify(value));
}
const getStorage = (key)=>{
     return JSON.parse(localStorage.getItem(key));
}
const RStorage = (key)=>{
     localStorage.removeItem(key);
}

const ById = (id) =>{
return  document.getElementById(id)
}
const ByClass = (cls) =>{
return  document.getElementsByClassName(cls)
}
const CElement = (elem) =>{
return  document.createElement(elem)
}

const getSysDate =()=>{
     const today = new Date();
     getMonth =  today.getMonth()+1;
     getDate = today.getDate();
     getMonth = (getMonth.toString().length < 2) ? '0'+getMonth.toString() : getMonth;
     getDate = (getDate.toString().length < 2) ? '0'+getDate.toString() : getDate;
     // console.log('getDate ',getDate );
     return getDate+'-'+getMonth+'-'+today.getFullYear();
}