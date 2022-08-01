
let payForYears="";

for (let i=20; i<=85; i++) payForYears += '<option>'+i+'</option>';
    document.querySelector("[name=payFor]").innerHTML+= payForYears;

function val(){
  paymentYears=document.getElementById("payFor").value;

  let termYears="";
  for (let i=paymentYears; i<=85; i++) termYears += '<option>'+i+'</option>';
  document.querySelector("[name=term]").innerHTML= termYears;

};

let formsubmit=document.getElementById("formsubmmit");
formsubmit.addEventListener("click",function(event){
  event.preventDefault()
});
  // e.preventDefault(),


