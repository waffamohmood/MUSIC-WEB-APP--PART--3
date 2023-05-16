dancemonkey="";
stealmygirl="";
leftWristx=0;
leftWristy=0;
rightWristx=0;
rightWristy=0;
function preload(){
    dancemonkey=loadSound("dancemonkey.mp3");
    stealmygirl=loadSound("stealmygirl.mp3");
}
function setup(){
    canvas=createCanvas(500,600);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotposes);
}
function gotposes(results){
    if (results.length> 0){
       console.log(results);
       leftWristx=results[0].pose.leftWrist.x;
       leftWristy=results[0].pose.leftWrist.y;
       console.log("Leftwrist X = "+leftWristx +"Leftwrist Y = "+leftWristy);
       rightWristx=results[0].pose.rightWrist.x;
       rightWristy=results[0].pose.rightWrist.y;
       console.log("Rightwrist X = "+rightWristx +"Rightwrist Y = "+rightWristy);
   }
}
function modelLoaded(){
    console.log("Posenet Is Initailize");
}
function draw(){
    image(video,0,0,600,500);
}