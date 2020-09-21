

function changeColor(){
    let red = document.getElementById('rangeRed').value;
    let green = document.getElementById('rangeGreen').value;
    let blue = document.getElementById('rangeBlue').value;
    let color = 'rgb('+ red + ',' + green + ',' + blue + ')';
    document.body.style.backgroundColor = color;
    document.getElementById('colorOutput').innerHTML = ':'+ color;
}

document.getElementById('rangeRed').addEventListener('input',changeColor);
document.getElementById('rangeGreen').addEventListener('input',changeColor);
document.getElementById('rangeBlue').addEventListener('input',changeColor);


let slider1 =document.getElementById("slider1");
let root = document.documentElement;


slider1.addEventListener("input", (e) => {
root.style.setProperty("--radius", e.target.value + "%");
});


let slider2=document.getElementById('slider2');
slider2.addEventListener("input",(e)=>{
root.style.setProperty("--width", e.target.value+"px");
});


update = () => {
    let hsl = `hsl(${mySlider1.value||0}, ${mySlider2.value||0}%,${mySlider3.value||0}%)`;
    rect.style.backgroundColor = hsl;
  };
  
  mySlider1.addEventListener("input", update);
  mySlider2.addEventListener("input", update);
  mySlider3.addEventListener("input", update);
  update();


var balls = document.getElementsByClassName("ball");
document.onmousemove=function(){
    var x= event.clientX *100/window.innerWidth+"%";
    var y= event.clientY *100/window.innerHeight+"%";
    
    for(var i=0;i<2;i++){
        balls[i].style.left= x;
        balls[i].style.top= y;
        balls[i].style.transform="translate(-"+x+",-"+y+")";
    }
}

//
// var canvas = document.getElementById("imgCanvas");
// var context = canvas.getContext("2d");

// function draw(e) {
//     var pos = getMousePos(canvas, e);
//     posx = pos.x;
//     posy = pos.y;
//     context.fillStyle = "#000000";
//     context.beginPath();
//     context.arc(posx, posy, 50, 0, 2*Math.PI);
//     context.fill();
// }

// function getMousePos(canvas, evt) {
//     var rect = canvas.getBoundingClientRect();
//     return {
//       x: evt.clientX - rect.left,
//       y: evt.clientY - rect.top
//     };
// }