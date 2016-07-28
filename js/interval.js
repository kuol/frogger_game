var photos = ['images/Heart.png', 'images/Key.png', 'images/Rock.png'];
var photo_index = 0;

function switchPhoto() {
  photo_index = (photo_index + 1) % photos.length;
  document.getElementById('big_photo').setAttribute('src', photos[photo_index]);
}

setInterval(switchPhoto, 1000);
