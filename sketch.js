var bgImage

function preload() {
bgImage = loadImage("bg.jpeg")

}
function setup() {
  createCanvas(windowWidth,windowHeight)
  bg = createSprite(width/2,height/2,width+2000,height+500)
  bg.addImage("bgImage",bgImage)

}
function draw() {
  background(0)
  drawSprites();

}