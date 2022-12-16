let players = document.getElementById("player");
let buns=document.getElementsByClassName("clikBtn");
let attempt=document.getElementById("attempts");
var inc,winCondition;
var gameend=false;
var i=0;
prompter();//calling function to ask for user name

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
          }
       else
        {
        buns[id].style.backgroundColor="red";
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
