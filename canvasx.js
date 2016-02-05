/*
**********Canvas Software************
Company:Amonsoft Company LTD
Author : Nyesigye Amon
Division: Web Develoment
Date : 6/Feb/2016
contact:amonsoftx@gmail.com
       :amonxnye@gmail.com
       
       
****Documentation******
THIS IS A SOFTWARE TO HELP DEVELOPERS REDUCE LINES OF CODE WHEN DEALING WITH CANVAS
1. cw - the canvas width
2. ch - the canvas height
3. context - the context of the array created
4. x  - object X position
5. y - object Y position
6. w - object Width
7. h - Object Height
8. color - Object color
9. radius - Circle radius
10. Sangle - Starting Angle
11. Eangle - Ending Angle

*****flow of events*******
The canvas is created with the drawcanvas function on which objects will be drawn,
on and is appended to your body automatically. Then , we draw using the drawobject function

*****Usage******
in your code, call the function after calling the script:-

****************YOUR CODE********************************
<head>
<script src=".../directory/gamex.js"></script>
</head>

<body></body>

<script>
 var canvas  = drawcanvas(width,height); //create canvas

var context = canvas.getContext("2d");  //create context
    
//context filling to draw on canvas(shape determined by if radius is on)

//declare Main game function forexample :- gamerun() in our case

function gamerun(){
 drawObject(context,x,y,w,h,color); //rectangle 
 drawObject(context,x,y,null,null,color,radius,Sangle,Eangle);  //circle ,since w = null & h = null
 }
 
 //game or canvas logic logic
 
 //start Game
 gamerun();
 
 //you can choose to place game in Loop
 setInterval(gamerun,1000)   //1000 is the number of milliseconds per interval
 
 //or in Modern Browsers use for the browser to keep making the frames as fast as possible
 requestAnimationFrame(gamerun);

</script>

****************YOUR CODE********************************

Disclaimer:- Any errors caused by the code are not a problem od the author or the mother company.

*/

function drawcanvas(cw,ch){
   var cn = document.createElement("canvas");
     cn.width  = cw;
     cn.height  = ch;
    document.body.appendChild(cn);
    return cn;
    }

   function drawObject(context,x,y,w,h,color,radius,Sangle,Eangle){
       
       context.beginPath();
       if(radius != null && Sangle != null){
             context.arc(x,y,radius,Sangle,Eangle);
       }else{
         context.rect(x,y,w,h);   
       }
  
    context.fillStyle = color;
    context.fill();
    context.closePath();
       
   }



