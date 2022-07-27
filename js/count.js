count = 0;
 

function inc(){
    count++;
    document.getElementById("span").innerHTML=count;
}
function dec(){
    count--;
    document.getElementById("span").innerHTML=count;
}
function reset(){
    count = 0;
    document.getElementById("span").innerHTML=count;
}
