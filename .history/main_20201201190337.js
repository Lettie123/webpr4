var val = document.getElementById("valR").value;
document.getElementById("img").src = ".png";
  function showVal(newVal){
    if(newVal >90 && newVal < 100)
    document.getElementById("img").src = "img/a01.png";
     else if(newVal >= 80 && newVal < 90)
    document.getElementById("img").src = "img/a02.png";
     else if(newVal >= 70 && newVal < 80)
    document.getElementById("img").src = "img/a03.png";
     else if(newVal >= 60 && newVal < 70)
    document.getElementById("img").src = "img/a04.png";
     else if(newVal >= 50 && newVal < 60)
    document.getElementById("img").src = "img/a05.png";
     else if(newVal >= 40 && newVal < 50)
    document.getElementById("img").src = "img/a06.png";
     else if(newVal >= 30 && newVal < 40)
    document.getElementById("img").src = "img/a07.png";
     else if(newVal >= 20 && newVal < 30)
    document.getElementById("img").src = "img/a08.png";
    else if(newVal >= 10 && newVal < 20)
    document.getElementById("img").src = "img/a09.png";
    else if(newVal >= 0 && newVal < 10)
    document.getElementById("img").src = "img/a10.png";

}

var val = document.getElementById("valR2").value;
document.getElementById("img2").src = "img/00.png";
  function showVal2(newVal){
     if(newVal >0 && newVal < 10)
    document.getElementById("img2").src = "img/b01.png";
     else if(newVal >= 10 && newVal < 20)
    document.getElementById("img2").src = "img/b02.png";
    else if(newVal >= 20 && newVal < 30)
    document.getElementById("img2").src = "img/b03.png";
    else if(newVal >= 30 && newVal < 40)
    document.getElementById("img2").src = "img/b04.png";
    else if(newVal >= 40 && newVal < 50)
    document.getElementById("img2").src = "img/b05.png";
    else if(newVal >= 50 && newVal < 60)
    document.getElementById("img2").src = "img/b06.png";
    else if(newVal >= 60 && newVal < 70)
    document.getElementById("img2").src = "img/b07.png";
    else if(newVal >= 70 && newVal < 80)
    document.getElementById("img2").src = "img/b08.png";
    else if(newVal >= 80 && newVal < 90)
    document.getElementById("img2").src = "img/b09.png";
    else if(newVal >= 90 && newVal < 100)
    document.getElementById("img2").src = "img/b10.png";

}

function next(){
    window.location.href="02.html";
}