$(document).ready(function() {
    var floorNumber = 33;
    for (var i = floorNumber; i > 1; i--) {
      $('.numbers').append('<div class="button">' + i + '</div>');

    }

})
console.log('program works');
