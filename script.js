$(function () {
    $('.saveBtn').on('click', function () {
      var hour = $(this).parent().attr('id');
      var text = $(this).siblings('.description').val().trim();
  
      localStorage.setItem(hour, text);
    });
  });
  
  $(document).ready(function () {
    $('.saveBtn').on('click', function () {});
  
    function hourUpdater() {}
  
    hourUpdater();
    setInterval(hourUpdater, 15000);
  
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
  });
  