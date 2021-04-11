var submit=document.getElementById("submit");
var gender=document.getElementById("selec").value;
var birth_date=document.getElementById("birth-date").value;
var male=["Kwasi","kwodwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var female=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];


submit.onclick= function (){
    console.log(main());
}



function main(){
    var cc=parseInt(birth_date.substr(4,5));
    var mm=parseInt(birth_date.substr(0,1));
    var yy=parseInt(birth_date.substr(6,7));
    var dd=parseInt(birth_date.substr(2,3));
    var d=parseInt((((cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd)% 7);
    var day=Math.floor(d);
    
    if (gender==="Male"){
        alert("Your Akan name is: " + male[day]);
    }
    else if(gender==="Female"){
        alert("Your Akan name is: " + female[day]);
    }
    else{
        alert("Please specify your gender to get your respective Akan name!!")
    }


}