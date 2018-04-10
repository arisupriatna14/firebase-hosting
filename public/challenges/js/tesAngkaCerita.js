function checkResult(){
  var sum = 0;
  answer1 = document.getElementById('c1')
  answer2 = document.getElementById('e2')
  answer3 = document.getElementById('a3')
  answer4 = document.getElementById('b4')
  answer5 = document.getElementById('a5')

  //question 1
  if(answer1.checked == true){
    sum++
    //document.getElementById('chk1').innerHTML = '&#10004';
    document.getElementById('chk1').style.color = 'green';
  } else {
    //document.getElementById('chk1').innerHTML = "&#10006";
    document.getElementById('chk1').style.color = 'red';
  }

  if(answer2.checked == true){
    sum++
    //document.getElementById('chk2').innerHTML = '&#10004';
    document.getElementById('chk2').style.color = 'green';
  } else {
    //document.getElementById('chk2').innerHTML = "&#10006";
    document.getElementById('chk2').style.color = 'red';
  }

  if(answer3.checked == true){
    sum++
    //document.getElementById('chk3').innerHTML = "&#10004";
    document.getElementById('chk3').style.color = 'green';
  } else {
    //document.getElementById('chk3').innerHTML = "&#10006";
    document.getElementById('chk3').style.color = 'red'
  }

  if(answer4.checked == true){
    sum++
    //document.getElementById('chk4').innerHTML = "&#10004";
    document.getElementById('chk4').style.color = 'green';
  } else {
    //document.getElementById('chk4').innerHTML = "&#10006";
    document.getElementById('chk4').style.color = 'red'
  }

  if(answer5.checked == true){
    sum++
    //document.getElementById('chk5').innerHTML = "&#10004";
    document.getElementById('chk5').style.color = 'green';
  } else {
    //document.getElementById('chk5').innerHTML = "&#10006";
    document.getElementById('chk5').style.color = 'red'
  }

  document.getElementById('score').innerHTML = sum;
  
  var percentage = Math.round((sum * 100) / 5);
  document.getElementById('percentage').innerHTML = percentage + "%";
  document.getElementById('percentage').style.color = 'green';
  
  if(percentage < 50){
    document.getElementById('percentage').style.color = 'red';
  } else if(percentage == 100){
    document.getElementById('percentage').innerHTML = percentage + "% Good Job!";
  }

  document.getElementById('jawaban').innerHTML = '<ol> <li>C</li> <li>E</li> <li>A</li> <li>B</li> <li>A</li> </ol>';
  

  
}

