window.onload = function(){
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    // context.fillRect(0,0,width,height);
    
    // for(let i = 0; i<100; i++){
    //   context.beginPath();
    //   context.moveTo(Math.random() * width, Math.random() * height )
    //   context.lineTo(Math.random() * width, Math.random() * height )
    //   context.stroke();
    // }
    context.translate(0, height/2)
   context.scale(1,-1);
    for(let angle=0; angle < Math.PI * 2; angle+= .01){
      let x = angle * 200,
          y = Math.sin(angle) * 200;
      context.fillRect(x,y,5,5)
    }
  }
  
   