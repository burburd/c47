var bcg,bcgImg,fisher,fisherImg,fishImg,fish,bigfish,bigfishImg,bait,baitImg;



function preload(){
 bcg=loadImage("bcg.png")
 fisherImg=loadImage("fisher.png")
 fishImg=loadImage("fish.png")
 bigfishImg=loadImage("bigfish.png")
 baitImg=loadImage("bait.png")
}





function setup(){
createCanvas(1200,1200)
fisher=createSprite(1000,500)
fisher.addImage(fisherImg)
bait=createSprite(800,700)
bait.addImage(baitImg)
bait.scale = 0.5

}






function draw(){
background(bcg)
fishSpawn()
bigfishSpawn()
drawSprites()
}

function fishSpawn(){
    if(frameCount%100==0){
        fish=createSprite(random(10,1200),random(700,1140))
fish.addImage(fishImg)
fish.scale = 0.5
fish.velocityX= 0.6
console.log(fish.x)
    }
}



function bigfishSpawn(){
    if(frameCount%150==0){
        bigfish=createSprite(random(10,1200),random(700,1140))
bigfish.addImage(bigfishImg)
bigfish.scale = 0.7
bigfish.velocityX= 0.6
console.log(bigfish.x)
    }
}
