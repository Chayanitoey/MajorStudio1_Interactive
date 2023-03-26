const canvasWidth = 1080;
// const canvasHeight = 906;
const canvasHeight = 800;

let x, y;

let r = 200;
// let xspeed = 10;

const start = 90;
const gap = 160;
const fontSize = 230;
const rectHieght = 157;
const rectGap = 95;
let myFont;

function preload() {
  myFont = loadFont('assets/WorkSans-VariableFont_wght.ttf');
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  x = canvasWidth / 2;
  y = canvasHeight/1.5;

}

function drawNext20Years(num,age,country){


  background('rgba(253, 249, 244, 1)');
  textFont(myFont);

  
  

  textSize(20);

  fill('rgba(255, 195, 40, 1)');
  noStroke()
  ellipse(x, y, num*4, num*4);
  
  fill('rgba(34, 35, 26, 1)');
  text(num +'% of the population', (canvasWidth/2)-100, canvasHeight/1.5 +250);

//   x += xspeed;
 // Moving up at a constant speed 
 //** for some reasons P5 doesn't animate on html we're not going to use speed 
//   if (x > canvasWidth - r || x < r) {
//     xspeed = -xspeed;
//   }

  fill('rgba(15, 163, 177, 1)')
  rect(x-20,0, Math.round(100-num), Math.round(100-num)*4 -40);
  
  
  
  fill('rgba(34, 35, 26, 1)');
  // rotate(radians(270));
  text(Math.round(100-num) + '% of the population', 200 , 100);
  
  textSize(90);
  fill('rgba(230, 52, 98, 1)');
  let lines ='YOU\nARE\n' + (age+20)  + '\nYEARS\n-OLD\nIN\n' + country;
  textLeading(80);
  text(lines, 0, canvasHeight/4);
  
}

function drawPop(data) {

    //making background 
      
    noStroke();
    fill('rgba(255, 195, 40, 1)');
    rect(0, -63, canvasWidth, rectHieght);
    noStroke();
    fill('rgba(114, 76, 249, 1)');
    rect(0, rectGap, canvasWidth, rectHieght+3);
    noStroke();
    fill('rgba(254, 94, 65, 1)');
    rect(0, rectHieght + rectGap+4, canvasWidth, rectHieght);
      
    noStroke();
    fill('rgba(15, 163, 177, 1)');
    rect(0, (rectHieght*2) + rectGap +5, canvasWidth, rectHieght);
    
    
    noStroke();
    fill('rgba(230, 52, 98, 1)');
    rect(0, (rectHieght*3) + rectGap+ 5, canvasWidth, rectHieght);
      
    noStroke();
    fill('rgba(34, 35, 26, 1)');
    rect(0, (rectHieght*4) + rectGap+ 5, canvasWidth, rectHieght);
    
    noStroke();
    fill('rgba(114, 76, 249, 1)');
    rect(0, (rectHieght*5) + rectGap+6, canvasWidth, rectHieght);
    
    textFont(myFont);
    textSize(fontSize);
    
    
    fill('rgba(230, 52, 98, 1)');
    text(data, 1, start);
      
    fill('rgba(255, 254, 252, 1)');
    text(data,1, start + gap);
    
    fill('rgba(0, 0, 0, 1)');
    text(data, 1, start + (gap*2) );
      
    fill('rgba(255, 195, 40, 1)');
    text(data, 1, start + (gap*3));
    
    fill('rgba(255, 254, 252, 1)');
    text(data, 1, start + (gap*4));
    
    fill('rgba(255, 195, 40, 1)');
    text(data, 1, start + (gap*5) );
    
    fill('rgba(255, 254, 252, 1)');
    text(data, 1, start + (gap*6) );
  
}


function drawSibling(num){
  background('rgba(114, 76, 249, 1)')
  textSize(100);
  textFont(myFont);


  fill('rgba(255, 195, 40, 1)');
  text('YOU', 400, 130);
  
  noStroke()
  circle(500, 270, 200);
  
  fill('rgba(250, 250, 250, 1)');
  noStroke()
 
 if(num < 1){
  arc(500, 520, 200, 200, 0, num * (PI*2) , PIE);
 }
 if(num >= 1 && num % 1  == 0 ){
   
    for( let i=0; i< num; i++){
    arc((100 * i )+ 300, 520, 200, 200, 0, 100 * (PI*2) , PIE);
    }
    
 }
 
 if(num > 1 && num % 1  != 0 ){
  let decimal = num%1 
  let whole = num - decimal
  arc(500, 520, 200, 200, 0, (PI*2) - ((decimal * (PI*2)) / 100) , PIE);
  
   for( let i=0; i< whole; i++){
    arc((100 * i )+ 300, 520, 200, 200, 0, 100 * (PI*2) , PIE);
    }
    
 }

  text('YOUR SIBLING', 200, 750);

}


function drawLifeExpectency(year,day,hr,min,sec){
  
  background('rgba(230, 52, 98, 1)')
  // angleMode(DEGREES); 
  textFont(myFont);
  textSize(100);
  fill('rgba(241, 255, 72, 1)');
  text(year +' YEARS', 30, canvasHeight/4);
  
  fill('rgba(253, 249, 244, 1)');
  text(day + ' DAYS', 30, canvasHeight/4 + 65 );
  
  fill('rgba(0, 0, 0, 1)');
  text(hr + ' HOURS', 30, canvasHeight/4 + (65*2) );

  fill('rgba(255, 255, 255, 1)');
  text(min + ' MINUETES', 30, canvasHeight/4 + (65*3) );
  

  fill('rgba(241, 255, 72, 1)');
  text(sec + ' SECONDS', 30, canvasHeight/4 + (65*4) );
  
  fill('rgba(0, 0, 0, 1)');
  text('Left.', 30, canvasHeight/4 + (65*6) );
  

  

}