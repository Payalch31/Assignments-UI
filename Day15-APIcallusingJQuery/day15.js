



document.getElementById('btn').addEventListener('click', function () {
    var inputText = document.getElementById('inp').value;
    document.getElementById('h2').innerHTML = inputText;
});


$(document).ready(function() {
    $('#btn').click(function() {
      var inputText = $('#inp').val();
      $('#h1').text(inputText);
      $('#result').text(inputText).css({
        'color': 'red',
        'font-size': '18px',
        'margin-top': '10px'
      });
    });
  });