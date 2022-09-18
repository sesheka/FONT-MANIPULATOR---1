function setup()
{
    video = createCapture(VIDEO)
    video.size(550,550)
    canvas = createCanvas(550,550)
    canvas.position(750,160)
    model = ml5.poseNet(video, modelLoaded)
}
function modelLoaded()
{
    console.log("Model Loaded Successfully")
}