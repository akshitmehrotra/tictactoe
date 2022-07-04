'use strict'
let messages = document.querySelector('.player1').textContent;
let messageArray = messages;
console.log(messageArray);
let textPosition = 0;
let speed = 125;
let symbol = 'A';
let active = 'B'

//player1 
let typewriter = () => {
  document.querySelector('.player1').innerHTML = messageArray.substring(0,textPosition) + "<span>\u25ae</span>";
  // console.log(textPosition,messageArray.length,messageArray[0].substring(0,2) );
  if(textPosition === messageArray.length)document.querySelector('.player1').innerHTML = messageArray.substring(0,textPosition);
  if(textPosition++ != messageArray.length)
  setTimeout(typewriter,speed);
}


//player2
let typewriter2 = () => {
  document.querySelector('.player2').innerHTML = messageArray.substring(0,textPosition) + "<span>\u25ae</span>";
  // console.log(textPosition,messageArray.length,messageArray[0].substring(0,2) );
  if(textPosition === messageArray.length)document.querySelector('.player2').innerHTML = messageArray.substring(0,textPosition);
  if(textPosition++ != messageArray.length)
  setTimeout(typewriter2,speed);
}

//choose
let typewriter3 = () => {
  document.querySelector('.choose').innerHTML = messageArray.substring(0,textPosition) + "<span>\u25ae</span>";
  // console.log(textPosition,messageArray.length,messageArray[0].substring(0,2) );
  if(textPosition === messageArray.length)document.querySelector('.choose').innerHTML = messageArray.substring(0,textPosition);
  if(textPosition++ != messageArray.length)
  setTimeout(typewriter3,speed);
}

//namehtml
window.addEventListener("load",typewriter);
document.querySelector('.i1').style.display = 'inline-block'
var p1 = document.querySelector('.i1').value;
var p2 = document.querySelector('.i2').value;

//firstname enter
document.querySelector('.i1').addEventListener('keypress'
,function (e) {
  if(e.key === 'Enter')
  {
    p1 = document.querySelector('.i1').value;
    document.querySelector('.i1').style.display = 'none'
    document.querySelector('.player1').style.display = 'none'
    messageArray = document.querySelector('.player2').textContent;
    textPosition = 0;
    document.querySelector('.player2').style.display = 'block'
    document.querySelector('.i2').style.display = 'inline-block'
    typewriter2();
    
  }
})


//secondnameenter
document.querySelector('.i2').addEventListener('keypress'
,function (e) {
  if(e.key === 'Enter')
  {
    p2 = document.querySelector('.i2').value;
    document.querySelector('.main2').style.display = 'none'
    document.querySelector('.choose').textContent =  `${p1}, Choose between O and X`;
    messageArray = document.querySelector('.choose').textContent;
    textPosition = 0;
    typewriter3();
    document.querySelector('.main3').style.display = 'block';
    
  }
})

//choosing symbol
document.querySelector('.O').addEventListener('click',
function() {
symbol = 'O'
active = 'X'
//console.log(symbol);
document.querySelector('.main3').style.display = 'none';
//3..2..1..GO!
document.querySelector('#count_num').style.display = 'block';
$(function(){
  var timer = setInterval(function(){
  $("#count_num").html(function(i,html){
  
    if(parseInt(html) == 1)
     return "GO!";
    else if(parseInt(html)>1)
     {
     return parseInt(html)-1;
     }
     else if(html == "GO!")
     {
     clearTimeout(timer);
     document.querySelector('aside').style.display = 'none'   
        document.querySelector('.main4').style.display = 'block' 
        document.querySelector('.grid1').textContent = `${symbol}`;
        document.querySelector('.grid2').textContent = `${symbol}`;
        document.querySelector('.grid3').textContent = `${symbol}`;
        document.querySelector('.grid5').textContent = `${symbol}`;
        document.querySelector('.grid6').textContent = `${symbol}`;
        document.querySelector('.grid7').textContent = `${symbol}`;
        document.querySelector('.grid8').textContent = `${symbol}`;
        document.querySelector('.grid9').textContent = `${symbol}`;
        document.querySelector('.grid4').textContent = `${symbol}`; 
        document.querySelector('.turn').textContent = `${p1}'s Turn`; 
        return null;
     }
     
   });
  
  },1000);
  
});
})
document.querySelector('.X').addEventListener('click',
function() {
symbol = 'X'
active = 'O'
//console.log(symbol);
document.querySelector('.main3').style.display = 'none';
//3..2..1..GO!
document.querySelector('#count_num').style.display = 'block';
$(function(){
  var timer = setInterval(function(){
  $("#count_num").html(function(i,html){
  
    if(parseInt(html) == 1)
     return "GO!";

    else if(parseInt(html)>1)
     {
     return parseInt(html)-1;
     }
     else if(html == "GO!")
     {
     clearTimeout(timer);
     document.querySelector('aside').style.display = 'none'   
     document.querySelector('.main4').style.display = 'block'   
     document.querySelector('.grid1').textContent = `${symbol}`;
     document.querySelector('.grid2').textContent = `${symbol}`;
     document.querySelector('.grid3').textContent = `${symbol}`;
     document.querySelector('.grid5').textContent = `${symbol}`;
     document.querySelector('.grid6').textContent = `${symbol}`;
     document.querySelector('.grid7').textContent = `${symbol}`;
     document.querySelector('.grid8').textContent = `${symbol}`;
     document.querySelector('.grid9').textContent = `${symbol}`;
     document.querySelector('.grid4').textContent = `${symbol}`;
     document.querySelector('.turn').textContent = `${p1}'s Turn`; 
     return null;
     }
     
   });
  
  },1000);
  
});
})


