
//space invaders core

window.document.addEventListener('DOMContentLoaded', function(){
    
    const panel = document.querySelector('#panel');
    //context
    const ctx = canvas.getContext('2d');

    let colorArray = ["red","blue","green","lightblue"];
    let x = 0;
    let y = 0;

    for(var i = 0; i < 4; i ++){
        x = x + 10;
        y = y + 10;

        ctx.fillStyle = colorArray[i];
        ctx.fillRect(x, y, 100, 100);

    }

});