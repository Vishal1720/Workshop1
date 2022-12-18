let players = document.getElementById("player");
let buns=document.getElementsByClassName("clikBtn");
let attempt=document.getElementById("attempts");
let timer=document.getElementById("timer");
var inc,winCondition;
var gameend=false;
var i=0,sec=0,min=0,hrs=0,count=0;
prompter();//calling function to ask for user name
function timeoutFunction()
{
  count++;
  sec=count;
  if(sec==60)
  {
    sec=0;
    count=0;
    min++;
    if(min==60)
    {
      min=0;
      hrs++;
  }
}

  timer.textContent="Time:"+hrs+":"+min+":"+sec;
}
    var a=setInterval(()=>{timeoutFunction(); },1000);//this method is used to call the method again and again for interval of 1000 milliseconds i.e 1second
function generateTreasureIndex()//Use to select a number for index where the treasure is there
{
     winCondition=Math.floor(Math.random()*16);
}
generateTreasureIndex();

function check(id)
  {
    
    if(gameend==false) 
        {
    console.log("Value is "+winCondition);
    console.log(buns.length);
    if(buns[id].style.backgroundColor=="red"||buns[id].style.backgroundColor=="green")
    {
        //This to prevent unecessary increment to attempts
    }
    else
    {
        if(id===winCondition)
         {
            
          buns[id].style.backgroundColor="green";
          gameend = true;
            let temp=i;
            buns[id].value="O";
        //   alert("Congrats you won in "+(temp+=1)+" attempts");
          }
       else
        {
        buns[id].style.backgroundColor="red";
        buns[id].value="X";
           }
    i++;
    attempt.textContent="Attempts:"+i;//attempts updated
    }

}
}


function prompter()
{
     var a=prompt("Enter your name");
     
     players.textContent+=a;//name added to para 
     
}

