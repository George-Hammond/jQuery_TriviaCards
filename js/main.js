$(document).ready(() =>{
    //Question Show On Click
  $('.hint-box').on('click', () =>{
    $('.hint').slideToggle(500)
  })
  
  //Wrong answers fade out
  $('.wrong-answer-one').on('click', () =>{
    $('.wrong-text-one').fadeOut('slow')
  });
  $('.wrong-answer-two').on('click', () =>{
    $('.wrong-text-two').fadeOut('slow')
  });
  $('.wrong-answer-three').on('click', () =>{
    $('.wrong-text-three').fadeOut('slow')
  });
  
  //Wrong answers show frown face
  $('.wrong-answer-one').on('click', () =>{
    $('.frown').show().delay(3000).fadeOut('slow');
  });
  $('.wrong-answer-two').on('click', () =>{
    $('.frown').show().delay(3000).fadeOut('slow');
  });
  $('.wrong-answer-three').on('click', () =>{
    $('.frown').show().delay(3000).fadeOut('slow');
  })
  
  //Correct Answer 
  $('.correct-answer').on('click', ()=> {
    $('.frown').hide();
    $('.smiley').show();
    $('.wrong-text-one').fadeOut('slow')
    $('.wrong-text-two').fadeOut('slow')
    $('.wrong-text-three').fadeOut('slow')
  })
  });
