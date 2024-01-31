function closePopup() {
    var popup = document.querySelector('.popup');
    var dont = document.querySelector('.dont');
    popup.style.display = 'none';
    dont.style.display = 'none';
  }

function openPopup() {
    var popup = document.querySelector('.popup');
    var dont = document.querySelector('.dont');
    popup.style.display = 'block';
    dont.style.display = 'block';
  }