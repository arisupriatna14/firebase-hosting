function checkResult(){
    var sum = 0;
    

    // let sum2 = [
    //   {
    //     answer: document.getElementById('d1')
    //   },
    //   {
    //     answer: document.getElementById('b2')
    //   },
    //   {
    //     answer: document.getElementById('a3')
    //   }, 
    //   {
    //     answer: document.getElementById('a4')
    //   },
    //   {
    //     answer: document.getElementById('d5')
    //   },
    //   {
    //     answer: document.getElementById('a6')
    //   },
    //   {
    //     answer: document.getElementById('c7')
    //   },
    //   {
    //     answer: document.getElementById('b8')
    //   },
    //   {
    //     answer: document.getElementById('c9')
    //   },
    //   {
    //     answer: document.getElementById('d10')
    //   }
    // ]

    let sum2 = [
      document.getElementById('d1'),
      document.getElementById('b2'),
      document.getElementById('a3'),
      document.getElementById('a4'),
      document.getElementById('d5')
    ]

    // for(var a = 0; a < sum2.length; a++){
    //   if(sum2[a].answer.checked == true){
    //     sum++
    //   }
    // }

    for(var a = 0; a < sum2.length; a++){
      if(sum2[a].checked == true){
        sum++
      }
    }
  
    document.getElementById('score').innerHTML = sum;
    
    var percentage = Math.round((sum * 100) / 10);
    document.getElementById('percentage').innerHTML = percentage + "%";
    document.getElementById('percentage').style.color = 'green';
    
    if(percentage < 50){
      document.getElementById('percentage').style.color = 'red';
    } else if(percentage == 100){
      document.getElementById('percentage').innerHTML = percentage + "% Good Job!";
    }
  
    document.getElementById('jawaban').innerHTML = '<ol> <li>D</li> <li>B</li> <li>A</li> <li>A</li> <li>D</li> <li>A</li> <li>C</li> <li>B</li> <li>C</li> <li>D</li> </ol>';
    
  
    
  }
  
  