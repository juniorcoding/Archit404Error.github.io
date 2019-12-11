function fix(){
    document.getElementById("noob").style.backgroundAttachment = "local";
    console.log("Works");
    console.log("Top" + document.getElementById("noob").getBoundingClientRect().top);
}
function checkEffect(){
    if(document.getElementById("noob").getBoundingClientRect().top <= -100){
        fix();
    }
}
window.setInterval(checkEffect, 100);