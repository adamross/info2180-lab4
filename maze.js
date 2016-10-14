window.onload = function(){
  var boundary = document.getElementsByClassName('boundary');
  var b = document.querySelectorAll('.boundary');
  var boundary1 = document.getElementById('boundary1');
  var start = document.getElementById('start');
  var end = document.getElementById('end');
  var status = document.getElementById('status');
  var maze = document.getElementById('maze');
  var loser = 0;

  // boundary1.addEventListener('mouseover', function(){
  //     this.setAttribute('class','boundary youlose');
  // });

  start.onclick = function(){
    for (var i=0; i<b.length; i++){
      b[i].onmouseover = function()
      {
        for (var j=0;j<b.length-1; j++){
          b[j].setAttribute('class', 'boundary youlose');
          status.innerHTML = "You Lose!";
        }
        loser++;
      }
    }

    for (var i=0;i<b.length-1; i++){
      b[i].setAttribute('class', 'boundary');
    }
    status.innerHTML = "Move your mouse over the \"S\" to begin.";
    loser = 0;

    document.onmouseover = function(some){
      var left = maze.offsetLeft;
      var right = maze.offsetRight;
      var top = maze.offsetTop;
      var bottom = maze.offsetBottom;
      var height = maze.offsetHeight;
      var width = maze.offsetWidth;
      var x = some.clientX;
      var y = some.clientY;

      if((x<left)||(x>right)||(y<top)||(y>bottom)){
        for (var j=0;j<b.length-1; j++){
          b[j].setAttribute('class', 'boundary youlose');
          status.innerHTML = "You Lose!";
          loser++;
        }
      }
    }

    end.onmouseover = function(){
      if(loser>0){
        status.innerHTML = "You Lose!";
      }
      else{
        status.innerHTML = "You Win!";
      }
    }

  }

  end.onmouseover = function(){
    status.innerHTML = "Nice try, Press \"S\" to Start";
  }
}
