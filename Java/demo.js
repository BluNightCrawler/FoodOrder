
const Txtinput = document.getElementById("display");
const visible = document.getElementById("hidden");
const delivery = document.getElementById("Deleivery");
const fname = document.getElementById("fName");
const lname = document.getElementById("lName");
const tel = document.getElementById("Tel");
const Store = document.getElementById("Store");
const Address = document.getElementById("Address");
const ZipCode = document.getElementById("Zipcode");
const Size = document.getElementById("Size");





const btn = document.getElementById("btn-click-me");


function myFunction(){
    document.getElementById("hidden").style.visibility = "visible";
    //document.getElementById("hidden").innerText = "this works";
    alert();
}           

function myFunction2(){
    document.getElementById("hidden").style.visibility = "hidden"
}
function hidden(){
    document.onload().style.visibility = "hidden"
} 



btn.addEventListener("click", function(){

    Txtinput.innerText = "Name: "+fname.value + lname.value + 
    "\nTelephone: "+tel.value+"\n Store You chosed:"+ Store.value
    "Address:" +Address.value +"ZipCode:"+ ZipCode.value ;

    



})

