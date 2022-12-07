
// var face_x,face_y,face_size
var face_x = [] 
var face_y = []
var face_size = []
var face_num = 20
var song
var songIsplay=false  //設定此變數為"假"(false)，收到按下滑鼠把變數改為"true"，音樂開始播放。
var amp
var vol

function preload(){
  song=loadSound("Rain Drops - TrackTribe.mp3");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  // face_size = 400
  // face_x = width/2
  // face_y = height/2

  for(var i=0;i<face_num;i++){
    face_size[i] = random(100,300)  //臉的大小100~400
    face_x[i] = random(0,width)
    face_y[i] = random(0,height)
  }
}

function draw() {
  background("#bfc8d7");
  // textSize(50)
  // text("X:"+mouseX+"  Y:"+mouseY,50,50)
  for(var j=0;j<face_num;j++){
    push()  
      fill(255)
      var f_s = face_size[j]
      translate(face_x[j],face_y[j]) //把(0,0)座標原點移到視窗的中間
      ellipse(0,0,f_s,f_s/1.3)  //臉的圓
      noFill()
        beginShape()
        strokeWeight(3)
        // line(-f_s/15,-f_s/5,f_s/15,-f_s/5) /眉毛
        // line(-f_s/4,-f_s/15,f_s/4,-f_s/15)
        endShape()
      strokeWeight(1)
      fill("#eacacb")
      ellipse(-f_s/3,-f_s/50,f_s/10) //左臉頰
      fill("#67421d")
      ellipse(-f_s/4.5+map(mouseX,0,width,-f_s/85,f_s/12),-f_s/8+map(mouseX,0,width,-f_s/85,f_s/12),f_s/12)//左眼珠
      noFill()
      fill("#eacacb")
      ellipse(f_s/3,-f_s/50,f_s/10) //右臉頰
      fill("#67421d")
      ellipse(f_s/4.5+map(mouseX,0,width,-f_s/85,f_s/12),-f_s/8+map(mouseX,0,width,-f_s/85,f_s/12),f_s/12)// 右眼珠
      fill(255,255,0)
      ellipse(-f_s/30,-f_s/15,f_s/13) //mouse
      ellipse(-f_s/30,-f_s/80,f_s/18)
      // fill("#cb8a90") //嘴巴裡的顏色
      // arc(0,f_s/4,f_s/2,f_s/4,0,180)  //下弧
      // fill("#f0e4d4")
      //+map(mouseX,0,width,-f_s/80,f_s/12)//眼睛會動


      if(!songIsplay){
        fill("#eacacb")
        ellipse(-f_s/3,-f_s/50,f_s/10) //沒有播放
        ellipse(f_s/3,-f_s/50,f_s/10)
      }
      else{
        if(!songIsplay){
          fill("#b1d3c5")
          ellipse(-f_s/3,-f_s/50,f_s/10) //沒有播放
          ellipse(f_s/3,-f_s/50,f_s/10)
        }
      else{
          vol = amp.getLevel() //取得聲音值(值為0~1之間)
          console.log(vol)
          fill("#b1d3c5")
          ellipse(-f_s/3,-f_s/50,f_s/10) //沒有播放
          ellipse(f_s/3,-f_s/50,f_s/10)
        } //音樂開始播
      }

      noFill()
    pop()

  }
}


function mousePressed()  //按下滑鼠播音樂，再按一下停止音樂
{
  if(!songIsplay){
    song.play()
    songIsplay = true
    amp=new p5.Amplitude()

  }
  else{
    song.pause()
    songIsplay = false

  }
  
}