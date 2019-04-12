
//space invaders core

window.document.addEventListener('DOMContentLoaded', function(){
    
    const panel = document.querySelector('#panel');
    //context
    const ctx = canvas.getContext('2d');

    let colorArray = ["red","blue","green","lightblue"],
        colorArrayLenght = colorArray.length,
        x = 0,
        y = 0,
        i = 0,
        sqWidth = 50,
        sqHight = 50;

    setInterval(function(){
        
        ctx.clearRect(x, y, sqHight, sqWidth);
        x = x + 5;
        y = x + 5;


        ctx.fillStyle = colorArray[i % colorArrayLenght];
        ctx.fillRect(x, y, sqHight, sqWidth);
        
        if ( i == colorArrayLenght){
            ctx.clearRect(x, y, sqHight, sqWidth);
            i = 0;
            x = 0;
            y = 0;
        } else {
            i ++;
        }

    }, 1000);

    /*
    for(var i = 0; i < 4; i ++){
        x = x + 10;
        y = y + 10;

        ctx.fillStyle = colorArray[i];
        ctx.fillRect(x, y, 100, 100);
        ctx.clearRect(x, y, 100, 100);

    }
    */

});