// attaches an event handler with all elements that have the saveBtn class. when clicked the id attribute which is the hour of time block is received. Also retrieves the information in the text area.
$(function () {
    $('.saveBtn').on('click', function () {
      var hour = $(this).parent().attr('id');
      var text = $(this).siblings('.description').val().trim();
  
      localStorage.setItem(hour, text);
    });
  });

  $(document).ready(function () {
    $('.saveBtn').on('click', function () {});
//   updates each time block with the correct class depending on the time of day. The class that is assigned is working with the CSS file to determine what color the block will be. Also it retrieves the current hour by using dayjs().hour(). 
    function hourUpdater() {
        var currentHour = dayjs().hour();
        $('.time-block').each(function () {
            var hourBlock = parseInt($(this).attr('id').split('-')[1]);

            if (hourBlock < currentHour) {
                $(this).removeClass('future present').addClass('past');
            } else if (hourBlock === currentHour) {
                $(this).removeClass('past future').addClass('present');
            } else {
                $(this).removeClass('past present').addClass('future');
            }
        });
    }
  
    hourUpdater();
    setInterval(hourUpdater, 15000);
// sets the loop to iterate of ther hours of 9am to 5pm
    for (var i = 9; i <= 17; i++) {
        $('#hour-' + i + ' .description').val(localStorage.getItem('hour-' + i));
    }
  
    $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
  });
  