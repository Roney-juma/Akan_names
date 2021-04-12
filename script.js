// var submit= document.getElementById("submit");




function submit(){
    var gender= document.getElementById("select").value;
    var birthString= document.getElementById("birth-date").value;
    console.log(main(birthString,gender));
}



function main(birthString,gender){
    var birth_date= new Date(birthString);
    var day=birth_date.getDay();
    var male=["Kwasi","kwodwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var female=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    
    if (gender=="Male"){
        alert("Your Akan name is: " + male[day]);
    }
    else if(gender=="Female"){
        alert("Your Akan name is: " + female[day]);
    }
    else{
        alert("Please specify your gender to get your respective Akan name!!");
    }


}