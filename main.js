function preload() {
}
function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(300, 300);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}
function draw() {
    image(video, 200, 150, 200, 200);
    tint(tint_color);
    fill(90, 2, 214);
    stroke(90, 2, 214);
    circle(50,50,80);
    circle(550,50,80);
    circle(550,400,80);
    circle(50,400,80);
}
function take_snapshot(){
    save('Oh_this_happened.png');
}
function filter_tint(){
    tint_color = document.getElementById("colour_name").value;
}