window.onload = function(){
    let canvas = document.getElementById("canvas"),
        context = canvas.getContext('2d');
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        p = new particle(100,100,3,Math.PI /6);

        

        update();

        function update(){
            context.clearRect(0,0,width,height);
            
            p.update();
            context.beginPath();
            context.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 2, false);
            context.fill();
            requestAnimationFrame(update);
        }
}

    