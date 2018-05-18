


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





var audio = document.getElementsByTagName('audio');
var musicPlay = document.getElementsByClassName('jsPlay');
var arr = ["./muisc/tan.mp3","./muisc/luo.mp3"]
var name = []
var mFlag = 1, s = -123 , ss =-123;
for(let i = 0; i < musicPlay.length; i++){
    musicPlay[i].onclick = function(){
        s = i;
        if(mFlag){
            if(ss !== s){
                audio[0].src = arr[i];
                ss = s;
            }
            audio[0].play();
            musicPlay[s].classList.toggle("play");
            musicPlay[s].classList.toggle("pause");
            mFlag = 0;
        }else{
            audio[0].pause();
            if(ss !== s){
                if(s === 1){
                    musicPlay[s-1].classList.toggle("play");
                    musicPlay[s-1].classList.toggle("pause");
                }else{
                    musicPlay[s+1].classList.toggle("play");
                    musicPlay[s+1].classList.toggle("pause");
                }
            }else{
                musicPlay[s].classList.toggle("play");
                musicPlay[s].classList.toggle("pause");
            }
            mFlag = 1;
        }
    }
}









