console.log('welcome to chromatron.io');

// replace copyright year with current yr
var d = new Date(),
  y = d.getFullYear();
document.querySelectorAll('.copyright-year').forEach(function (span) {
  span.innerHTML = y;
});


// enable tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});
