canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
roverHeight=100;
roverWidth=100;
rover_x=10;
rover_y=10;
background_image="mars.jpg";
rover_image="rover.png";

function add(){
    background_image_tag=new Image();
    background_image_tag.onload=uploadBackground;
    background_image_tag.src=background_image;
    
    rover_imageTag=new Image();
    rover_imageTag.onload=uploadRover;
    rover_imageTag.src=rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_image_tag,0,0,canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imageTag,rover_x,rover_y,roverWidth,roverHeight);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    if(keypressed=='38'){
        up();
    }
    if(keypressed=='40'){
        down();
    }
    if(keypressed=='37'){
        left();
    }
    if(keypressed=='39'){
        right();
    }
}