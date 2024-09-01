const btnE1=document.getElementById('btn');
const birthdayE1=document.getElementById('birthday');
const resultE1=document.getElementById('result');

btnE1.addEventListener('click',()=>{
    const birthdayValue=birthdayE1.value;
    if(birthdayValue===""){
        alert("Please enter your birthday");
    }else{
        const age=getAge(birthdayValue);
        resultE1.innerText=`Your age is ${age}`
    }
})

function getAge(birthdayValue){
    const currentDate=new Date();
    const birthDate= new Date(birthdayValue);
    let age=currentDate.getFullYear()-birthDate.getFullYear();
    let month=currentDate.getMonth()-birthDate.getMonth();
    if(month<0 || month===0 && currentDate.getDay()<birthDate.getDay()){
        age--;
    }
    return age;
}