//
let score1 = 0;
let score2 = 0;
let num,count = 0,i = 1;
let trophy = '🏆';
let a = ['0','1','2','3','4','5','6','7','8','9'];
let c = [0,0,0,0,0,0,0,0,0,0]
console.log(symbol,active);


function play1(){
document.querySelector('.turn').textContent = `🥇${p1} won!`;
score1++;
for(let j = 1; j <= 9; j++)
{
  if(a[j] == symbol || a[j] == active)
  {}
  else
  {document.querySelector(`.grid${j}`).textContent = `🥇`}
}

for(let j = 0; j < 10; j++)
{
  c[j]++;
  console.log(c[j]);
}

if(score1 > score2)
{
  document.querySelector('.hello').textContent = `🏆Player1's Score: ${score1}`
  document.querySelector('.hello2').textContent = `🎈Player2's Score: ${score2}`
}
else if(score1 < score2)
{
  document.querySelector('.hello').textContent = `🎈Player1's Score: ${score1}`
  document.querySelector('.hello2').textContent = `🏆Player2's Score: ${score2}`
}
else
{
  document.querySelector('.hello').textContent = `🏆Player1's Score: ${score1}`
  document.querySelector('.hello2').textContent = `🏆Player2's Score: ${score2}`
}
}



function play2(){
  score2++;
  document.querySelector('.turn').textContent = `🥇${p2} won!`;
  for(let j = 1; j <= 9; j++)
  {

    if(a[j] == symbol || a[j] == active)
    {}
    else
    {document.querySelector(`.grid${j}`).textContent = `🥇`}
  }

  for(let j = 0; j < 10; j++)
  {
  c[j]++;
  console.log(c[j]);
  }


  if(score1 > score2)
{
  document.querySelector('.hello').textContent = `🏆Player1's Score: ${score1}`
  document.querySelector('.hello2').textContent = `🎈Player2's Score: ${score2}`
}
else if(score1 < score2)
{
  document.querySelector('.hello').textContent = `🎈Player1's Score: ${score1}`
  document.querySelector('.hello2').textContent = `🏆Player2's Score: ${score2}`
}
else
{
  document.querySelector('.hello').textContent = `🏆Player1's Score: ${score1}`
  document.querySelector('.hello2').textContent = `🏆Player2's Score: ${score2}`
}
  
}
function tiee(){
  document.querySelector('.turn').textContent = `🤝It's a tie!`;
}

