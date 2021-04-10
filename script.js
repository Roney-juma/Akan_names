function inputs(){
    var gender=document.getElementById("gender").value;
    var birth_date=document.getElementById("birth-date").value;

    var male=["Kwasi","kwodwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var female=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

    var cc=parseInt(birth_date.substr(7,8));
    var mm=parseInt(birth_date.substr(0,1));
    var yy=parseInt(birth_date.substr(9,10));
    var dd=parseInt(birth_date.substr(3,4));
    var d=parseInt((((cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd)% 7)
    
    if (gender==="Male"){
        alert("Your Akan name is: " + male[d])
    }
    else if(gender==="Female"){
        alert("Your Akan name is: " + female[d])
    }
    else{
        alert("Please specify your gender to be given the name")
    }


}