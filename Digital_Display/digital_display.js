let a=prompt("Enter a number(0-9)");
if(a<=9){
    alert("You can get In");
}
else{
    alert("You can't proceed");
}

if(a==0){
    document.getElementById("hand4").style.display="none";
}
else if(a==1){
    document.getElementById("hand3").style.display="none";
    document.getElementById("hand2").style.display="none";
    document.getElementById("hand4").style.display="none";
    document.getElementById("hand5").style.display="none";
    document.getElementById("hand7").style.display="none";
}
else if(a==2){
    document.getElementById("hand2").style.display="none";
    document.getElementById("hand6").style.display="none";  
}
else if(a==3){
    document.getElementById("hand2").style.display="none";
    document.getElementById("hand5").style.display="none";
}
else if(a==4){
    document.getElementById("hand3").style.display="none";
    document.getElementById("hand5").style.display="none";
    document.getElementById("hand7").style.display="none";
}
else if(a==5){
    document.getElementById("hand1").style.display="none";
    document.getElementById("hand5").style.display="none";
}
else if(a==6){
    document.getElementById("hand3").style.display="none";
}
else if(a==7){
    document.getElementById("hand2").style.display="none";
    document.getElementById("hand4").style.display="none";
    document.getElementById("hand5").style.display="none";
    document.getElementById("hand7").style.display="none";
}
else if(a==8){

}
else if(a==9){
    document.getElementById("hand5").style.display="none";
}
