
//space invaders core

window.document.addEventListener('DOMContentLoaded', function(){
    
    const panel = document.querySelector('#panel');
    //context
    const ctx = canvas.getContext('2d');

    let width = 1500,
        height = 750,
        
        shipX = (width / 2) - 50,
        shipY = height - 80,
        shipH = 75,
        shipW = 50,
        
        alienX,
        alienY,
        alienH,
        alienW;
        

    function Clear(){
        ctx.clearRect(0, 0, width, height);
    }
    function Ship(){
        ctx.fillStyle = 'blue';
        ctx.fillRect(shipX, shipY, shipW, shipH);
    }
    function Start(){
        Clear();
        Ship();
        Move();
    }
    
    function logKey(e) {
        //left 37 ArrowLeft
        //up 38 ArrowUp
        //right 39 ArrowRight
        //down 40 ArrowDown
        console.log('event '+e.code);
    }
    function Move(){
        window.document.addEventListener('keydown', logKey);
    }

    function Game(){
        setInterval(Start, 500);
    }
    Game();
});