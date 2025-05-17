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

  const form = document.getElementById("myForm");
  const popup = document.getElementById("popup");
  const overlay = document.getElementById("overlay");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent full-page navigation

    // Simulate form processing (e.g., validation, sending data)
    // You can use fetch() here for real submissions.

    // Show popup
    popup.style.display = "block";
    overlay.style.display = "block";
  });

  function closePopup() {
    popup.style.display = "none";
    overlay.style.display = "none";
    form.reset(); // Optional: reset form fields
  }