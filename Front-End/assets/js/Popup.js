document.addEventListener('DOMContentLoaded', function() {
  var popupLink1 = document.getElementsByClassName('popup-link1')[0];
  var popupLink2 = document.getElementsByClassName('popup-link2')[0];
  var closeBtns = document.getElementsByClassName('close-btn');

  popupLink1.addEventListener('click', function(e) {
    e.preventDefault();
    var popup1 = document.getElementById('popup1');
    popup1.style.display = 'flex';
  });

  popupLink2.addEventListener('click', function(e) {
    e.preventDefault();
    var popup2 = document.getElementById('popup2');
    popup2.style.display = 'flex';
  });

  for (var j = 0; j < closeBtns.length; j++) {
    closeBtns[j].addEventListener('click', function() {
      var popup = this.closest('.popup');
      popup.style.display = 'none';
    });
  }
});