//C code
function check(){
       if((a[1] == a[2])&&(a[2] == a[3]))
       {
           if (a[1] == symbol)
           play1();
           else play2();
        
       }
       if ((a[4] == a[5])&&(a[5] == a[6]))
       {
           if (a[4] == symbol)
           play1();
           else play2();
        
       }
       if ((a[7] == a[8])&&(a[8] == a[9]))
       {
           if (a[7] == symbol)
           play1();
           else play2();
        
       }
       if((a[1] == a[4])&&(a[4] == a[7]))
       {
           if (a[7] == symbol)
           play1();
           else play2();
        
       }
       if((a[2] == a[5])&&(a[5] == a[8]))
       {
           if (a[5] == symbol)
           play1();
           else play2();
        
       }
       if((a[3] == a[6])&&(a[6] == a[9]))
       {
           if (a[6] == symbol)
           play1();
           else play2();
         
       }
       if((a[1] == a[5])&&(a[5] == a[9]))
       {
           if (a[1] == symbol)
           play1();
           else play2();
         
       }
       if((a[3] == a[5])&&(a[5] == a[7]))
       {
           if (a[5] == symbol)
           play1();
           else play2();
          
       }    
    
    if(((a[1] == a[2])&&(a[2] == a[3]))||((a[4] == a[5])&&(a[5] == a[6]))||((a[7] == a[8])&&(a[8] == a[9]))||((a[1] == a[4])&&(a[4] == a[7]))||((a[2] == a[5])&&(a[5] == a[8]))||((a[3] == a[6])&&(a[6] == a[9]))||((a[1] == a[5])&&(a[5] == a[9]))||((a[3] == a[5])&&(a[5] == a[7]))){}
    else if(count != 8){}
    else tiee();
  }



 document.querySelector('.grid1').addEventListener('click',
  function() {
    document.querySelector('.grid1').textContent = symbol;
    document.querySelector('.grid1').style.fontSize = '100%';
    document.querySelector('.grid1:hover').style.transitionDuration = '0s';
    document.querySelector('.grid1:hover').style.transitionDelay = '0s';
    console.log(c[1]);
    if(c[1] == 0)
    {
    if(count%2 == 0)
    {
      (a[1] = symbol);
      document.querySelector('.grid1').textContent = symbol;
      if(a[1] == symbol || a[1] ==  active){}
      else{document.querySelector('.grid1').textContent = active;}
      if(a[2] == symbol || a[2] ==  active){}
      else{document.querySelector('.grid2').textContent = active;}
      if(a[3] == symbol || a[3] ==  active){}
      else{document.querySelector('.grid3').textContent = active;}
      if(a[4] == symbol || a[4] ==  active){}
      else{document.querySelector('.grid4').textContent = active;}
      if(a[5] == symbol || a[5] ==  active){}
      else{document.querySelector('.grid5').textContent = active;}
      if(a[6] == symbol || a[6] ==  active){}
      else{document.querySelector('.grid6').textContent = active;}
      if(a[7] == symbol || a[7] ==  active){}
      else{document.querySelector('.grid7').textContent = active;}
      if(a[8] == symbol || a[8] ==  active){}
      else{document.querySelector('.grid8').textContent = active;}
      if(a[9] == symbol || a[9] ==  active){}
      else{document.querySelector('.grid9').textContent = active;}
      document.querySelector('.turn').textContent = `${p2}'s Turn`
    }
    else{
      (a[1] = active);
      document.querySelector('.grid1').textContent = active;
      if(a[1] == symbol || a[1] ==  active){}
      else{document.querySelector('.grid1').textContent = symbol;}
      if(a[2] == symbol || a[2] ==  active){}
      else{document.querySelector('.grid2').textContent = symbol;}
      if(a[3] == symbol || a[3] ==  active){}
      else{document.querySelector('.grid3').textContent = symbol;}
      if(a[4] == symbol || a[4] ==  active){}
      else{document.querySelector('.grid4').textContent = symbol;}
      if(a[5] == symbol || a[5] ==  active){}
      else{document.querySelector('.grid5').textContent = symbol;}
      if(a[6] == symbol || a[6] ==  active){}
      else{document.querySelector('.grid6').textContent = symbol;}
      if(a[7] == symbol || a[7] ==  active){}
      else{document.querySelector('.grid7').textContent = symbol;}
      if(a[8] == symbol || a[8] ==  active){}
      else{document.querySelector('.grid8').textContent = symbol;}
      if(a[9] == symbol || a[9] ==  active){}
      else{document.querySelector('.grid9').textContent = symbol;}
      document.querySelector('.turn').textContent = `${p1}'s Turn`;
    }
    check();
    count++; 
  }
  else{
    document.querySelector('.grid1').textContent = trophy;
    document.querySelector('.grid1').style.fontSize = '100%';
  }
  c[1]++;
    
  })

  document.querySelector('.grid2').addEventListener('click',
  function() {
    document.querySelector('.grid2').textContent = symbol;
    document.querySelector('.grid2').style.fontSize = '100%';
    document.querySelector('.grid2:hover').style.transitionDuration = '0s';
    document.querySelector('.grid2:hover').style.transitionDelay = '0s';
    console.log(count);
    if(c[2] == 0)
    {
    if(count%2 == 0)
    {
      (a[2] = symbol);
      document.querySelector('.grid2').textContent = symbol;
      if(a[1] == symbol || a[1] ==  active){}
      else{document.querySelector('.grid1').textContent = active;}
      if(a[2] == symbol || a[2] ==  active){}
      else{document.querySelector('.grid2').textContent = active;}
      if(a[3] == symbol || a[3] ==  active){}
      else{document.querySelector('.grid3').textContent = active;}
      if(a[4] == symbol || a[4] ==  active){}
      else{document.querySelector('.grid4').textContent = active;}
      if(a[5] == symbol || a[5] ==  active){}
      else{document.querySelector('.grid5').textContent = active;}
      if(a[6] == symbol || a[6] ==  active){}
      else{document.querySelector('.grid6').textContent = active;}
      if(a[7] == symbol || a[7] ==  active){}
      else{document.querySelector('.grid7').textContent = active;}
      if(a[8] == symbol || a[8] ==  active){}
      else{document.querySelector('.grid8').textContent = active;}
      if(a[9] == symbol || a[9] ==  active){}
      else{document.querySelector('.grid9').textContent = active;}
      document.querySelector('.turn').textContent = `${p2}'s Turn`
    }
    else{
      (a[2] = active);
      document.querySelector('.grid2').textContent = active;
      if(a[1] == symbol || a[1] ==  active){}
      else{document.querySelector('.grid1').textContent = symbol;}
      if(a[2] == symbol || a[2] ==  active){}
      else{document.querySelector('.grid2').textContent = symbol;}
      if(a[3] == symbol || a[3] ==  active){}
      else{document.querySelector('.grid3').textContent = symbol;}
      if(a[4] == symbol || a[4] ==  active){}
      else{document.querySelector('.grid4').textContent = symbol;}
      if(a[5] == symbol || a[5] ==  active){}
      else{document.querySelector('.grid5').textContent = symbol;}
      if(a[6] == symbol || a[6] ==  active){}
      else{document.querySelector('.grid6').textContent = symbol;}
      if(a[7] == symbol || a[7] ==  active){}
      else{document.querySelector('.grid7').textContent = symbol;}
      if(a[8] == symbol || a[8] ==  active){}
      else{document.querySelector('.grid8').textContent = symbol;}
      if(a[9] == symbol || a[9] ==  active){}
      else{document.querySelector('.grid9').textContent = symbol;}
      document.querySelector('.turn').textContent = `${p1}'s Turn`;
    }
    check();
    count++;  }
    else{
      document.querySelector('.grid2').textContent = trophy;
      document.querySelector('.grid2').style.fontSize = '100%';
    }
  c[2]++;
  
  })

  document.querySelector('.grid3').addEventListener('click',
  function() {
    document.querySelector('.grid3').textContent = symbol;
    document.querySelector('.grid3').style.fontSize = '100%';
    document.querySelector('.grid3:hover').style.transitionDuration = '0s';
    document.querySelector('.grid3:hover').style.transitionDelay = '0s';
    console.log(count);
    if(c[3] == 0)
    {
    if(count%2 == 0)
    {
      (a[3] = symbol);
      document.querySelector('.grid3').textContent = symbol;
      if(a[1] == symbol || a[1] ==  active){}
      else{document.querySelector('.grid1').textContent = active;}
      if(a[2] == symbol || a[2] ==  active){}
      else{document.querySelector('.grid2').textContent = active;}
      if(a[3] == symbol || a[3] ==  active){}
      else{document.querySelector('.grid3').textContent = active;}
      if(a[4] == symbol || a[4] ==  active){}
      else{document.querySelector('.grid4').textContent = active;}
      if(a[5] == symbol || a[5] ==  active){}
      else{document.querySelector('.grid5').textContent = active;}
      if(a[6] == symbol || a[6] ==  active){}
      else{document.querySelector('.grid6').textContent = active;}
      if(a[7] == symbol || a[7] ==  active){}
      else{document.querySelector('.grid7').textContent = active;}
      if(a[8] == symbol || a[8] ==  active){}
      else{document.querySelector('.grid8').textContent = active;}
      if(a[9] == symbol || a[9] ==  active){}
      else{document.querySelector('.grid9').textContent = active;}
      document.querySelector('.turn').textContent = `${p2}'s Turn`
      
    }
    else{
      (a[3] = active);
      document.querySelector('.grid3').textContent = active;
      if(a[1] == symbol || a[1] ==  active){}
      else{document.querySelector('.grid1').textContent = symbol;}
      if(a[2] == symbol || a[2] ==  active){}
      else{document.querySelector('.grid2').textContent = symbol;}
      if(a[3] == symbol || a[3] ==  active){}
      else{document.querySelector('.grid3').textContent = symbol;}
      if(a[4] == symbol || a[4] ==  active){}
      else{document.querySelector('.grid4').textContent = symbol;}
      if(a[5] == symbol || a[5] ==  active){}
      else{document.querySelector('.grid5').textContent = symbol;}
      if(a[6] == symbol || a[6] ==  active){}
      else{document.querySelector('.grid6').textContent = symbol;}
      if(a[7] == symbol || a[7] ==  active){}
      else{document.querySelector('.grid7').textContent = symbol;}
      if(a[8] == symbol || a[8] ==  active){}
      else{document.querySelector('.grid8').textContent = symbol;}
      if(a[9] == symbol || a[9] ==  active){}
      else{document.querySelector('.grid9').textContent = symbol;}
      document.querySelector('.turn').textContent = `${p1}'s Turn`;
    }
    check();
    count++; }  else{
      document.querySelector('.grid3').textContent = trophy;
      document.querySelector('.grid3').style.fontSize = '100%';
    }
    c[3]++;
    
  })

  document.querySelector('.grid4').addEventListener('click',
  function() {
    document.querySelector('.grid4').textContent = symbol;
    document.querySelector('.grid4').style.fontSize = '100%';
    document.querySelector('.grid4:hover').style.transitionDuration = '0s';
    document.querySelector('.grid4:hover').style.transitionDelay = '0s';
    console.log(count);
    if(c[4] == 0)
    {
    if(count%2 == 0)
    {
      (a[4] = symbol);
      document.querySelector('.grid4').textContent = symbol;
      if(a[1] == symbol || a[1] ==  active){}
      else{document.querySelector('.grid1').textContent = active;}
      if(a[2] == symbol || a[2] ==  active){}
      else{document.querySelector('.grid2').textContent = active;}
      if(a[3] == symbol || a[3] ==  active){}
      else{document.querySelector('.grid3').textContent = active;}
      if(a[4] == symbol || a[4] ==  active){}
      else{document.querySelector('.grid4').textContent = active;}
      if(a[5] == symbol || a[5] ==  active){}
      else{document.querySelector('.grid5').textContent = active;}
      if(a[6] == symbol || a[6] ==  active){}
      else{document.querySelector('.grid6').textContent = active;}
      if(a[7] == symbol || a[7] ==  active){}
      else{document.querySelector('.grid7').textContent = active;}
      if(a[8] == symbol || a[8] ==  active){}
      else{document.querySelector('.grid8').textContent = active;}
      if(a[9] == symbol || a[9] ==  active){}
      else{document.querySelector('.grid9').textContent = active;}
      document.querySelector('.turn').textContent = `${p2}'s Turn`
    }
    else{
      (a[4] = active);
      document.querySelector('.grid4').textContent = active;      
      if(a[1] == symbol || a[1] ==  active){}
      else{document.querySelector('.grid1').textContent = symbol;}
      if(a[2] == symbol || a[2] ==  active){}
      else{document.querySelector('.grid2').textContent = symbol;}
      if(a[3] == symbol || a[3] ==  active){}
      else{document.querySelector('.grid3').textContent = symbol;}
      if(a[4] == symbol || a[4] ==  active){}
      else{document.querySelector('.grid4').textContent = symbol;}
      if(a[5] == symbol || a[5] ==  active){}
      else{document.querySelector('.grid5').textContent = symbol;}
      if(a[6] == symbol || a[6] ==  active){}
      else{document.querySelector('.grid6').textContent = symbol;}
      if(a[7] == symbol || a[7] ==  active){}
      else{document.querySelector('.grid7').textContent = symbol;}
      if(a[8] == symbol || a[8] ==  active){}
      else{document.querySelector('.grid8').textContent = symbol;}
      if(a[9] == symbol || a[9] ==  active){}
      else{document.querySelector('.grid9').textContent = symbol;}
      document.querySelector('.turn').textContent = `${p1}'s Turn`;
       
      
    }
    check();
    count++;
    
  }
  else{
    document.querySelector('.grid4').textContent = trophy;
    document.querySelector('.grid4').style.fontSize = '100%';
  }
  c[4]++;

  })

  document.querySelector('.grid5').addEventListener('click',
  function() {
    document.querySelector('.grid5').textContent = symbol;
    document.querySelector('.grid5').style.fontSize = '100%';
    document.querySelector('.grid5:hover').style.transitionDuration = '0s';
    document.querySelector('.grid5:hover').style.transitionDelay = '0s';
    console.log(count);
   if(c[5] == 0)
   {
    if(count%2 == 0)
    {
      (a[5] = symbol);
      document.querySelector('.grid5').textContent = symbol;
      if(a[1] == symbol || a[1] ==  active){}
      else{document.querySelector('.grid1').textContent = active;}
      if(a[2] == symbol || a[2] ==  active){}
      else{document.querySelector('.grid2').textContent = active;}
      if(a[3] == symbol || a[3] ==  active){}
      else{document.querySelector('.grid3').textContent = active;}
      if(a[4] == symbol || a[4] ==  active){}
      else{document.querySelector('.grid4').textContent = active;}
      if(a[5] == symbol || a[5] ==  active){}
      else{document.querySelector('.grid5').textContent = active;}
      if(a[6] == symbol || a[6] ==  active){}
      else{document.querySelector('.grid6').textContent = active;}
      if(a[7] == symbol || a[7] ==  active){}
      else{document.querySelector('.grid7').textContent = active;}
      if(a[8] == symbol || a[8] ==  active){}
      else{document.querySelector('.grid8').textContent = active;}
      if(a[9] == symbol || a[9] ==  active){}
      else{document.querySelector('.grid9').textContent = active;}
      document.querySelector('.turn').textContent = `${p2}'s Turn`
    }
    else{
      (a[5] = active);
      document.querySelector('.grid5').textContent = active;
      if(a[1] == symbol || a[1] ==  active){}
      else{document.querySelector('.grid1').textContent = symbol;}
      if(a[2] == symbol || a[2] ==  active){}
      else{document.querySelector('.grid2').textContent = symbol;}
      if(a[3] == symbol || a[3] ==  active){}
      else{document.querySelector('.grid3').textContent = symbol;}
      if(a[4] == symbol || a[4] ==  active){}
      else{document.querySelector('.grid4').textContent = symbol;}
      if(a[5] == symbol || a[5] ==  active){}
      else{document.querySelector('.grid5').textContent = symbol;}
      if(a[6] == symbol || a[6] ==  active){}
      else{document.querySelector('.grid6').textContent = symbol;}
      if(a[7] == symbol || a[7] ==  active){}
      else{document.querySelector('.grid7').textContent = symbol;}
      if(a[8] == symbol || a[8] ==  active){}
      else{document.querySelector('.grid8').textContent = symbol;}
      if(a[9] == symbol || a[9] ==  active){}
      else{document.querySelector('.grid9').textContent = symbol;}
      document.querySelector('.turn').textContent = `${p1}'s Turn`;
    };
    check(); 
    count++; }
    else{
      document.querySelector('.grid5').textContent = trophy;
      document.querySelector('.grid5').style.fontSize = '100%';
    }
  c[5]++;

  })

  document.querySelector('.grid6').addEventListener('click',
  function() {
    document.querySelector('.grid6').textContent = symbol;
    document.querySelector('.grid6').style.fontSize = '100%';
    document.querySelector('.grid6:hover').style.transitionDuration = '0s';
    document.querySelector('.grid6:hover').style.transitionDelay = '0s';
    console.log(count);
    console.log(c[6]);
    if(c[6] == 0)
    {
    if(count%2 == 0)
    {
      (a[6] = symbol);
      document.querySelector('.grid6').textContent = symbol;
      if(a[1] == symbol || a[1] ==  active){}
      else{document.querySelector('.grid1').textContent = active;}
      if(a[2] == symbol || a[2] ==  active){}
      else{document.querySelector('.grid2').textContent = active;}
      if(a[3] == symbol || a[3] ==  active){}
      else{document.querySelector('.grid3').textContent = active;}
      if(a[4] == symbol || a[4] ==  active){}
      else{document.querySelector('.grid4').textContent = active;}
      if(a[5] == symbol || a[5] ==  active){}
      else{document.querySelector('.grid5').textContent = active;}
      if(a[6] == symbol || a[6] ==  active){}
      else{document.querySelector('.grid6').textContent = active;}
      if(a[7] == symbol || a[7] ==  active){}
      else{document.querySelector('.grid7').textContent = active;}
      if(a[8] == symbol || a[8] ==  active){}
      else{document.querySelector('.grid8').textContent = active;}
      if(a[9] == symbol || a[9] ==  active){}
      else{document.querySelector('.grid9').textContent = active;}
      document.querySelector('.turn').textContent = `${p2}'s Turn`
    }
    else{
      (a[6] = active);
      document.querySelector('.grid6').textContent = active;
      if(a[1] == symbol || a[1] ==  active){}
      else{document.querySelector('.grid1').textContent = symbol;}
      if(a[2] == symbol || a[2] ==  active){}
      else{document.querySelector('.grid2').textContent = symbol;}
      if(a[3] == symbol || a[3] ==  active){}
      else{document.querySelector('.grid3').textContent = symbol;}
      if(a[4] == symbol || a[4] ==  active){}
      else{document.querySelector('.grid4').textContent = symbol;}
      if(a[5] == symbol || a[5] ==  active){}
      else{document.querySelector('.grid5').textContent = symbol;}
      if(a[6] == symbol || a[6] ==  active){}
      else{document.querySelector('.grid6').textContent = symbol;}
      if(a[7] == symbol || a[7] ==  active){}
      else{document.querySelector('.grid7').textContent = symbol;}
      if(a[8] == symbol || a[8] ==  active){}
      else{document.querySelector('.grid8').textContent = symbol;}
      if(a[9] == symbol || a[9] ==  active){}
      else{document.querySelector('.grid9').textContent = symbol;}
      document.querySelector('.turn').textContent = `${p1}'s Turn`;
    };
    check(); count++; }
    else{
      document.querySelector('.grid6').textContent = trophy;
      document.querySelector('.grid6').style.fontSize = '100%';
    }
    c[6]++;

  })

  document.querySelector('.grid7').addEventListener('click',
  function() {
    document.querySelector('.grid7').textContent = symbol;
    document.querySelector('.grid7').style.fontSize = '100%';
    document.querySelector('.grid7:hover').style.transitionDuration = '0s';
    document.querySelector('.grid7:hover').style.transitionDelay = '0s';
    console.log(count);
    if(c[7] == 0)
    {
    if(count%2 == 0)
    {
      (a[7] = symbol);
      document.querySelector('.grid7').textContent = symbol;
      if(a[1] == symbol || a[1] ==  active){}
      else{document.querySelector('.grid1').textContent = active;}
      if(a[2] == symbol || a[2] ==  active){}
      else{document.querySelector('.grid2').textContent = active;}
      if(a[3] == symbol || a[3] ==  active){}
      else{document.querySelector('.grid3').textContent = active;}
      if(a[4] == symbol || a[4] ==  active){}
      else{document.querySelector('.grid4').textContent = active;}
      if(a[5] == symbol || a[5] ==  active){}
      else{document.querySelector('.grid5').textContent = active;}
      if(a[6] == symbol || a[6] ==  active){}
      else{document.querySelector('.grid6').textContent = active;}
      if(a[7] == symbol || a[7] ==  active){}
      else{document.querySelector('.grid7').textContent = active;}
      if(a[8] == symbol || a[8] ==  active){}
      else{document.querySelector('.grid8').textContent = active;}
      if(a[9] == symbol || a[9] ==  active){}
      else{document.querySelector('.grid9').textContent = active;}
      document.querySelector('.turn').textContent = `${p2}'s Turn`
    }
    else{
      (a[7] = active);
      document.querySelector('.grid7').textContent = active;
      if(a[1] == symbol || a[1] ==  active){}
      else{document.querySelector('.grid1').textContent = symbol;}
      if(a[2] == symbol || a[2] ==  active){}
      else{document.querySelector('.grid2').textContent = symbol;}
      if(a[3] == symbol || a[3] ==  active){}
      else{document.querySelector('.grid3').textContent = symbol;}
      if(a[4] == symbol || a[4] ==  active){}
      else{document.querySelector('.grid4').textContent = symbol;}
      if(a[5] == symbol || a[5] ==  active){}
      else{document.querySelector('.grid5').textContent = symbol;}
      if(a[6] == symbol || a[6] ==  active){}
      else{document.querySelector('.grid6').textContent = symbol;}
      if(a[7] == symbol || a[7] ==  active){}
      else{document.querySelector('.grid7').textContent = symbol;}
      if(a[8] == symbol || a[8] ==  active){}
      else{document.querySelector('.grid8').textContent = symbol;}
      if(a[9] == symbol || a[9] ==  active){}
      else{document.querySelector('.grid9').textContent = symbol;}
      document.querySelector('.turn').textContent = `${p1}'s Turn`;
    };
    check(); count++;}
    else{
      document.querySelector('.grid7').textContent = trophy;
      document.querySelector('.grid7').style.fontSize = '100%';
    }
    c[7]++;
    
    console.log(c[7]);
  })

  document.querySelector('.grid8').addEventListener('click',
  function() {
    document.querySelector('.grid8').textContent = symbol;
    document.querySelector('.grid8').style.fontSize = '100%';
    document.querySelector('.grid8:hover').style.transitionDuration = '0s';
    document.querySelector('.grid8:hover').style.transitionDelay = '0s';
    console.log(count);
    if(c[8] == 0)
    {
    if(count%2 == 0)
    {
      (a[8] = symbol);
      document.querySelector('.grid8').textContent = symbol;
      if(a[1] == symbol || a[1] ==  active){}
      else{document.querySelector('.grid1').textContent = active;}
      if(a[2] == symbol || a[2] ==  active){}
      else{document.querySelector('.grid2').textContent = active;}
      if(a[3] == symbol || a[3] ==  active){}
      else{document.querySelector('.grid3').textContent = active;}
      if(a[4] == symbol || a[4] ==  active){}
      else{document.querySelector('.grid4').textContent = active;}
      if(a[5] == symbol || a[5] ==  active){}
      else{document.querySelector('.grid5').textContent = active;}
      if(a[6] == symbol || a[6] ==  active){}
      else{document.querySelector('.grid6').textContent = active;}
      if(a[7] == symbol || a[7] ==  active){}
      else{document.querySelector('.grid7').textContent = active;}
      if(a[8] == symbol || a[8] ==  active){}
      else{document.querySelector('.grid8').textContent = active;}
      if(a[9] == symbol || a[9] ==  active){}
      else{document.querySelector('.grid9').textContent = active;}
      document.querySelector('.turn').textContent = `${p2}'s Turn`
    }
    else{
      (a[8] = active);
      document.querySelector('.grid8').textContent = active;
      if(a[1] == symbol || a[1] ==  active){}
      else{document.querySelector('.grid1').textContent = symbol;}
      if(a[2] == symbol || a[2] ==  active){}
      else{document.querySelector('.grid2').textContent = symbol;}
      if(a[3] == symbol || a[3] ==  active){}
      else{document.querySelector('.grid3').textContent = symbol;}
      if(a[4] == symbol || a[4] ==  active){}
      else{document.querySelector('.grid4').textContent = symbol;}
      if(a[5] == symbol || a[5] ==  active){}
      else{document.querySelector('.grid5').textContent = symbol;}
      if(a[6] == symbol || a[6] ==  active){}
      else{document.querySelector('.grid6').textContent = symbol;}
      if(a[7] == symbol || a[7] ==  active){}
      else{document.querySelector('.grid7').textContent = symbol;}
      if(a[8] == symbol || a[8] ==  active){}
      else{document.querySelector('.grid8').textContent = symbol;}
      if(a[9] == symbol || a[9] ==  active){}
      else{document.querySelector('.grid9').textContent = symbol;}
      document.querySelector('.turn').textContent = `${p1}'s Turn`;
    };
    check(); count++; }
    else{
      document.querySelector('.grid8').textContent = trophy;
      document.querySelector('.grid8').style.fontSize = '100%';
    }
    c[8]++;
  
  })

  document.querySelector('.grid9').addEventListener('click',
  function() {
    document.querySelector('.grid9').textContent = symbol;
    document.querySelector('.grid9').style.fontSize = '100%';
    document.querySelector('.grid9:hover').style.transitionDuration = '0s';
    document.querySelector('.grid9:hover').style.transitionDelay = '0s';
    console.log(count);
    if(c[9] == 0)
    {
    if(count%2 == 0)
    {
      (a[9] = symbol);
      document.querySelector('.grid9').textContent = symbol;
      if(a[1] == symbol || a[1] ==  active){}
      else{document.querySelector('.grid1').textContent = active;}
      if(a[2] == symbol || a[2] ==  active){}
      else{document.querySelector('.grid2').textContent = active;}
      if(a[3] == symbol || a[3] ==  active){}
      else{document.querySelector('.grid3').textContent = active;}
      if(a[4] == symbol || a[4] ==  active){}
      else{document.querySelector('.grid4').textContent = active;}
      if(a[5] == symbol || a[5] ==  active){}
      else{document.querySelector('.grid5').textContent = active;}
      if(a[6] == symbol || a[6] ==  active){}
      else{document.querySelector('.grid6').textContent = active;}
      if(a[7] == symbol || a[7] ==  active){}
      else{document.querySelector('.grid7').textContent = active;}
      if(a[8] == symbol || a[8] ==  active){}
      else{document.querySelector('.grid8').textContent = active;}
      if(a[9] == symbol || a[9] ==  active){}
      else{document.querySelector('.grid9').textContent = active;}
      document.querySelector('.turn').textContent = `${p2}'s Turn`
    }
    else{
      (a[9] = active);
      document.querySelector('.grid9').textContent = active;
      if(a[1] == symbol || a[1] ==  active){}
      else{document.querySelector('.grid1').textContent = symbol;}
      if(a[2] == symbol || a[2] ==  active){}
      else{document.querySelector('.grid2').textContent = symbol;}
      if(a[3] == symbol || a[3] ==  active){}
      else{document.querySelector('.grid3').textContent = symbol;}
      if(a[4] == symbol || a[4] ==  active){}
      else{document.querySelector('.grid4').textContent = symbol;}
      if(a[5] == symbol || a[5] ==  active){}
      else{document.querySelector('.grid5').textContent = symbol;}
      if(a[6] == symbol || a[6] ==  active){}
      else{document.querySelector('.grid6').textContent = symbol;}
      if(a[7] == symbol || a[7] ==  active){}
      else{document.querySelector('.grid7').textContent = symbol;}
      if(a[8] == symbol || a[8] ==  active){}
      else{document.querySelector('.grid8').textContent = symbol;}
      if(a[9] == symbol || a[9] ==  active){}
      else{document.querySelector('.grid9').textContent = symbol;}
      document.querySelector('.turn').textContent = `${p1}'s Turn`;
    };
    check(); count++;}
    else{
      document.querySelector('.grid9').textContent = trophy;
      document.querySelector('.grid9').style.fontSize = '100%';
    }
    c[9]++;
  
  })

document.querySelector('.replay').addEventListener('click',
function(){
  count = 0;
  for(let i  = 0; i <= 9; i++)
  {
    a[i] = `${i}`
    c[i] = 0;
    
  }
  for(let j = 1; j <= 9; j++)
  document.querySelector(`.grid${j}`).style.fontSize = '0%';
  let temp = symbol;
  symbol =active;
  active =  temp;
  
})

document.querySelector('.end').addEventListener('click',
function(){
  document.location.href = 'c.html';
})






