$(function () {
    $('.saveBtn').on('click', function () {
      var hour = $(this).parent().attr('id');
      var text = $(this).siblings('.description').val().trim();
  
      localStorage.setItem(hour, text);
    });
  });
  
  $(document).ready(function () {
    $('.saveBtn').on('click', function () {});
  
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
  
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
  });
  