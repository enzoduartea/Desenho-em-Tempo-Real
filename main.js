noseX = 0;
noseY = 0;

difference = 0;
rigthWristX = 0;
leftWristX = 0;

function setup() {
  canvas = createCanvas(500, 500);
  canvas.position();
  background(235, 235, 245);
  video = createCapture(VIDEO);
  video.size(500, 600);
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function modelLoaded() {
  console.log("PoseNet Is Initialized");
}

function gotPoses(results) {
  if (results.lenght > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX + "noseY = " + noseY);
    leftWristX = results[0].pose.leftWristX;
    rigthWristX = results[0].pose.rigthtWristX;
    difference = floor(leftWristX - rigthWristX);
    console.log("leftWristX = " + leftWristX + "rightWristX = " + rigthWristX);
  }
}

function draw() {
  background("#969A97");
  document.getElementById("square_side").innerHTML =
    "Largura e Altura = " + difference + "px";
  fill("#F90093");
  stroke("#F90093");
  square(noseX, noseY, difference);
}
