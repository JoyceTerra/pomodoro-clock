$(document).ready(function(){
  var buzzer = $("#buzzer")[0];
  //buzzer.play();
  var count = parseInt($("#num").html());
  var breakTime = parseInt($("#breakNum").html());
   
  //console.log(count);
  $("#reset").hide();  
  $("#start").click(function(){
   var counter = setInterval(timer, 1000); //setInterval takes a callback function in and a set amount of time ---1000 is one second---
    count *= 60; //to turn into minutes, take count--1000-- and multiply by 60
  
  function timer(){
    $("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #title1, #title2").hide(); //hides those variables while the tomer is working
    $("#timeType").show();
    $("#timeType").html("Session Time: ")
    count -=1; //decrement by one and when it hits zero its gonna stop, run this function every one second
    if(count===0){
      buzzer.play();
      clearInterval(counter);
      var startBreak = setInterval(breakTimer, 1000);
      $("#num").hide();
    }
    if(count % 60 >= 10){//meanig if it is not a single digit number
       $("#num").html(Math.floor(count/60)+ ":" + count%60);
       
      }else{
        $("#num").html(Math.floor(count/60)+ ":" + "0" + count%60);
       
      }
       
   
  
   function breakTimer(){
     $("#timeType").html("Break Time: ");
     $("#breakNum").show();
      breakTime  *=60;
     $("#timeType").show();
      breakTime -=1;
      if(breakTime===0){
      clearInterval(startBreak);
        buzzer.play();
      $("#reset").show();
        $("#breakNum, #timeType").hide(); //hides when break timer is over       
    }
     if(breakTime%60>=10){
       $("#breakNum").html(Math.floor(breakTime/60)+ ":" + breakTime%60);
       
      }else{
        $("#breakNum").html(Math.floor(breakTime/60)+":"+"0"+breakTime%60);
       
      }
    }
  }
  
});

  $("#reset").click(function(){ //when reset button is clicked,shows all the other options again
    count = 25;
    breakTime = 25;
  $("#num").html(count);
  $("#breakNum").html(breakTime);
  $("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #num, #title1, #title2").show();
    $("#reset, #timeType").hide();
  });
  
  $("#minus5Clock").click(function(){
    if(count>5){
  count -=5;
    $("#num").html(count);
  //console.log(count);
  }
  });
  
  $("#add5Clock").click(function(){
    count +=5;
    $("#num").html(count);
  //console.log(count);
  });
  
   $("#minus5Break").click(function(){
    if(breakTime > 5){
  breakTime -=5;
    $("#breakNum").html(breakTime);
  //console.log(count);
  }
  });
  
  $("#add5Break").click(function(){
    breakTime +=5;
    $("#breakNum").html(breakTime);
  //console.log(count);
  
  });
});