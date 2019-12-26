$(function() {
    
    // creates a new li from the user textbox after a user presses 'Add Item'
    $('#js-shopping-list-form').submit(function( event ) {
      event.preventDefault();
      const userText = $(this).find('#shopping-list-entry');
      $(".shopping-list").append(
        '<li><span class="shopping-item">' + userText.val() + '</span>' +            
            '<div class="shopping-item-controls">' +
                '<button class="shopping-item-toggle">' +
                    '<span class="button-label">check</span>' +
                '</button>' +
                '<button class="shopping-item-delete">' +
                    '<span class="button-label">delete</span>' +
                '</button>' +
            '</div>' +
        '</li>'     
          );
        userText.val("");
    });
    
    // handles crossing out items by pressing the check button
    $('ul').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('li').find('.shopping-item').toggleClass("shopping-item__checked");
    });

    // handles removing li object by pressing the delete button
    $('ul').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });
    
  });