


var contBtn = document.querySelectorAll('.tan-down ul li button');
var main = document.getElementsByClassName('main');
var left = document.getElementsByClassName('left');
var right = document.getElementsByClassName('right');
var content = document.getElementsByClassName('content');
var leftBtn = document.querySelector('.main .left .leftDown .back button');
var rightBtn = document.querySelector('.main .right .leftDown .back button');


var flag = 1;


contBtn[0].onclick = function(){
    flag = 1;
    left[0].style.animation = "leftShow 2s";
    left[0].style.animationFillMode = "forwards";
    content[0].style.animation ="rightHidden 2s";
    content[0].style.animationFillMode = "forwards";
}
contBtn[1].onclick = function(){
    flag = 2;
    right[0].style.animation = "rightShow 2s";
    right[0].style.animationFillMode = "forwards";
    content[0].style.animation ="leftHidden 2s";
    content[0].style.animationFillMode = "forwards";
}
leftBtn.onclick = function(){
    left[0].style.animation = "leftHidden 2s";
    left[0].style.animationFillMode = "forwards";
    if(flag === 1){
        content[0].style.animation ="rightShow 2s";
        content[0].style.animationFillMode = "forwards";
    }
    
}
rightBtn.onclick = function(){
    right[0].style.animation = "rightHidden 2s";
    right[0].style.animationFillMode = "forwards";
    if(flag === 2){
        content[0].style.animation ="leftShow 2s";
        content[0].style.animationFillMode = "forwards";
    }
}













































































