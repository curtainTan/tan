function progress(){
    let elProgress = document.getElementById("progress")
    let text = document.getElementById("countText")
    let counter = 5;
    let progressLength = 25;
    let timer = setInterval( ()=>{
        if( progressLength == 500 && counter == 100 ){
            clearInterval( timer )
        } else {
            progressLength += 5;
            counter += 1;
            elProgress.style.width = progressLength + "px"
            text.innerHTML = counter + "%"
        }
    }, 50 )
}

progress()
