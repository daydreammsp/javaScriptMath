window.onload = function(){
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let centerX = width /2,
        centerY = height /2,
        radius = 200,
        xRadius = 200,
        yRadius = 400,
        angle = 0,
        numObjects = 20,
        slice = Math.PI * 2 / numObjects,
        xAngle = 0,
        yAngle = 0,
        xSpeed =.1, 
        ySpeed = .131,
        x, y;
    for(var i = 0; i < numObjects; i +=1){
    angle = i * slice;
    x = centerX + Math.cos(angle) * radius;
    y = centerY + Math.sin(angle) * radius;
    context.beginPath();
    context.arc(x,y,10,0,Math.PI * 2, false);
    context.fill();
    }
    // render();

    // function render(){
    //     context.clearRect(0,0,width,height);
    //     x = centerX + Math.cos(xAngle) * xRadius;
    //     y = centerY + Math.sin(yAngle) * yRadius;
    //     context.beginPath();
    //     context.arc(x,y,10,0,Math.PI * 2, false);
    //     context.fill();

    //     xAngle += xSpeed;
    //     yAngle += ySpeed;
    //     requestAnimationFrame(render);

    // }

}