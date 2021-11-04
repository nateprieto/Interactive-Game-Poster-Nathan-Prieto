let font;
let palette1 = ['#3c1518', '#69140e', '#a44200', '#d58936', '#f2f3ae'];
let palette2 = ['#313238', '#4e4232', '#a08357', '#f1c47b', '#e8ddcb'];
let palette3 = ['#1c2321', '#5e6572', '#7d98a1', '#a9b4c2', '#eef1ef'];
let array2 = ['Sol   ', '   ita   ', '      ire', 'Solita   ', '   itaire', 'Sol   ire'];
let array3 = ['S', 'o', 'l', 'i', 't', 'a', 'i', 'r', 'e'];
let currentPalette = palette1;
let currentDesign = 1;
let palette = 1;
function setup() {
  createCanvas(400, 640);
  font = loadFont('Lunchtype23-Medium-Italic.ttf');
}

function draw() {
  background(currentPalette[0]);
  textFont(font);
  textSize(70);
  textAlign(CENTER, CENTER);
  
  if(palette % 3 == 1){
    currentPalette = palette1;
  }
  else if(palette % 3 == 2){
    currentPalette = palette2;
  }
  else if(palette % 3 == 0){
    currentPalette = palette3;
  }
  
  if(currentDesign % 3 == 1){
    designOne();
  }
  else if(currentDesign % 3 == 2){
    designTwo();
  }
  else if(currentDesign % 3 == 0){
    designThree();
  }  
}

function keyPressed(){
    if(keyCode === 81){
      currentDesign += 1;
    }
  if(keyCode === 87){
    palette += 1;
  }
}


function designOne(){
  noStroke();
  let char = 'o';
  textAnimate(char, 140, 320, 5);
  char = 'l';
  textAnimate(char, 165, 310, 10);
  char = 'i';
  textAnimate(char, 180, 325, 10);
  char = 't';
  textAnimate(char, 200, 320, 10);
  char = 'a';
  textAnimate(char, 230, 310, 5);
  char = 'i';
  textAnimate(char, 260, 315, 15);
  char = 'r';
  textAnimate(char, 280, 310, 20);
  char = 'e';
  textAnimate(char, 310, 315, 26);
  fill(currentPalette[3]);
  text('Solitaire', 200, 320);
  fill(currentPalette[1]);
  textSize(25);
  text('By Microsoft', 325, 620);
}

function textAnimate(char, xOff, yOff, freq){
  let count = 2;
  if(xOff >= 280){
    count = 5;
  }
  else if(xOff <= 140){
    count = 2;
  }
  else if(xOff >= 200){
    count = 4;
  }
  else if(xOff < 200){
    count = 3;
  }
  
  for(let i = 1; i < count; i ++){
    if(i == 1 && xOff < 200){
      fill(currentPalette[1]);
    }
    else if( i == 1){
      fill(currentPalette[4]);
    }
    else if(i == 2){
      fill(currentPalette[2]);
    }
    else if(i == 3 && xOff >= 280){
      fill(currentPalette[0]);
    }
    else if(i == 3){
      fill(currentPalette[1]);
    }
    else if(i == 4){
      fill(currentPalette[1]);
    }
    let n = yOff + freq*sin(i * freq) + freq * noise(-i/10 + millis()/1000);
    text(char, xOff, n);
  }
}

function designTwo(){
  noStroke();
  let xOff = 180;
  let bound = 690;
  for(let i = 1; i < 7; i ++){
    let index = i % 4;
    if(index == 0 || index == 3){
      index += 1;
    }
    fill(currentPalette[index]);
    let n = 320 + 15*sin(i * 15) + 15 * noise(-i/10 + millis()/1000);
    text(array2[i % 4], xOff, bound - n);
    xOff -= 30;
    bound += 50;
  }
  
  xOff = 230;
  bound = 300;
  for(let i = 1; i < 7; i ++){
    index = i % 4;
    if(index == 0 || index == 3){
      index += 1;
    }
    fill(currentPalette[index])
    let n = 320 + 15*sin(i * 15) + 15 * noise(-i/10 + millis()/1000);
    text(array2[i % 5], xOff, n - bound);
    xOff += 30;
    bound -= 50;
  }
  fill(currentPalette[3]);
  text('Solitaire', 200, 320);
  fill(currentPalette[4]);
  textSize(25);
  text('By Microsoft', 325, 620);
}



function designThree(){
  noStroke();
  fill(currentPalette[2]);
  text(array3[0], 95, 320);
  fill(currentPalette[3]);
  text(array3[1], 135, 320);
  fill(currentPalette[1]);
  text(array3[2], 163, 320);
  fill(currentPalette[4]);
  text(array3[3], 180, 320);
  fill(currentPalette[2]);
  text(array3[4], 200, 320);
  fill(currentPalette[1]);
  text(array3[5], 230, 320);
  fill(currentPalette[4]);
  text(array3[6], 257, 320);
  fill(currentPalette[3]);
  text(array3[7], 278, 320);
  fill(currentPalette[2]);
  text(array3[8], 308, 320);
  
  fill(currentPalette[4]);
  textSize(20);
  text('By Microsoft', 280, 273);
  
  fill(currentPalette[0]);
  let yOff = 320;
  let lineLen = 100;
  for(let i = 0; i < 5; i ++){
    let n = yOff + 10*sin(1 * 100) + 10 * noise(-i/50 + millis()/1000);
    ellipse(120, n, lineLen, 3);
    yOff += 5;
    lineLen += 30;
  }
  
  noFill();
  stroke(currentPalette[1]);
  rect(60, 285, 275, 75);
}
