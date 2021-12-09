canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
roverHeight=100;
roverWidth=100;
rover_x=10;
rover_y=10;
siImages=["https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044630080503568I01_DXXX.jpg",
"https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631280503688E0B_DXXX.jpg",
"https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG",
"mars.jpg"];
var randomNumber=Math.floor(Math.random()*4);
background_image=siImages[randomNumber];
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
function up() {
if (rover_y>=0){
    rover_y-=10;
    uploadBackground();
    uploadRover();
}
}

function down(){
    if (rover_y<=500){
        rover_y+=10
        uploadBackground()
        uploadRover()
    }
}
function left(){
    if (rover_x>=0){
        rover_x-=10;
        uploadBackground();
        uploadRover();
        }
}

function right(){
    if (rover_x<=700){
        rover_x+=10;
        uploadBackground();
        uploadRover();
    }
}