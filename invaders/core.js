
//space invaders core

window.document.addEventListener('DOMContentLoaded', function(){

    const panel = document.querySelector('#panel');
    //context
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'blue';
    ctx.fillRect(10, 10, 100, 100);

    ctx.fillStyle = 'red';
    ctx.fillRect(15, 15, 100, 100);

    ctx.fillStyle = 'green';
    ctx.fillRect(20, 20, 100, 100);

    ctx.fillStyle = 'lightblue';
    ctx.fillRect(25, 25, 100, 100);

});