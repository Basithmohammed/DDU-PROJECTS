let btn=document.getElementById("btn");
let light=document.querySelector("#light");

function toggleBtn(){
    btn.classList.toggle("active");

    if(light.classList.toggle("on")){
        document.getElementById("ghost").style.visibility="visible";
    }
    else{
        document.getElementById("ghost").style.visibility="hidden";
    }
    // light.classList.toggle("off");
    // if("active"){
        
    // }
    // else{
    //     
    // }


//     var image = document.getElementById('ghost');
//     if (image.src.match("bulbon")) {
//         image.src = "C:/Users/USER/Downloads/ghost img.jpg";
//     } else {
//        image.src = "C:/Users/USER/Downloads/light (2).jpeg";
//    }
}
