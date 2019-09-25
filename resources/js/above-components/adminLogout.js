let is_hidden = true;

$('#abvDropdownMenuButton').on('click', function(evt){

    evt.preventDefault();

    is_hidden ? $('#abvDropdownMenu').removeClass('hidden') : $('#abvDropdownMenu').addClass('hidden');


    is_hidden ? is_hidden = false : is_hidden = true;
  
})



$(document).on('click', function(evt){

    const abvDropdownMenuButton = document.getElementById('abvDropdownMenuButton');

    if(!is_hidden && !(evt.target == abvDropdownMenuButton)) {
        $('#abvDropdownMenu').addClass('hidden');
    }

    
  
})




