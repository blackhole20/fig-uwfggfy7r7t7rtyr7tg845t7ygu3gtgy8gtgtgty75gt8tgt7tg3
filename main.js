var img="";

status="";

function preload(){
img=loadImage("dog_cat.jpg");
}

function setup(){
canvas=createCanvas(640,420);
canvas.center();
objectdetector=ml5.objectDetector("cocossd",modalloaded);
document.getElementById("status").innerHTML="status : detecting objects";
}

function draw(){
image(img,0,0,640,420);
fill("#ff0000");
text('dog',45,75);
noFill();
stroke("#ff0000");
rect(30,60,450,350);

fill("#ff0000");
text("cat",300,85);
noFill();
stroke("#ff0000");
rect(295,70,320,325);
}

function modalloaded(){
    console.log("modalloaded");
    status=true;
    objectdetector.detect(img,gotresult);
}

function gotresult(error,results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
    }
}