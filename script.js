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
//changed
  document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Stop form from reloading page

  const formData = new FormData(this);

  fetch("submit_form.php", {
    method: "POST",
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    const popup = document.getElementById("popup");
    popup.textContent = data;
    popup.style.display = "block";

    setTimeout(() => {
      popup.style.display = "none";
    }, 3000);

    document.getElementById("contactForm").reset();
  })
  .catch(error => {
    alert("There was an error. Please try again.");
    console.error("Error:", error);
  });
});
