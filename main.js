var NoseX = 0;
var NoseY = 0;

function preload(){
    Nose = loadImage('https://i.postimg.cc/FFdrWw3z/th-1.png');
}

function setup(){
    canvas = createCanvas(400, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 350);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function TakeSnap(){
    save("Picture.png");
}

function modelLoaded(){
    console.log("PoseNet is Initialized")
}

function gotPoses(results){
    if(results.length > 0){
        NoseX = results[0].pose.nose.x - 15;
        NoseY = results[0].pose.nose.y - 15;
        console.log("Nose x = " + NoseX);
        console.log("nose y = " + NoseY);
        
    }
}

function draw(){
    image(video, 0, 0, 400, 350);
    //fill(255,0,0);
    //stroke(255,0,0);
    //circle(NoseX, NoseY, 20);
    image(Nose, NoseX, NoseY, 30, 30);
}