//#1

window.onload = function(){
  var count=0;
  function change(){
    document.getElementById("boundary1").className = "youlose";
    count +=1;
  }
}

//#2
var boundaries = document.querySelectorAll("div.boundary");
for (var k=0; k < boundaries.length-1; k++)
  {
    boundaries[k].onmouseover = function()
    var boundaries = document.querySelectorAll("div.boundary");
    count +=1;
    for (var k=0; k < boundaries.length -1; k++){
      boundaries[k].className += "youlose";
    }
    
  }

//#3
document.getElementById("end").onmouseover = function(){
  if(count > 0){
    alert("you lose!!!")
  }else{
    alert("you win!!!")
  }
}

//#4
document.getElementById("start").onclick = function(){
  count = 0;
  var boundaries = document.querySelectorAll("div.boundary");
  count +=1;
  for (var k = 0; k < boundaries.length - 1; k++){
    boundaries[k].className = "boundary";
  }
}

//#5
document.getElementById("status").innerHTML = "you lose!!!"

//#6
var x = event.clientX;
var y = event.clientY;
var md = document.getElementById("md");
if (x > md.offsetLeft && x < md.offsetLeft + md.offsetWidth && y > md.offsetTop && y < md.offsetTop + md.offsetHeight){
  var pos = [event.clientX, event.clientY]
  
}    


