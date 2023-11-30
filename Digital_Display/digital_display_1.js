let a=parseInt( prompt("Enter how many days remaining(0-10)"));
if(a<=10){
    alert("You can get In");
}
else{
    alert("You can't proceed");
}

if(a==0){
    document.getElementById("hand4").style.display="none";
    document.getElementById("hand10").style.display="none";
}
else if(a==1){
    document.getElementById("hand4").style.display="none";
    document.getElementById("hand11").style.display="none";
    document.getElementById("hand8").style.display="none";
    document.getElementById("hand10").style.display="none";
    document.getElementById("hand12").style.display="none";
    document.getElementById("hand14").style.display="none";
}
else if(a==2){
    document.getElementById("hand4").style.display="none";
    document.getElementById("hand8").style.display="none";
    document.getElementById("hand13").style.display="none";
     
}
else if(a==3){
    document.getElementById("hand4").style.display="none";
    document.getElementById("hand8").style.display="none";
    document.getElementById("hand12").style.display="none";
}
else if(a==4){
    document.getElementById("hand4").style.display="none";
    document.getElementById("hand11").style.display="none";
    document.getElementById("hand12").style.display="none";
    document.getElementById("hand14").style.display="none";
}
else if(a==5){
    document.getElementById("hand4").style.display="none";
    document.getElementById("hand9").style.display="none";
    document.getElementById("hand12").style.display="none";
}
else if(a==6){
    document.getElementById("hand4").style.display="none";
    document.getElementById("hand9").style.display="none";
}
else if(a==7){
    document.getElementById("hand8").style.display="none";
    document.getElementById("hand4").style.display="none";
    document.getElementById("hand10").style.display="none";
    document.getElementById("hand12").style.display="none";
    document.getElementById("hand14").style.display="none";
}
else if(a==8){
    document.getElementById("hand4").style.display="none";

}
else if(a==9){
    document.getElementById("hand4").style.display="none";
    document.getElementById("hand12").style.display="none";
}
else if(a==10){
    document.getElementById("hand3").style.display="none";
    document.getElementById("hand2").style.display="none";
    document.getElementById("hand4").style.display="none";
    document.getElementById("hand5").style.display="none";
    document.getElementById("hand7").style.display="none";
    document.getElementById("hand10").style.display="none";
}
