function checkResult(){
    var sum = 0;
    answer1 = document.getElementById('op1')
    answer2 = document.getElementById('op4')
    answer3 = document.getElementById('op5')

    //question 1
    if(answer1.checked == true){
      sum++
      document.getElementById('chk1').innerHTML = '&#10004';
      document.getElementById('chk1').style.color = 'green';
    } else {
      document.getElementById('chk1').innerHTML = "&#10006";
      document.getElementById('chk1').style.color = 'red';
    }

    if(answer2.checked == true){
      sum++
      document.getElementById('chk2').innerHTML = '&#10004';
      document.getElementById('chk2').style.color = 'green';
    } else {
      document.getElementById('chk2').innerHTML = "&#10006";
      document.getElementById('chk2').style.color = 'red';
    }

    if(answer3.checked == true){
      sum++
      document.getElementById('chk3').innerHTML = "&#10004";
      document.getElementById('chk3').style.color = 'green';
    } else {
      document.getElementById('chk3').innerHTML = "&#10006";
      document.getElementById('chk3').style.color = 'red'
    }

    document.getElementById('score').innerHTML = 'Score: ' + sum;
    
    var percentage = Math.round((sum * 100) / 3);
    document.getElementById('percentage').innerHTML = percentage + "%";
    document.getElementById('percentage').style.color = 'green';
    
    if(percentage < 50){
      document.getElementById('percentage').style.color = 'red'
    } else if(percentage == 100){
      document.getElementById('percentage').innerHTML = percentage + "% Good Job!";
    }
  }