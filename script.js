const images = [
    "/assets/guitar.jpg",
    "/assets/strawberry-matcha.jpg",
    "/assets/notis.jpg",
    "/assets/jigsaw.jpg"
  ];
  
  let currentIndex = 0;
  
  function showImage() {
    document.getElementById('gallery-image').src = images[currentIndex];
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
  }
  
  function openSpotify(url) {
    window.open("https://spotify.com", '_blank').focus();
  }