$(document).ready(function () {

// use enter to add list items
  $('#item').keyup(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      $('.button').click();
    };
  }); 

// add item to list
  $('.button').click(function() {
    var txtbox = document.getElementById('item');
    var txtval = txtbox.value;
    event.preventDefault();

    if($.trim($('#item').val())) {
      $('<li class="items"></li>').appendTo('#list').html('<span>' + txtval + '</span><img class="delete" src="images/trash.png"/>');
      document.getElementById('item').value = '';
    };
  });

// remove item from list
  $('#list').on('click', '.delete', function(e) {
    e.preventDefault(); 
    $(this).parent().remove();
  });

// mark off item with opacity
  $('#list').on('click', 'li', function() {
    $(this).toggleClass('mark'); 
  });
  
// show trash icon over item
  $('#list').on('mouseenter', 'li', function() {
    $(this).children('.trash').toggleClass('show');
  });
  
  $('#list').on('mouseleave', 'li', function() {
    $(this).children('.trash').toggleClass('show');
  });

});

